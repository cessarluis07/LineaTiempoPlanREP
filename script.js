function codificarRuta(nombreArchivo) {
    if (nombreArchivo.startsWith('http')) return nombreArchivo;
    return encodeURI(nombreArchivo);
}

// Lista completa de eventos con los nombres de archivo exactos de tu carpeta
const eventos = [
    // ==========================================
    // FASE 1: ORIGEN Y VINCULACIÓN DE PREDIOS
    // ==========================================
    { 
        id: 1, actor: 'UT', fecha: '2026-02-26T09:51:00', fechaTexto: '26 Feb 2026 - 9:51 AM', 
        asunto: 'Comunicación de Decisión Técnica: Vinculación de Predios por Fuera del Polígono ANLA', 
        sintesis: 'Envío inicial del oficio relacionado con la decisión técnica, de acuerdo a la conversación del 25 de febrero.', 
        adjuntos: [{ nombre: 'Vinculación Predios ANLA.pdf', archivo: 'g_vinculacion_predios_anla.pdf' }] 
    },
    { 
        id: 2, actor: 'UT', fecha: '2026-03-02T14:18:00', fechaTexto: '02 Mar 2026 - 2:18 PM', 
        asunto: 'Enlace de Anexos para Soportar el OFIC-PRU-109', 
        sintesis: 'Remisión de enlace de Drive con los anexos necesarios para soportar el OFIC-PRU-109.', 
        adjuntos: [{ nombre: 'Anexos Oficio 109.pdf', archivo: 'g_vinculacion_predios_anla2.pdf' }] 
    },
    { 
        id: 3, actor: 'UT', fecha: '2026-03-06T16:32:00', fechaTexto: '06 Mar 2026 - 4:32 PM', 
        asunto: 'Comunicación de Decisión Técnica: Vinculación de Predios por Fuera del Polígono ANLA', 
        sintesis: 'Envío del Oficio N° 116 y ajuste N° 109 para iniciar formalmente el proceso.', 
        adjuntos: [{ nombre: 'Oficio 116.pdf', archivo: 'g_comunicacion_decision_tecnica_vinculacion_6_03_2026.pdf' }] 
    },
    { 
        id: 4, actor: 'UT', fecha: '2026-03-09T10:00:00', fechaTexto: '09 Mar 2026 - 10:00 AM', 
        asunto: 'Envío de Ajustes al Oficio de Vinculación', 
        sintesis: 'Se remiten los ajustes solicitados sobre la vinculación inicial de predios.', 
        adjuntos: [{ nombre: 'Ajustes Oficio.pdf', archivo: 'g_comunicacion_decision_tecnica_vinculacion_6_03_2026.pdf' }] 
    },
    { 
        id: 5, actor: 'UT', fecha: '2026-04-27T17:12:00', fechaTexto: '27 Abr 2026 - 5:12 PM', 
        asunto: 'Reiteración de Justificación Técnica – Vinculación de Predios Externos', 
        sintesis: 'Envío de base de datos de predios y cartografía por compromisos de reunión del 24 de abril.', 
        adjuntos: [{ nombre: 'Reiteración Técnica.pdf', archivo: 'g_reiteracion_justificacion_tecnica_27_04_2026.pdf' }] 
    },
    { 
        id: 6, actor: 'UT', fecha: '2026-05-19T23:26:00', fechaTexto: '19 May 2026 - 11:26 PM', 
        asunto: 'Soporte Técnico sobre la Vinculación de Familias (Polígono ANLA)', 
        sintesis: 'Envío del informe técnico detallado sobre la vinculación de predios.', 
        adjuntos: [{ nombre: 'Informe Técnico ANLA.pdf', archivo: 'g_soporte_tecnico_vinculacion_familias_19_05_2026.pdf' }] 
    },
    { 
        id: 7, actor: 'Arcadis', fecha: '2026-05-26T16:51:00', fechaTexto: '26 May 2026 - 4:51 PM', 
        asunto: 'Rta Interventoría: 9 Observaciones Críticas', 
        sintesis: 'Devolución por falta de análisis ecológico, actas no listadas, falta de cédulas/huellas, etc.', 
        adjuntos: [{ nombre: 'Observaciones.pdf', archivo: 'g_rta_interventoria_observaciones_26_05_2026.pdf' }] 
    },

    // ==========================================
    // FASE 2: HITOS DE JULIO (SIG - AAC - ANLA)
    // ==========================================
    { 
        id: 8, actor: 'Arcadis', fecha: '2026-07-06T09:45:00', fechaTexto: '06 Jul 2026 - 9:45 AM', 
        asunto: 'Solicitud de información SIG-AAC', 
        sintesis: 'La Interventoría solicita con urgencia los polígonos e información cartográfica actualizada de las AAC para presentar propuestas ante la ANLA.', 
        adjuntos: [{ nombre: 'Solicitud SIG-AAC.pdf', archivo: 'g_solicitud_sig_aac.pdf' }] 
    },
    { 
        id: 9, actor: 'UT', fecha: '2026-07-06T17:08:00', fechaTexto: '06 Jul 2026 - 5:08 PM', 
        asunto: 'Respuesta a Solicitud de Información SIG-AAC', 
        sintesis: 'La UT Plan REP remite la información solicitada (Áreas Solicitud ANLA) en tiempo récord (7 horas).', 
        adjuntos: [{ nombre: 'AREAS SOLICITUD ANLA.zip', archivo: 'g_solicitud_sig_aac2.pdf' }] 
    },
    { 
        id: 10, actor: 'UT', fecha: '2026-07-24T12:32:00', fechaTexto: '24 Jul 2026 - 12:32 PM', 
        asunto: 'Ajustes Área KM 40 - Oficio ANLA', 
        sintesis: 'Envío de enlace Drive con ajustes cartográficos para el oficio de la ANLA. Posteriormente se solicitó reunión urgente con URRÁ.', 
        adjuntos: [{ nombre: 'Ajustes KM 40.pdf', archivo: 'g_ajustes_area_km40.pdf' }] 
    },

    // ==========================================
    // FASE 3: CICLOS DE REVISIÓN TQ005 (AGOSTO - OCTUBRE)
    // ==========================================
    { 
        id: 11, actor: 'UT', fecha: '2026-08-18T12:43:00', fechaTexto: '18 Ago 2026 - 12:43 PM', 
        asunto: 'Análisis Estadístico (Radicación Inicial)', 
        sintesis: 'Envío del análisis estadístico inicial y cartografía ajustada.', 
        adjuntos: [{ nombre: 'Comparativo 2.zip', archivo: 'g_analisis_estadistico_18_08_2026.pdf' }] 
    },
    
    // --- Ciclo A ---
    { 
        id: 12, actor: 'Arcadis', fecha: '2026-08-19T10:00:00', fechaTexto: '19 Ago 2026 - 10:00 AM', 
        asunto: 'TQ005 - Revisión Versión A', 
        sintesis: 'Observación: Capa subida no concuerda con la última capa enviada. Faltan soportes de revalidación en campo.', 
        adjuntos: [] 
    },
    { 
        id: 13, actor: 'UT', fecha: '2026-08-20T10:00:00', fechaTexto: '20 Ago 2026 - 10:00 AM', 
        asunto: 'TQ005 - Respuesta Versión A', 
        sintesis: 'Se complementa información del análisis comparativo de capas AAC y AER. Se adjunta justificación.', 
        adjuntos: [] 
    },

    // --- Ciclo B ---
    { 
        id: 14, actor: 'Arcadis', fecha: '2026-08-21T10:00:00', fechaTexto: '21 Ago 2026 - 10:00 AM', 
        asunto: 'TQ005 - Revisión Versión B', 
        sintesis: 'Observación: Documento no sustenta modificación. Se solicitan actas y fotos de revalidación.', 
        adjuntos: [{ nombre: 'Rta TQ005 B.pdf', archivo: 'g_rta_interventoria_tq005_b_21_08_2026.pdf' }] 
    },
    { 
        id: 15, actor: 'UT', fecha: '2026-09-01T10:00:00', fechaTexto: '01 Sep 2026 - 10:00 AM', 
        asunto: 'TQ005 - Respuesta Versión B', 
        sintesis: 'Se envía carpeta con soportes (fotos, KMZ, actas) e informe técnico con la sustentación.', 
        adjuntos: [{ nombre: 'Similitud 2.zip', archivo: 'g_analisis_estadistico_evidencias_1_09_2026.pdf' }] 
    },

    // --- Ciclo C y Reunión de Pares ---
    { 
        id: 16, actor: 'Arcadis', fecha: '2026-09-08T10:00:00', fechaTexto: '08 Sep 2026 - 10:00 AM', 
        asunto: 'TQ005 - Revisión Versión C (Oficio 018 REP-2026)', 
        sintesis: 'Se anexa Oficio 018 vía correo electrónico con el detalle de observaciones y soportes requeridos.', 
        adjuntos: [{ nombre: 'Rta Oficio 018.pdf', archivo: 'g_rta_interventoria_oficio018_8_09_2026.pdf' }] 
    },
    { 
        id: 17, actor: 'Arcadis', fecha: '2026-09-15T10:00:00', fechaTexto: '15 Sep 2026 - 10:00 AM', 
        asunto: 'Reunión de Pares (Acta de Compromiso)', 
        sintesis: 'Se establece el compromiso de envío de soportes cartográficos en bruto por parte de la UT.', 
        adjuntos: [] 
    },
    { 
        id: 18, actor: 'UT', fecha: '2026-09-22T10:00:00', fechaTexto: '22 Sep 2026 - 10:00 AM', 
        asunto: 'TQ005 - Respuesta Versión C', 
        sintesis: 'Se da respuesta vía correo electrónico y se subsanan las observaciones requeridas en el Oficio 018.', 
        adjuntos: [] 
    },

    // --- Ciclo D ---
    { 
        id: 19, actor: 'Arcadis', fecha: '2026-09-29T10:00:00', fechaTexto: '29 Sep 2026 - 10:00 AM', 
        asunto: 'TQ005 - Revisión Versión D', 
        sintesis: 'Observación: Se requiere envío de insumos de restauradores en bruto. Fortalecer justificación técnica y metodológica.', 
        adjuntos: [] 
    },
    { 
        id: 20, actor: 'UT', fecha: '2026-10-07T16:54:00', fechaTexto: '07 Oct 2026 - 4:54 PM', 
        asunto: 'TQ005 - Respuesta Versión D', 
        sintesis: 'Se remite ajuste en enlace de Drive con los requerimientos solicitados.', 
        adjuntos: [{ nombre: 'ANALISIS DE SIMILITUD.pdf', archivo: 'g_analisis_similitud_tq005_7_10_2026.pdf' }] 
    },

    // --- Ciclo E ---
    { 
        id: 21, actor: 'Arcadis', fecha: '2026-10-09T10:00:00', fechaTexto: '09 Oct 2026 - 10:00 AM', 
        asunto: 'TQ005 - Revisión Versión E', 
        sintesis: 'Observación: Documento no presenta estructura adecuada. Ordenar marco normativo y referenciar figuras.', 
        adjuntos: [] 
    },
    { 
        id: 22, actor: 'UT', fecha: '2026-10-13T10:00:00', fechaTexto: '13 Oct 2026 - 10:00 AM', 
        asunto: 'TQ005 - Respuesta Versión E', 
        sintesis: 'Se realiza ajuste al documento basado en los criterios y estructura requeridos.', 
        adjuntos: [] 
    }
];

