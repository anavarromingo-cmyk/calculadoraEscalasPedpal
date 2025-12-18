/* ==========================================================================
   DATOS: ACCA PED (Literal del PDF 1)
   ========================================================================== */
const accaData = [
    {
        title: "VALUACIÓN DE LA RESPIRACIÓN",
        items: [
            {t: "Respiración normal (apropiada para la edad), ningún episodio de alteración respiratoria. Uso rutinario de inhaladores, nebulizadores, etc.", s:0},
            {t: "Episodios de broncoespasmo y tos o dificultad respiratoria, que no responden a tratamientos autogestionados y necesitan intervención especializada. O Necesidad de oxigenoterapia. O Presenta mayor susceptibilidad a infecciones pulmonares. O Requiere fisioterapia diaria para mantener la funcionalidad respiratoria óptima.", s:5},
            {t: "Es capaz de respirar autónomamente a través de la traqueostomía que viene autogestionada o con la ayuda de operadores/familiares. Vías aéreas permeables pero cánula de traqueostomía estrecha. O Es capaz de respirar autónomamente durante el día pero necesita ventilador mecánico durante la noche. La ventilación puede ser interrumpida incluso hasta 48 horas sin alteraciones clínicas. O Utiliza CPAP (Continuous Positive Airways Pressure).", s:10},
            {t: "Presenta apneas frecuentes Y/O Dificultad respiratoria que compromete la vida. Extrema dificultad en la respiración, que puede necesitar aspiraciones para mantener libres las vías aéreas, realizadas por un operador competente. O La traqueostomía requiere aspiraciones frecuentes Y/O Requiere ventilación nocturna por capacidad respiratoria limitada, podría sobrevivir a la desconexión accidental pero esto comportaría molestias que requerirían soporte hospitalario Y/O Presenta secreciones excesivas que requieren aspiraciones frecuentes.", s:20},
            {t: "Incapacidad de respiración autónoma, requiere ventilación mecánica continua. O No presenta impulso respiratorio cuando duerme o está inconsciente y requiere ventilación y presencia de operador 1:1 mientras duerme, ya que la desconexión podría ser fatal. O La traqueostomía es altamente inestable, oclusiones frecuentes, dificultad en la sustitución de la cánula.", s:25}
        ]
    },
    {
        title: "VALUACIÓN DE LA ALIMENTACIÓN",
        items: [
            {t: "Autónomo en la ingesta de alimentos y bebidas por vía oral, alcanza el requerimiento nutricional completo. Adecuada a la edad.", s:0},
            {t: "Necesita mayor asistencia respecto a la prevista para su edad (ej. el niño se alimenta por boca pero utilizando vaso y cuchara especiales para la palatosquisis). O Necesita supervisión, consejos y aliento para la asunción de alimentos y bebidas, mayor respecto a la prevista para su edad. O El progenitor necesita apoyo y consejos sobre la alimentación ya que el escaso conocimiento actual (incluidas las consecuencias de inhalación de alimentos o bebidas) podría llevar a un empeoramiento importante de la condición base. O Necesita asistencia completa en la alimentación porque su desarrollo no es adecuado, pero esto no requiere mucho tiempo.", s:5},
            {t: "Necesita asistencia completa en la alimentación para garantizar una adecuada asunción de alimentos y esto requiere mucho tiempo (incluye la administración de alimentos líquidos). O Plan nutricional especial decidido por una (logopeda?).", s:10},
            {t: "Incapaz de ingerir sólidos o líquidos por vía oral. Se utilizan todos los instrumentos artificiales necesarios para la alimentación (gastrostomía, yeyunostomía), SNG incluido. O Presencia de disfagia que requiere la gestión de un plan terapéutico que prevea intervenciones adicionales para garantizar una adecuada nutrición o hidratación, reduce el riesgo de sofocamiento, inhalación y mantiene la permeabilidad de las vías aéreas ej. aspiración. O Problemas en la asunción de alimentos y bebidas, que requieren intervenciones para garantizar el estado nutricional adecuado. O Pérdida de peso no prevista que comporta riesgos para el niño y requiere intervenciones adecuadas. O Problemas relacionados con el uso de aparatos para la nutrición que requieren reevaluación y revisión.", s:15},
            {t: "Hidratación y sustancias nutritivas administradas totalmente por vía intravenosa (NPT).", s:20}
        ]
    },
    {
        title: "VALUACIÓN DE CRISIS CONVULSIVAS O ESTADO ALTERADO DE CONCIENCIA",
        items: [
            {t: "Ninguna presencia de convulsiones.", s:0},
            {t: "Crisis convulsivas bien controladas con la terapia actual.", s:2},
            {t: "Crisis convulsivas ocasionales o pérdida de conciencia, ocurridas en los últimos tres meses, que han requerido la intervención de personal competente para reducir el riesgo de complicaciones, con o sin la administración de fármacos.", s:5},
            {t: "Alteración del estado de conciencia o convulsiones, con pérdida de conciencia completa, que requieren frecuentemente (más de una vez al mes) intervenciones específicas para reducir el riesgo de complicaciones y pueden requerir la administración de fármacos por parte de personal competente o de una persona adiestrada (Resolución del problema médico in situ).", s:10},
            {t: "Necesita cada día intervención por parte de personal competente. Es requerida la intervención médica para identificar e implementar intervenciones adecuadas para resolver los riesgos correlacionados. O El niño tiene crisis convulsivas más de 4 veces a la semana, que requieren intervenciones complejas. (Por intervenciones complejas se entiende diversos métodos de administración de fármacos, que requieren protocolos de seguridad ej. Suministro de oxígeno y aspiración). O El niño en esta categoría es muy inestable (difícil control de la epilepsia).", s:15},
            {t: "Crisis convulsivas diarias difícilmente controlables o que degeneran en inconsciencia, que no responden a los tratamientos de emergencia y conllevan un alto riesgo para la salud del niño mismo o de los otros (ej. resistente a la administración de Midazolam por vía oral).", s:20}
        ]
    },
    {
        title: "VALUACIÓN DE LA PIEL E INTEGRIDAD TISULAR",
        items: [
            {t: "Ningún signo de lesiones por presión o compromiso cutáneo.", s:0},
            {t: "Presencia de lesiones por presión o lesiones menores que requieren tratamientos. O Compromiso activo de la piel que requiere al menos un control clínico semanal y que responde al tratamiento.", s:1},
            {t: "Heridas abiertas, que responden al tratamiento. O Compromiso activo de la piel, que requiere al menos un control semanal y que responde al tratamiento. O Alto riesgo de daño a la piel, que requiere intervenciones preventivas, por parte del personal, varias veces al día, orientadas a evitar el compromiso de la integridad cutánea.", s:3},
            {t: "Heridas abiertas que no responden a los tratamientos y requieren al menos un control diario. O Compromiso activo de la piel que requiere al menos un control diario. O Medicaciones específicas programadas in situ varias veces a la semana, con respuesta a los tratamientos. O Necesita una supervisión regular por parte de un consultor.", s:4},
            {t: "Compromiso de la piel o quemaduras peligrosas para la vida del paciente, que requieren intervenciones complejas y dolorosas por un periodo prolongado.", s:5}
        ]
    },
    {
        title: "VALUACIÓN DEL ESTADO DE MOVILIDAD",
        items: [
            {t: "A pesar de su enfermedad el niño se mueve de manera independiente, adecuada a la edad y estadio evolutivo.", s:0},
            {t: "Capaz de mantener la posición erecta (apropiadamente a la edad y estadio evolutivo) pero necesita de asistencia y soporte para acceder a las actividades escolares y extra.", s:1},
            {t: "Completamente incapaz de mantener la estación erecta pero hábil para ayudar en los desplazamientos y/o en los cambios de posición o tono muscular reducido que interfiere con el equilibrio o el movimiento.", s:3},
            {t: "Incapaz de moverse de modo adecuado al estadio evolutivo. Mantenido en una posición (silla o cama) y a causa del riesgo de daño físico, decúbitos o dolor a la movilización necesita de posicionamiento cuidadoso y es incapaz de colaborar o necesita de más de 1 asistente para cambiar posición o ser transportado. O A elevado riesgo de sufrir daños (por tropiezo, caída, etc.) o hiperactividad que requiere un plan de gestión estructurado o una supervisión 1:1. O Contracciones involuntarias que ponen en riesgo al niño y a los asistentes. O Instrumentación / aparatos que limitan la oportunidad de movimiento.", s:5}
        ]
    },
    {
        title: "VALUACIÓN DE LA COMUNICACIÓN",
        items: [
            {t: "Comunica claramente, verbalmente y no, de modo adecuado a sus necesidades evolutivas.", s:0},
            {t: "Entiende bien en su idioma. Puede haber necesidad de traducción si no es de lengua madre. Sabe entender y comunicar claramente, de palabra y no, en su lengua madre de modo adecuado a su estadio evolutivo.", s:1},
            {t: "Necesita de incitación para comunicar sus necesidades. La habilidad del niño para entender y comunicar es cónsona a la edad y al estadio evolutivo. Los asistentes pueden ser capaces de anticipar las necesidades mediante signos no verbales ligados a la familiaridad con el niño. Lenguaje expresivo o receptivo.", s:1},
            {t: "La comunicación de las necesidades elementales es difícil de entender o interpretar, aunque sea solicitada, salvo para las personas que tienen familiaridad con el niño y requiere soporte regular. Uso de métodos comunicativos diversos (ej. lenguaje de señas) por niño con déficit sensorial. Y / O Poner al niño en grado de ser entendido o comunicar sus necesidades elementales, las solicitudes, las ideas requiere frecuente y significativa ayuda por parte de los asistentes y figuras profesionales, incluso con personas cercanas.", s:5}
        ]
    },
    {
        title: "VALUACIÓN DEL SUEÑO Y DEL DESCANSO",
        items: [
            {t: "Ritmo sueño vigilia adecuado a la edad, sin factores de riesgo.", s:0},
            {t: "Dificultad para establecer una rutina adecuada al ir a la cama y ritmo de sueño adecuados a la edad con recaídas sobre la familia o inquietud que influye en los patrones del sueño.", s:2},
            {t: "El sueño de los padres / cuidadores, viene a menudo interrumpido a causa del patrón del sueño del niño o de sus necesidades asistenciales.", s:3},
            {t: "Extrema privación de sueño para los padres / cuidadores, ligada a su condición. Posibles riesgos durante el sueño (apnea, convulsiones, inhalación que requiera aspiración).", s:5}
        ]
    },
    {
        title: "VALUACIÓN DE LA CONTINENCIA Y DE LA EVACUACIÓN",
        items: [
            {t: "Continencia de orina y heces (apropiadas para edad y grado de desarrollo).", s:0},
            {t: "El cuidado de la continencia se realiza de rutina, día a día y de modo apropiado a la edad; La incontinencia de orina es gestionada por ejemplo a través de fármacos, evacuaciones regulares, absorbentes higiénicos, fundas para el pene, etc.", s:1},
            {t: "Es capaz de mantener el pleno control de los movimientos intestinales y tiene una estomía estable o puede tener ocasionalmente incontinencia fecal. O BIEN La cura de la continencia es de rutina, pero requiere un monitoreo para reducir al mínimo los riesgos, por ejemplo, aquellos asociados a catéteres urinarios, a doble incontinencia y/o la gestión de grave constipación.", s:5},
            {t: "El cuidado de la continencia es problemático y requiere una intervención tempestiva por parte de una persona competente.", s:10},
            {t: "O BIEN Cateterismo complicado/difícil (por ejemplo, es regularmente incontinente de heces más veces al día o tiene una estomía que necesita especial atención más veces al día).", s:15},
            {t: "Diálisis peritoneal / Hemodiálisis. Después de un procedimiento complicado.", s:20}
        ]
    },
    {
        title: "VALUACIÓN ADMINISTRACIÓN FÁRMACOS",
        items: [
            {t: "Persona competente o fármaco auto-administrado de modo apropiado a la edad.", s:0},
            {t: "Requiere una persona adecuadamente adiestrada para administrar los fármacos a causa de: Edad, Falta de cumplimiento, Tipo de medicina, Vía de administración del fármaco, Lugar en el que el fármaco debe ser administrado.", s:1},
            {t: "Requiere administración de un régimen de medicina por parte de una persona competente Y Monitoreo a causa del potencial de fluctuación de la condición médica que puede ser no problemático de gestionar. Y/O Tiene un régimen de tratamiento con fármacos que requiere una gestión por parte de una persona competente a causa de una condición fluctuante y/o inestable o para la gestión del síntoma.", s:3},
            {t: "Tiene un régimen de tratamiento con fármacos que requiere una gestión diaria por parte de una persona competente y la referencia a un médico para garantizar una gestión eficaz de los síntomas asociados a una condición rápidamente modificable/deteriorable. Y/O Tiene un régimen de tratamiento con fármacos que requiere una gestión diaria por parte de una persona competente y la referencia a un médico para garantizar una gestión eficaz de los síntomas y del dolor, asociados a una condición rápidamente modificable/deteriorable, cuando es requerido un monitoreo 1:1 entre el monitoreo de los síntomas y su gestión.", s:5}
        ]
    },
    {
        title: "VALUACIÓN DEL DOLOR",
        items: [
            {t: "Ningún dolor evidente.", s:0},
            {t: "Episodios de dolor en las últimas 4 semanas pero controlados con fármacos.", s:1},
            {t: "Episodios de dolor casi diarios que requieren prescripciones regulares de fármacos para dolor crónico.", s:2},
            {t: "Episodios de dolor severo-no controlado, que conlleva trastornos de comportamiento (ej. alteraciones ritmo sueño/vigilia) y requiere una gestión del dolor compleja-dolor crónico con exacerbaciones agudas de dolor.", s:3},
            {t: "Terapia antálgica especializada.", s:5}
        ]
    },
    {
        title: "VALUACIÓN DE EVENTOS ESPECÍFICOS/IMPREVISTOS Y/O IMPREVISIBLES",
        items: [
            {t: "Ningún evento imprevisible.", s:0},
            {t: "Pueden estar presentes uno o más eventos simultáneamente.", s:20},
            {t: "Evento repentino/imprevisible que podría conducir a la muerte.", s:50}
        ]
    }
];

