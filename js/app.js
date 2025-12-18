// App Logic for PedPal Dashboard

/* --- DOMContentLoaded --- */
document.addEventListener('DOMContentLoaded', () => {
    // Initial Render
    renderSimpleScale('acca-view', accaData, 'acca');
    renderSimpleScale('papas-view', papasData, 'papas');
    renderPedcomScale('pedcom-phase1', pedcomPhase1, 'ped1');
    renderPedcomScale('pedcom-phase2', pedcomPhase2, 'ped2');

    // Date init
    const dateInput = document.getElementById('eval_date');
    if (dateInput) dateInput.valueAsDate = new Date();

    // Event Listeners for Tab Navigation
    setupNavigation();
});

/* --- NAVIGATION & UI --- */
function setupNavigation() {
    // Sidebar Navigation
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section-container');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');

            // Active Class updates
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Section display
            sections.forEach(s => s.classList.remove('active'));
            document.getElementById(targetId).classList.add('active');

            // Close mobile menu if open
            const sidebar = document.querySelector('.sidebar');
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('open');
            }
        });
    });

    // Calculator Tabs
    const calcTabs = document.querySelectorAll('.calc-tab-btn');
    const calcContents = document.querySelectorAll('.calc-content');

    calcTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-target');

            calcTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            calcContents.forEach(c => c.classList.remove('active'));
            const activeContent = document.getElementById(target + '-view');
            // Note: View IDs are different from tab targets slightly in structure? 
            // Let's stick to convention: tab data-target="acca" -> view id="acca-view"
            // Wait, in my render calls I used 'acca-view'.
            // Let's ensure consistency in HTML.
            // If data-target="acca", I look for id "acca-calc-wrapper" or similar?
            // Simplest: ID of content div is just the target name for internal Calc view? 
            // No, 'acca' is used for variable prefixes. Let's assume wrapper IDs: 'acca-wrapper', 'papas-wrapper', 'pedcom-wrapper'.
            document.getElementById(target + '-wrapper').classList.add('active');
        });
    });

    // Mobile Menu
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(e.target) && !menuToggle.contains(e.target) && sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
            }
        }
    });
}


/* --- RENDERERS --- */

function renderSimpleScale(containerId, data, prefix) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";

    data.forEach((section, index) => {
        let html = `
        <div class="scale-box">
            <div class="scale-header">${section.title}</div>
        `;

        if (prefix === 'acca') {
            section.items.forEach((opt) => {
                html += `
                <div class="item-row" onclick="selectRadio(this)">
                    <label>
                        <input type="radio" name="${prefix}_q${index}" value="${opt.s}" onchange="calcAcca()">
                        <span class="item-text">${opt.t}</span>
                        <span class="badge-score">${opt.s}</span>
                    </label>
                </div>`;
            });
        }

        if (prefix === 'papas') {
            section.items.forEach((opt) => {
                // Unique group ID for PaPaS sub-questions (1.1, 2.1, 2.2 etc)
                // Assuming format "X.X " at start
                let qID = opt.t.substring(0, 3).trim();
                // Fallback for safety if format differs, though data is fixed
                if (!qID.includes('.')) qID = "q" + index;

                html += `
                <div class="item-row" onclick="selectRadio(this)">
                    <label>
                        <input type="radio" name="${prefix}_${qID}" value="${opt.s}" onchange="calcPapas()">
                        <span class="item-text">${opt.t}</span>
                        <span class="badge-score">${opt.s}</span>
                    </label>
                </div>`;
            });
        }

        html += `</div>`;
        container.innerHTML += html;
    });
}

function renderPedcomScale(containerId, data, prefix) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";

    data.forEach((section, idx) => {
        let html = `<div class="scale-box"><div class="scale-header">${section.title}</div>`;

        section.items.forEach((item, iIdx) => {
            // Determine Input Type
            // If section is radio, OR item has a specific 'group' that isn't 'check', it's a radio.
            let inputType = (section.type === 'radio' || (item.group && item.group !== 'check')) ? 'radio' : 'checkbox';

            // Generate Name
            let name = "";
            if (section.type === 'radio') name = `${prefix}_s${idx}`; // Whole section is one group
            else if (item.group === 'check') name = `${prefix}_s${idx}_i${iIdx}`; // Unique checkbox
            else name = `${prefix}_s${idx}_${item.group}`; // Subgroup of radios (e.g. cant_meds)

            html += `
            <div class="item-row" onclick="selectRow(this)">
                <label>
                    <input type="${inputType}" name="${name}" value="${item.s}" onchange="calcPedcom()">
                    <span class="item-text">${item.t}</span>
                    <span class="badge-score">${item.s}</span>
                </label>
            </div>`;
        });
        html += `</div>`;
        container.innerHTML += html;
    });
}