function calcularTiempoExacto(ms) {
    if (ms === 0) return 'Inicio';
    const dias = Math.floor(ms / (1000 * 60 * 60 * 24));
    const horas = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    let texto = [];
    if (dias > 0) texto.push(`${dias}d`);
    if (horas > 0) texto.push(`${horas}h`);
    if (minutos > 0) texto.push(`${minutos}m`);
    return texto.join(' ') || '0m';
}

for (let i = 0; i < eventos.length; i++) {
    if (i === 0) {
        eventos[i].msTranscurridos = 0;
        eventos[i].tiempoExacto = 'Inicio';
    } else {
        const fechaAnterior = new Date(eventos[i-1].fecha);
        const fechaActual = new Date(eventos[i].fecha);
        const diferenciaMs = fechaActual - fechaAnterior;
        eventos[i].msTranscurridos = diferenciaMs;
        eventos[i].tiempoExacto = calcularTiempoExacto(diferenciaMs);
    }
}

// --- Estadísticas ---
const fechaInicio = new Date(eventos[0].fecha);
const fechaFin = new Date(eventos[eventos.length - 1].fecha);
const totalDiasReales = Math.floor((fechaFin - fechaInicio) / (1000 * 60 * 60 * 24));

// Contar cuántos correos envió cada actor
const totalUT = eventos.filter(e => e.actor === 'UT').length;
const totalArcadis = eventos.filter(e => e.actor === 'Arcadis').length;