/* ==========================================================================
   DATOS: PaPaS (Literal del PDF 2)
   ========================================================================== */
const papasData = [
    {
        title: "Dominio 1: Trayectoria de la Enfermedad",
        items: [
            {t: "1.1 Estabilidad: Estable / Impacto bajo en actividades cotidianas", s:0},
            {t: "1.1 Estabilidad: Deterioro lento sin impacto en actividades cotidianas", s:1},
            {t: "1.1 Estabilidad: No estable con impacto y limitaciones en actividades cotidianas", s:2},
            {t: "1.1 Estabilidad: Deterioro significativo con importantes restricciones en actividades", s:4}
        ]
    },
    {
        title: "Dominio 2: Resultado Esperado y Carga del Tratamiento",
        items: [
            {t: "2.1 Resultado esperado: Tratamiento dirigido a la curación (Curativo)", s:0},
            {t: "2.1 Resultado esperado: Permite el control de la enfermedad, aumentando expectativa y calidad de vida", s:1},
            {t: "2.1 Resultado esperado: No lleva a la curación ni permite un buen control, pero determina una mejora en la calidad de vida", s:2},
            {t: "2.1 Resultado esperado: No controla la evolución de la enfermedad y no mejora la calidad de vida", s:4},
            // Pregunta 2.2
            {t: "2.2 Carga tratamientos: Inexistente o mínimos problemas", s:0},
            {t: "2.2 Carga tratamientos: Carga / molestia leve", s:1},
            {t: "2.2 Carga tratamientos: Carga / molestia media", s:2},
            {t: "2.2 Carga tratamientos: Carga / molestia alta o excesiva", s:4}
        ]
    },
    {
        title: "Dominio 3: Síntomas y Problemas Asociados",
        items: [
            {t: "3.1 Intensidad síntomas: Paciente asintomático", s:0},
            {t: "3.1 Intensidad síntomas: Síntomas leves y fácilmente controlables", s:1},
            {t: "3.1 Intensidad síntomas: Algunos síntomas son moderados y controlables", s:2},
            {t: "3.1 Intensidad síntomas: Algunos síntomas son graves o difíciles de controlar", s:4},
            // 3.2 Distress Paciente
            {t: "3.2 Distress Paciente: Ausente", s:0},
            {t: "3.2 Distress Paciente: Leve", s:1},
            {t: "3.2 Distress Paciente: Moderado", s:2},
            {t: "3.2 Distress Paciente: Importante / Severo", s:4},
            // 3.3 Distress Familia
            {t: "3.3 Distress Familia: Ausente", s:0},
            {t: "3.3 Distress Familia: Leve", s:1},
            {t: "3.3 Distress Familia: Moderado", s:2},
            {t: "3.3 Distress Familia: Importante / Severo", s:4}
        ]
    },
    {
        title: "Dominio 4: Preferencias y Necesidades",
        items: [
            {t: "4.1 Preferencias Familia: Desean continuar con todo el tratamiento curativo / No desean cuidados paliativos", s:0},
            {t: "4.1 Preferencias Familia: Presentan dudas, ambivalencia o desacuerdo sobre el enfoque de cuidado", s:2},
            {t: "4.1 Preferencias Familia: Desean un enfoque de cuidados paliativos", s:4},
            // 4.2 Preferencias Equipo
            {t: "4.2 Preferencias Equipo: Consideran que el paciente NO se beneficiaría de un enfoque paliativo", s:0},
            {t: "4.2 Preferencias Equipo: Consideran que el paciente SÍ se beneficiaría de un enfoque paliativo", s:4}
        ]
    },
    {
        title: "Dominio 5: Expectativa de Vida Estimada",
        items: [
            {t: "5.1 Expectativa de vida: Algunos años", s:0},
            {t: "5.1 Expectativa de vida: Meses o 1-2 años", s:1},
            {t: "5.1 Expectativa de vida: Semanas / Meses", s:3},
            {t: "5.1 Expectativa de vida: Días / Semanas", s:4},
            // 5.2 Pregunta Sorpresa
            {t: "5.2 Pregunta Sorpresa: Sí, me sorprendería (Es probable que viva más)", s:0},
            {t: "5.2 Pregunta Sorpresa: No, no me sorprendería", s:2}
        ]
    }
];