/* --- SELECTION HELPERS --- */

function selectRadio(div) {
    const input = div.querySelector('input');
    if (!input) return;
    input.checked = true;

    const name = input.name;
    const allRadios = document.getElementsByName(name);
    allRadios.forEach(r => {
        const row = r.closest('.item-row');
        if (row) row.classList.remove('selected');
    });
    div.classList.add('selected');

    // Trigger calc
    input.onchange();
}

function selectRow(div) {
    const input = div.querySelector('input');
    if (!input) return;

    if (input.type === 'radio') {
        selectRadio(div);
    } else {
        // Toggle checkbox if clicking row (not input itself handled by label but we need custom logic if we preventDefault, 
        // but label click handles it naturally. Just update class.)
        // We use a small timeout to let the change event happen or check current state
        setTimeout(() => {
            if (input.checked) div.classList.add('selected');
            else div.classList.remove('selected');
        }, 0);
    }
}

// Global listener for checkboxes to sync style if clicked directly
document.addEventListener('change', (e) => {
    if (e.target.type === 'checkbox') {
        const row = e.target.closest('.item-row');
        if (row) {
            if (e.target.checked) row.classList.add('selected');
            else row.classList.remove('selected');
        }
    }
});


/* --- CALCULATORS (LITERAL LOGIC) --- */

function calcAcca() {
    let total = 0;
    // Walk through data sections to find names
    accaData.forEach((sec, idx) => {
        const radios = document.getElementsByName(`acca_q${idx}`);
        for (let r of radios) {
            if (r.checked) total += parseFloat(r.value);
        }
    });

    const scoreVal = document.getElementById('dash-acca-score');
    if (scoreVal) scoreVal.innerText = total;

    let msg = "";
    let color = "";
    if (total <= 29) { msg = "BAJA COMPLEJIDAD (≤ 29)"; color = "#28a745"; }
    else if (total <= 49) { msg = "MEDIA COMPLEJIDAD (30-49)"; color = "#F7941D"; }
    else { msg = "ALTA COMPLEJIDAD (≥ 50)"; color = "#EC008C"; }

    // Update Dashboard Color/Tooltip
    if (scoreVal) {
        scoreVal.style.color = color;
        scoreVal.title = msg; // Simple tooltip for interp
    }

    const dashInterp = document.getElementById('dash-acca-interp');
    if (dashInterp) {
        dashInterp.innerText = msg;
        dashInterp.style.color = color;
    }

    // Report Footer Update
    const repFooter = document.getElementById('acca-report-footer');
    const repScore = document.getElementById('report-acca-score');
    const repInterp = document.getElementById('report-acca-interp');

    if (repFooter && repScore && repInterp) {
        repFooter.style.display = 'block';
        repScore.innerText = total;
        repScore.style.color = color;
        repInterp.innerText = msg;
        repInterp.style.color = color;
    }
}

function calcPapas() {
    let total = 0;
    const container = document.getElementById('papas-view');
    if (!container) return;
    const inputs = container.querySelectorAll('input:checked');
    inputs.forEach(i => total += parseFloat(i.value));

    const scoreVal = document.getElementById('dash-papas-score');
    if (scoreVal) scoreVal.innerText = total;

    let msg = "";
    let color = "";
    // Scores: <10, 10-14, 15-24, >=25
    if (total < 10) { msg = "Score < 10: Continuar tratamiento estándar"; color = "#28a745"; }
    else if (total <= 14) { msg = "Score 10-14: Enfoque Paliativo (Introducción)"; color = "#ffc107"; }
    else if (total <= 24) { msg = "Score 15-24: Cuidados Paliativos Generales"; color = "#F7941D"; }
    else { msg = "Score ≥ 25: Cuidados Paliativos Especializados"; color = "#EC008C"; }

    if (scoreVal) {
        scoreVal.style.color = color;
        scoreVal.title = msg;
    }

    const dashInterp = document.getElementById('dash-papas-interp');
    if (dashInterp) {
        // PaPaS messages are long "Score < 10: Continuar..."
        // We might want to shorten them for the dashboard display
        let shortMsg = msg.split(':')[1] ? msg.split(':')[1].trim() : msg;
        dashInterp.innerText = shortMsg;
        dashInterp.title = msg; // Full msg on hover
        dashInterp.style.color = color;
    }

    // Report Footer Update
    const repFooter = document.getElementById('papas-report-footer');
    const repScore = document.getElementById('report-papas-score');
    const repInterp = document.getElementById('report-papas-interp');

    if (repFooter && repScore && repInterp) {
        repFooter.style.display = 'block';
        repScore.innerText = total;
        repScore.style.color = color;
        repInterp.innerText = msg; // Full msg for report
        repInterp.style.color = color;
    }
}