// Actualizar los KPI en el HTML
document.getElementById('totalDias').textContent = `${totalDiasReales} Días`;
document.getElementById('totalCorreos').textContent = eventos.length;
document.getElementById('totalUT').textContent = totalUT;
document.getElementById('totalArcadis').textContent = totalArcadis;
// --- Renderizar Línea de Tiempo ---
const timelineContainer = document.getElementById('timeline');

eventos.forEach((ev, index) => {
    const container = document.createElement('div');
    container.classList.add('container');
    container.classList.add(ev.actor === 'UT' ? 'ut' : 'arcadis');

    let adjuntosHtml = '';
    if (ev.adjuntos && ev.adjuntos.length > 0) {
        adjuntosHtml = ev.adjuntos.map(adj => 
            `<div style="margin-bottom: 8px;">
                <a href="${codificarRuta(adj.archivo)}" target="_blank" class="btn-adjunto" style="width: 100%; text-align: center;" title="${adj.nombre}">📄 ${adj.nombre}</a>
             </div>`
        ).join('');
    }

    let tiempoHtml = '';
    if (index > 0) {
        const esGrande = ev.msTranscurridos >= (30 * 24 * 60 * 60 * 1000);
        tiempoHtml = `<span class="tiempo ${esGrande ? 'grande' : ''}">+${ev.tiempoExacto}</span>`;
    } else {
        tiempoHtml = `<span class="tiempo" style="background:#95a5a6;">Inicio</span>`;
    }

    const actorClass = ev.actor === 'UT' ? 'actor-ut' : 'actor-arcadis';
    const actorNombre = ev.actor === 'UT' ? 'UT Plan REP' : 'Arcadis 4D';

    container.innerHTML = `
        <div class="content">
            <h3>${ev.asunto}</h3>
            <div>
                <span class="actor-tag ${actorClass}">${actorNombre}</span>
            </div>
            <div class="meta">
                <span>📅 ${ev.fechaTexto}</span>
                ${tiempoHtml}
            </div>
            <p>${ev.sintesis}</p>
            <div class="adjuntos">
                <strong>📎 Adjuntos:</strong>
                ${adjuntosHtml}
            </div>
        </div>
    `;
    timelineContainer.appendChild(container);
});