/* ==========================================================================
   DATOS: PedCom Ampliada (Literal PDF Tesis)
   Lógica: 
   - Fase 1 (1-10): Suma. Si >= 6.5 -> PCC.
   - Fase 2 (11-12): Si es PCC, mostrar y sumar.
   - Definición de "mixed": Algunos items son checkbox (se suman), otros son radios (mutuamente excluyentes en subgrupo).
   ========================================================================== */
const pedcomPhase1 = [
    {
        title: "1) Atención especializada (al menos una revisión al año)",
        type: "radio",
        items: [
            {t: "Menos de cuatro especialidades médicas o quirúrgicas", s:1},
            {t: "Cuatro o más especialidades y/o seguimiento por Unidad de Paciente Crónico Complejo y/o Cuidados Paliativos", s:2}
        ]
    },
    {
        title: "2) Medicación de uso crónico (prescrita por especialista de atención primaria u hospitalaria)",
        type: "mixed",
        items: [
            // Radio group para cantidad
            {t: "Menos de cinco medicamentos", s:1, group: "cant_meds"},
            {t: "Cinco o más medicamentos", s:2, group: "cant_meds"},
            // Checkboxes adicionales
            {t: "Administración de medicación a través de bomba de infusión subcutánea (p.ej. insulina o inmunoglobulinas)", s:1, group: "check"},
            {t: "Administración de medicación mediante bomba de infusión intratecal (p.ej. bomba de baclofeno)", s:1, group: "check"},
            {t: "Medicación o tratamiento de aplicación/administración exclusiva hospitalaria", s:1, group: "check"},
            {t: "Medicación intravenosa domiciliaria", s:2, group: "check"}
        ]
    },
    {
        title: "3) Necesidades específicas de alimentación",
        type: "radio",
        items: [
            {t: "Dieta adaptada o de exclusión extensa", s:1},
            {t: "Alimentación mediante dispositivo de nutrición enteral con posibilidad de fraccionar alimentación durante el día", s:2},
            {t: "Alimentación mediante dispositivo de nutrición enteral sin posibilidad de fraccionar alimentación durante el día", s:3},
            {t: "Nutrición parenteral", s:4}
        ]
    },
    {
        title: "4) Necesidad de cuidados respiratorios específicos (al menos 6 meses)",
        type: "mixed",
        items: [
            {t: "Necesidad de monitorización no invasiva continua o durante el sueño", s:1, group: "check"},
            {t: "Necesidad de aspiración diaria de secreciones", s:1, group: "check"},
            {t: "Oxígeno-dependencia (uso continuado o durante el sueño)", s:1, group: "check"},
            {t: "Paciente portador de traqueostomía", s:3, group: "check"},
            // Radio group ventilación
            {t: "Necesidad de ventilación (invasiva o no) que permite desconexiones", s:3, group: "vent"},
            {t: "Necesidad de ventilación (invasiva o no) que no permite desconexiones (uso > 16 horas/día)", s:4, group: "vent"}
        ]
    },
    {
        title: "5) Desarrollo psicomotor, problemas de movilidad, limitaciones funcionales",
        type: "radio",
        items: [
            {t: "Retraso psicomotor y/o limitaciones funcionales leves (excluye paraplejia)", s:1},
            {t: "Retraso psicomotor moderado y/o limitaciones funcionales moderadas (incluye paraplejia)", s:2},
            {t: "Retraso psicomotor grave y/o limitaciones funcionales graves con alta dependencia", s:3}
        ]
    },
    {
        title: "6) Patología visual y auditiva",
        type: "mixed",
        items: [
            {t: "Patología visual y/o alteración de la agudeza visual con repercusión en la vida diaria", s:1, group: "check"},
            {t: "Prótesis auditiva o implante coclear", s:1, group: "check"}
        ]
    },
    {
        title: "7) Otros dispositivos, técnicas u ostomías (al menos seis meses)",
        type: "mixed",
        items: [
            {t: "Marcapasos y/o desfibrilador implantable", s:1, group: "check"},
            {t: "Válvula de derivación ventrículo-peritoneal y/o válvula de derivación lumbo-peritoneal", s:1, group: "check"},
            {t: "Estimulador del nervio vago, estimulador medular y/o estimulador cerebral profundo", s:1, group: "check"},
            {t: "Reservorio, catéter central (incluido catéter de hemodiálisis y PICC)", s:1, group: "check"},
            {t: "Catéter de diálisis peritoneal", s:1, group: "check"},
            {t: "Vesicostomía, ureterostomía, sondaje vesical permanente y/o intermitente", s:1, group: "check"},
            {t: "Colostomía/Ileostomía", s:1, group: "check"},
            {t: "Necesidad de irrigación rectal o irrigador transanal, necesidad de enema anterógrado tipo Malone", s:1, group: "check"},
            {t: "Necesidad de cura de piel o heridas profesionalizada periódica no relacionada con ostomía", s:1, group: "check"},
            {t: "Necesidad de hemodiálisis o diálisis peritoneal (al menos seis meses o en espera de trasplante)", s:3, group: "check"}
        ]
    },
    {
        title: "8) Necesidad de terapias específicas",
        type: "mixed",
        items: [
            {t: "Fisioterapia motora, estimulación psicomotriz y/o terapia ocupacional", s:1, group: "check"},
            {t: "Terapia con logopeda de deglución o lenguaje y/o terapia del lenguaje", s:1, group: "check"},
            {t: "Fisioterapia respiratoria y/o uso de cough assist", s:1, group: "check"},
            {t: "Terapia psicológica mantenida o necesidad de seguimiento periódico por Equipo de Salud Mental en el paciente", s:1, group: "check"}
        ]
    },
    {
        title: "9) Necesidades educativas específicas",
        type: "radio",
        items: [
            {t: "Adaptación curricular significativa", s:0.5},
            {t: "Centro ordinario en aula específica o centro de educación especial", s:1},
            {t: "Imposibilidad para acudir a centro escolar, asistir a al menos el 50% de horas lectivas o necesidad de educación a domicilio", s:2},
            {t: "Imposibilidad para acudir a guardería o necesidad de formación específica en los profesionales para acudir a la misma", s:2}
        ]
    },
    {
        title: "10) Esperanza de vida",
        type: "mixed",
        items: [
            {t: "Esperanza de vida menor a un año o paciente en el que pueda ser previsible el fallecimiento en los siguientes doce meses", s:4, group: "check"}
        ]
    }
];

