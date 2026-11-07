# Calculadora Integral PedPal

App web clínica (PWA) con tres escalas de cuidados paliativos pediátricos:

- **ACCAPED** — evaluación sistemática de necesidades asistenciales complejas.
- **Escala PaPaS** — Paediatric Palliative Screening Scale.
- **PedCom Ampliada** — identificación y clasificación de Paciente Crónico Complejo (PCC).

Identidad visual PEDPAL: Montserrat/Open Sans, paleta corporativa, franja multicolor y bottom‑nav fija.

## Instalación como aplicación (PWA)

- **Android (Chrome)**: abra la URL → menú ⋮ → «Instalar app».
- **iOS (Safari)**: abra la URL → Compartir → «Añadir a la pantalla de inicio».

Tras la primera carga, el service worker guarda los archivos y la app funciona sin red.

## Desarrollo local

```bash
python3 -m http.server 8731
# abrir http://127.0.0.1:8731/
```

## Estructura

```
.
├── index.html                 ← estructura PEDPAL (header + franja + bottom-nav)
├── css/style.css              ← identidad PEDPAL + componentes calc
├── js/data.js                 ← datos de las tres escalas (intacto)
├── js/app.js                  ← render y cálculo (intacto)
├── manifest.webmanifest       ← metadatos PWA
├── sw.js                      ← cache offline
├── icon.svg / icon-*.png      ← iconos
├── LICENSE                    ← CC BY-NC 4.0
└── README.md
```

## Licencia

© 2026 Álvaro Navarro Mingorance · [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/deed.es)

La licencia cubre el código y textos propios de la app. El material de referencia (escalas ACCAPED, PaPaS, PedCom y publicaciones citadas) conserva los derechos de sus titulares.