// --- Renderizar Tabla ---
const tablaBody = document.querySelector('#tablaCorreos tbody');
eventos.forEach((ev, index) => {
    const tr = document.createElement('tr');
    let claseTiempo = (ev.msTranscurridos >= (30 * 24 * 60 * 60 * 1000)) ? 'td-tiempo grande' : 'td-tiempo';
    if (index === 0) claseTiempo = ''; 

    tr.innerHTML = `
        <td>${ev.id}</td>
        <td>${ev.fechaTexto}</td>
        <td><span class="actor-tag ${ev.actor === 'UT' ? 'actor-ut' : 'actor-arcadis'}" style="margin:0;">${ev.actor === 'UT' ? 'UT Plan REP' : 'Arcadis 4D'}</span></td>
        <td>${ev.asunto}</td>
        <td class="${claseTiempo}">${ev.tiempoExacto}</td>
    `;
    tablaBody.appendChild(tr);
});

// --- Renderizar Gráfica de Intervalos (Tipo Gantt) ---
const ctx = document.getElementById('graficaTiempos').getContext('2d');

const etiquetasEjeX = ['Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct'];
const labelsY = [];
const datosBarras = [];

function fechaAIndice(fechaStr) {
    const fecha = new Date(fechaStr);
    const inicioAnio = new Date(fecha.getFullYear(), 0, 1);
    const dias = Math.floor((fecha - inicioAnio) / (1000 * 60 * 60 * 24));
    return (dias / 365) * 12; 
}

for (let i = 1; i < eventos.length; i++) {
    const evAnterior = eventos[i-1];
    const evActual = eventos[i];
    
    const asuntoCorto = evActual.asunto.length > 40 ? evActual.asunto.substring(0, 40) + '...' : evActual.asunto;
    labelsY.push(asuntoCorto);

    const xInicio = fechaAIndice(evAnterior.fecha);
    const xFin = fechaAIndice(evActual.fecha);
    const dias = evActual.msTranscurridos / (1000 * 60 * 60 * 24);

    datosBarras.push({
        x: [xInicio, xFin], 
        y: asuntoCorto,
        dias: dias,
        tiempoExacto: evActual.tiempoExacto,
        actor: evActual.actor
    });
}

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labelsY,
        datasets: [{
            label: 'Intervalo de espera',
            data: datosBarras,
            backgroundColor: datosBarras.map(d => d.actor === 'UT' ? 'rgba(44, 62, 80, 0.8)' : 'rgba(231, 76, 60, 0.8)'),
            borderColor: datosBarras.map(d => d.actor === 'UT' ? '#2c3e50' : '#e74c3c'),
            borderWidth: 1,
            borderSkipped: false,
            barPercentage: 0.7
        }]
    },
    options: {
        indexAxis: 'y', 
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const data = context.raw;
                        return [
                            `Actor: ${data.actor === 'UT' ? 'UT Plan REP' : 'Arcadis 4D'}`,
                            `Espera: ${data.tiempoExacto}`
                        ];
                    }
                }
            }
        },
        scales: {
            x: {
                min: 2,  
                max: 9.5, 
                ticks: {
                    callback: function(value, index) {
                        if (value >= 2 && value <= 9) {
                            return etiquetasEjeX[Math.round(value) - 2];
                        }
                    },
                    stepSize: 1
                },
                title: { display: true, text: 'Meses (2026)' },
                grid: { color: '#ecf0f1' }
            },
            y: {
                ticks: { font: { size: 10 } },
                title: { display: true, text: 'Asunto del correo' },
                grid: { display: false }
            }
        }
    }
});