const pedcomPhase2 = [
    {
        title: "11) Hospitalizaciones en los últimos 12 meses",
        type: "radio",
        items: [
            {t: "Dos hospitalizaciones no programadas y/o una hospitalización mayor a un mes", s:1},
            {t: "Tres o más hospitalizaciones no programadas, dos mayores a un mes y/o una hospitalización mayor a dos meses", s:2},
            {t: "Cinco o más hospitalizaciones no programadas, tres o más mayores a un mes y/o una hospitalización mayor a tres meses", s:3}
        ]
    },
    {
        title: "12) Aspectos sociales, afrontamiento de la enfermedad y relación con el equipo terapéutico",
        type: "mixed",
        items: [
            {t: "Necesidad de terapia o apoyo mantenido por Equipo de Salud Mental en cuidadores", s:1, group: "check"},
            {t: "Escasa red socio-sanitaria (domicilio a más de una hora del centro de referencia, situación económica desfavorable, escaso soporte social y/o escasa red familiar)", s:1, group: "check"},
            {t: "Barrera idiomática que dificulta el seguimiento y/o cumplimiento terapéutico", s:1, group: "check"},
            {t: "Familia disfuncional, cuidadores con necesidad de capacitación y/o situación de sobrecarga mantenida de cuidadores", s:2, group: "check"},
            {t: "Conflicto de comunicación con el equipo terapéutico, problemas de afrontamiento, diferencias culturales con repercusión sobre el seguimiento/tratamiento del paciente", s:2, group: "check"}
        ]
    }
];