function calcPedcom() {
    let score1 = 0;
    let score2 = 0;

    // Phase 1
    const c1 = document.getElementById('pedcom-phase1');
    if (c1) c1.querySelectorAll('input:checked').forEach(i => score1 += parseFloat(i.value));

    // Threshold >= 6.5
    const isPCC = score1 >= 6.5;
    const phase2Div = document.getElementById('phase-2-container');

    if (isPCC) {
        if (phase2Div) phase2Div.style.display = 'block';
        // Calculate Phase 2
        const c2 = document.getElementById('pedcom-phase2');
        if (c2) c2.querySelectorAll('input:checked').forEach(i => score2 += parseFloat(i.value));
    } else {
        if (phase2Div) phase2Div.style.display = 'none';
        score2 = 0;
    }

    let total = score1 + score2;
    const scoreVal = document.getElementById('dash-pedcom-score');
    if (scoreVal) scoreVal.innerText = total;

    // We can also colorize based on PCC vs Non-PCC
    if (scoreVal) {
        if (!isPCC) {
            scoreVal.style.color = "#6c757d";
            scoreVal.title = "No cumple criterios PCC (< 6.5)";
        } else {
            let msg = "";
            let color = "";
            if (total <= 10) { msg = "BAJA COMPLEJIDAD (6.5 - 10)"; color = "#28a745"; }
            else if (total <= 16) { msg = "MODERADA COMPLEJIDAD (10.5 - 16)"; color = "#F7941D"; }
            else if (total <= 21) { msg = "ALTA COMPLEJIDAD (16.5 - 21)"; color = "#F7941D"; }
            else { msg = "COMPLEJIDAD EXTREMA (> 21.5)"; color = "#EC008C"; }

            scoreVal.style.color = color;
            scoreVal.title = "PACIENTE CRÓNICO COMPLEJO: " + msg;

            const dashInterp = document.getElementById('dash-pedcom-interp');
            if (dashInterp) {
                dashInterp.innerText = msg; // "ALTA COMPLEJIDAD..."
                dashInterp.style.color = color;
            }
        }
        if (dashInterp) {
            dashInterp.innerText = "No PCC";
            dashInterp.style.color = "#6c757d";
        }
    }

    // Report Footer Update
    const repFooter = document.getElementById('pedcom-report-footer');
    const repScore = document.getElementById('report-pedcom-score');
    const repInterp = document.getElementById('report-pedcom-interp');

    if (repFooter && repScore && repInterp) {
        repFooter.style.display = 'block';
        repScore.innerText = total;
        // Logic to determine report color/msg (simplified re-check or use vars if available)
        let finalColor = "#6c757d";
        let finalMsg = "No cumple criterios PCC (< 6.5)";

        if (isPCC) {
            if (total <= 10) { finalMsg = "BAJA COMPLEJIDAD (6.5 - 10)"; finalColor = "#28a745"; }
            else if (total <= 16) { finalMsg = "MODERADA COMPLEJIDAD (10.5 - 16)"; finalColor = "#F7941D"; }
            else if (total <= 21) { finalMsg = "ALTA COMPLEJIDAD (16.5 - 21)"; finalColor = "#F7941D"; }
            else { finalMsg = "COMPLEJIDAD EXTREMA (> 21.5)"; finalColor = "#EC008C"; }

            finalMsg = "PACIENTE CRÓNICO COMPLEJO: " + finalMsg;
        }

        repScore.style.color = finalColor;
        repInterp.innerText = finalMsg;
        repInterp.style.color = finalColor;
    }
}

/* --- RESET & PRINT --- */

function resetScale(scale) {
    if (scale === 'acca') {
        renderSimpleScale('acca-view', accaData, 'acca');
        calcAcca();
    } else if (scale === 'papas') {
        renderSimpleScale('papas-view', papasData, 'papas');
        calcPapas();
    } else if (scale === 'pedcom') {
        renderPedcomScale('pedcom-phase1', pedcomPhase1, 'ped1');
        renderPedcomScale('pedcom-phase2', pedcomPhase2, 'ped2');
        const p2 = document.getElementById('phase-2-container');
        if (p2) p2.style.display = 'none';
        calcPedcom();
    }
}

function printReport() {
    window.print();
}

function goToScale(scaleId) {
    // 1. Activate Calculator Section
    const calcLink = document.querySelector('.nav-link[data-target="calculator"]');
    if (calcLink) calcLink.click();

    // 2. Activate Specific Tab
    // Short timeout to ensure section rendering if there are animations
    setTimeout(() => {
        const tabBtn = document.querySelector(`.calc-tab-btn[data-target="${scaleId}"]`);
        if (tabBtn) tabBtn.click();
    }, 50);
}