// --- Renderizar Gráfica de Correos por Mes (UT vs Arcadis) ---
const ctxMensual = document.getElementById('graficaMensual').getContext('2d');

// 1. Crear un objeto para almacenar los conteos separados
const conteoPorMes = {
    UT: {},
    Arcadis: {}
};

eventos.forEach(ev => {
    const fecha = new Date(ev.fecha);
    const mesAnio = fecha.toLocaleString('es-ES', { month: 'short', year: 'numeric' });
    const mesCapitalizado = mesAnio.charAt(0).toUpperCase() + mesAnio.slice(1);
    
    // Inicializar el mes en ambos actores si no existe
    if (!conteoPorMes.UT[mesCapitalizado]) conteoPorMes.UT[mesCapitalizado] = 0;
    if (!conteoPorMes.Arcadis[mesCapitalizado]) conteoPorMes.Arcadis[mesCapitalizado] = 0;

    // Sumar al actor correspondiente
    if (ev.actor === 'UT') {
        conteoPorMes.UT[mesCapitalizado]++;
    } else if (ev.actor === 'Arcadis') {
        conteoPorMes.Arcadis[mesCapitalizado]++;
    }
});

// 2. Obtener todos los meses únicos y ordenarlos cronológicamente
const todosLosMeses = new Set([...Object.keys(conteoPorMes.UT), ...Object.keys(conteoPorMes.Arcadis)]);
const labelsMeses = Array.from(todosLosMeses).sort((a, b) => new Date('01 ' + a) - new Date('01 ' + b));

// 3. Crear los arreglos de datos para cada actor
const datosUT = labelsMeses.map(mes => conteoPorMes.UT[mes] || 0);
const datosArcadis = labelsMeses.map(mes => conteoPorMes.Arcadis[mes] || 0);

// 4. Renderizar la gráfica
new Chart(ctxMensual, {
    type: 'bar',
    data: {
        labels: labelsMeses,
        datasets: [
            {
                label: 'UT Plan REP',
                data: datosUT,
                backgroundColor: 'rgba(44, 62, 80, 0.8)', // Azul oscuro
                borderColor: '#2c3e50',
                borderWidth: 1,
                borderRadius: 4
            },
            {
                label: 'Arcadis 4D',
                data: datosArcadis,
                backgroundColor: 'rgba(231, 76, 60, 0.8)', // Rojo
                borderColor: '#e74c3c',
                borderWidth: 1,
                borderRadius: 4
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { 
                display: true,
                position: 'top'
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return `${context.dataset.label}: ${context.raw} correos`;
                    }
                }
            }
        },
        scales: {
            x: {
                title: { display: true, text: 'Mes (2026)' },
                grid: { display: false }
            },
            y: {
                beginAtZero: true,
                title: { display: true, text: 'Cantidad de Correos' },
                ticks: { stepSize: 1 }, // Fuerza números enteros
                grid: { color: '#ecf0f1' }
            }
        }
    }
});

// --- Lógica del Botón Modo Presentación ---
const btnModoPresentacion = document.getElementById('btnModoPresentacion');
const btnSalirPresentacion = document.getElementById('btnSalirPresentacion');

btnModoPresentacion.addEventListener('click', () => {
    document.body.classList.add('modo-presentacion');
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    }
});

btnSalirPresentacion.addEventListener('click', () => {
    document.body.classList.remove('modo-presentacion');
    if (document.exitFullscreen) {
        document.exitFullscreen();
    }
});

document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        document.body.classList.remove('modo-presentacion');
    }
});