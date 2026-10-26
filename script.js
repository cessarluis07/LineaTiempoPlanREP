// Función auxiliar para codificar los nombres de archivo (reemplaza espacios por %20 y tildes)
function codificarRuta(nombreArchivo) {
    if (nombreArchivo.startsWith('http')) return nombreArchivo;
    // encodeURI maneja espacios y caracteres especiales para que el navegador los encuentre
    return encodeURI(nombreArchivo);
}

const eventos = [
    {
        id: 1,
        actor: 'UT',
        fecha: '2026-03-06T16:32:00',
        fechaTexto: '06 Mar 2026 - 4:32 PM',
        asunto: 'Comunicación de Decisión Técnica: Vinculación de Predios por fuera del Polígono ANLA',
        sintesis: 'Envío del Oficio N° 116 y ajuste N° 109 para iniciar el proceso de vinculación.',
        adjuntos: [
            { nombre: 'OFIC-PRU-116 VINCULACION D EPREDIOS POLIGONO PLAN REP.pdf', archivo: 'Gmail - COMUNICACIÓN DE DECISIÓN TÉCNICA VINCULACIÓN DE PREDIOS POR FUERA DEL POLÍGONO ANLA Y ACTUALIZACIÓN DE BENEFICIARIOS – OBLIGACIÓN EMPRESA URRÁ_6_03_2026.pdf' }
        ]
    },
    {
        id: 2,
        actor: 'UT',
        fecha: '2026-04-27T17:12:00',
        fechaTexto: '27 Abr 2026 - 5:12 PM',
        asunto: 'Reiteración de justificación técnica – Vinculación de predios externos al polígono ANLA',
        sintesis: 'Envío de base de datos de predios y cartografía (shapefile y mapas) por compromisos de reunión del 24 de abril.',
        adjuntos: [
            { nombre: 'Gmail - Reiteración de justificación técnica – Vinculación de predios externos al polígono ANLA_27_04_2026.pdf', archivo: 'Gmail - Reiteración de justificación técnica – Vinculación de predios externos al polígono ANLA_27_04_2026.pdf' }
        ]
    },
    {
        id: 3,
        actor: 'UT',
        fecha: '2026-05-19T23:26:00',
        fechaTexto: '19 May 2026 - 11:26 PM',
        asunto: 'Soporte técnico sobre la vinculación de familias (polígono ANLA)',
        sintesis: 'Envío del informe técnico detallado sobre la vinculación de predios por fuera del polígono ANLA.',
        adjuntos: [
            { nombre: 'Gmail -Soporte tecnico sobre la vinculacion de familias (poligono ANLA)_19_05_2026.pdf', archivo: 'Gmail -Soporte tecnico sobre la vinculacion de familias (poligono ANLA)_19_05_2026.pdf' }
        ]
    },
    {
        id: 4,
        actor: 'Arcadis',
        fecha: '2026-05-26T16:51:00',
        fechaTexto: '26 May 2026 - 4:51 PM',
        asunto: 'Rta interventoría_Soporte técnico sobre la vinculación de familias (polígono ANLA)',
        sintesis: 'Devolución con 9 Observaciones Críticas: falta análisis ecológico, información de propietarios incompleta, actas no listadas, falta de cédulas/huellas, formatos inconsistentes, etc.',
        adjuntos: [
            { nombre: 'Gmail - Rra interventoria_Soporte tecnico sobre la vinculacion de familias (poligono ANLA)_26_05_2026.pdf', archivo: 'Gmail - Rra interventoria_Soporte tecnico sobre la vinculacion de familias (poligono ANLA)_26_05_2026.pdf' }
        ]
    },
    {
        id: 5,
        actor: 'UT',
        fecha: '2026-08-18T12:43:00',
        fechaTexto: '18 Ago 2026 - 12:43 PM',
        asunto: 'Análisis estadístico',
        sintesis: 'Envío del análisis estadístico requerido en reunión y confirmación del cargue de la información cartográfica ajustada.',
        adjuntos: [
            { nombre: 'Gmail - Analisis estadístico_18_08_2026.pdf', archivo: 'Gmail - Analisis estadístico_18_08_2026.pdf' }
        ]
    },
    {
        id: 6,
        actor: 'Arcadis',
        fecha: '2026-08-19T17:58:00',
        fechaTexto: '19 Ago 2026 - 5:58 PM',
        asunto: 'Rta_interventoria_Analisis estadístico',
        sintesis: 'Envío del TQ005 (matriz de seguimiento) y cancelación de la reunión de pares prevista para el 20 de julio.',
        adjuntos: [
            { nombre: 'Gmail - Rta_interventoria_Analisis estadístico_ 19_09_2026.pdf', archivo: 'Gmail - Rta_interventoria_Analisis estadístico_ 19_09_2026.pdf' }
        ]
    },
    {
        id: 7,
        actor: 'UT',
        fecha: '2026-08-21T10:41:00',
        fechaTexto: '21 Ago 2026 - 10:41 AM',
        asunto: 'Análisis estadístico',
        sintesis: 'Envío de la información requerida para aprobación y remisión a la empresa URRA S.A.',
        adjuntos: [
            { nombre: 'Gmail - Analisis estadístico_21_08_2026.pdf', archivo: 'Gmail - Analisis estadístico_21_08_2026.pdf' }
        ]
    },
    {
        id: 8,
        actor: 'Arcadis',
        fecha: '2026-08-21T16:23:00',
        fechaTexto: '21 Ago 2026 - 4:23 PM',
        asunto: 'Rta_interventoria_Analisis estadístico',
        sintesis: 'Actualización del TQ005 (Versión B) y reiteración de disposición para realizar mesa de subsanación conjunta.',
        adjuntos: [
            { nombre: 'Gmail - Rta_interventoria_Analisis estadístico_21_8_2026.pdf', archivo: 'Gmail - Rta_interventoria_Analisis estadístico_21_8_2026.pdf' }
        ]
    },
    {
        id: 9,
        actor: 'UT',
        fecha: '2026-09-01T18:41:00',
        fechaTexto: '01 Sep 2026 - 6:41 PM',
        asunto: 'Análisis estadístico',
        sintesis: 'Envío de análisis estadístico con soportes y evidencias fotográficas de la verificación de algunas AAC.',
        adjuntos: [
            { nombre: 'Gmail - Analisis estadístico_1_09_2026.pdf', archivo: 'Gmail - Analisis estadístico_1_09_2026.pdf' }
        ]
    },
    {
        id: 10,
        actor: 'Arcadis',
        fecha: '2026-09-08T17:17:00',
        fechaTexto: '08 Sep 2026 - 5:17 PM',
        asunto: 'Rta_ interventoría_Analisis estadístico',
        sintesis: 'Envío del Oficio 018 REP-2026, referenciado en el TQ005, con anotaciones detalladas y soportes.',
        adjuntos: [
            { nombre: 'Gmail - Rta_ interventoria_Analisis estadístico_8_09_2026.pdf', archivo: 'Gmail - Rta_ interventoria_Analisis estadístico_8_09_2026.pdf' }
        ]
    },
    {
        id: 11,
        actor: 'UT',
        fecha: '2026-09-09T09:28:00',
        fechaTexto: '09 Sep 2026 - 9:28 AM',
        asunto: 'Análisis estadístico',
        sintesis: 'Envío de oficio solicitando mesa técnica para resolver las observaciones del Oficio 018-REP 2026.',
        adjuntos: [
            { nombre: 'Gmail - Analisis estadístico_9_09_2026.pdf', archivo: 'Gmail - Analisis estadístico_9_09_2026.pdf' }
        ]
    },
    {
        id: 12,
        actor: 'UT',
        fecha: '2026-10-07T16:54:00',
        fechaTexto: '07 Oct 2026 - 4:54 PM',
        asunto: 'ANALISIS DE SIMILITUD (TQ005)',
        sintesis: 'Envío de enlace de Drive que integra toda la información relacionada con el asunto (análisis de similitud y TQ005).',
        adjuntos: [
            { nombre: 'Gmail - ANALISIS DE SIMILITUD (TQ005)_7_10_2026.pdf', archivo: 'Gmail - ANALISIS DE SIMILITUD (TQ005)_7_10_2026.pdf' }
        ]
    }
];

// --- Lógica para calcular tiempos y renderizar ---
const timelineContainer = document.getElementById('timeline');

// Calcular tiempos transcurridos
for (let i = 0; i < eventos.length; i++) {
    if (i === 0) {
        eventos[i].diasTranscurridos = 0;
    } else {
        const fechaAnterior = new Date(eventos[i-1].fecha);
        const fechaActual = new Date(eventos[i].fecha);
        const diferenciaMs = fechaActual - fechaAnterior;
        const dias = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));
        eventos[i].diasTranscurridos = dias;
    }
}

// Actualizar estadísticas
const fechaInicio = new Date(eventos[0].fecha);
const fechaFin = new Date(eventos[eventos.length - 1].fecha);
const totalDiasReales = Math.floor((fechaFin - fechaInicio) / (1000 * 60 * 60 * 24));

document.getElementById('totalDias').textContent = totalDiasReales;
document.getElementById('totalCorreos').textContent = eventos.length;
const maxEspera = Math.max(...eventos.map(e => e.diasTranscurridos));
document.getElementById('maxEspera').textContent = maxEspera;

// Renderizar
eventos.forEach((ev, index) => {
    const container = document.createElement('div');
    container.classList.add('container');
    
    if (index % 2 === 0) {
        container.classList.add('left');
    } else {
        container.classList.add('right');
    }

    if (ev.actor === 'Arcadis') {
        container.classList.add('arcadis');
    }

    // Lógica de Adjuntos con enlaces reales
    let adjuntosHtml = '';
    if (ev.adjuntos && ev.adjuntos.length > 0) {
        const listaAdjuntos = ev.adjuntos.map(adj => {
            const urlCodificada = codificarRuta(adj.archivo);
            const icono = adj.nombre.endsWith('.pdf') ? '📄' : '🔗';
            return `<a href="${urlCodificada}" target="_blank" class="btn-adjunto" title="Abrir ${adj.nombre}">${icono} Ver Correo (PDF)</a>`;
        }).join(' ');
        
        adjuntosHtml = `<div class="adjuntos"><strong>📎 Soporte:</strong> <div class="lista-adjuntos">${listaAdjuntos}</div></div>`;
    } else {
        adjuntosHtml = `<div class="adjuntos"><strong>📎 Soporte:</strong> Sin adjuntos</div>`;
    }

    let tiempoHtml = '';
    if (index > 0) {
        const claseTiempo = ev.diasTranscurridos >= 30 ? 'tiempo grande' : 'tiempo';
        tiempoHtml = `<span class="${claseTiempo}">⏱️ +${ev.diasTranscurridos} días</span>`;
    } else {
        tiempoHtml = `<span class="tiempo" style="background:#95a5a6;">Inicio</span>`;
    }

    const actorClass = ev.actor === 'UT' ? 'actor-ut' : 'actor-arcadis';
    const actorNombre = ev.actor === 'UT' ? 'UT Plan REP' : 'Arcadis 4D';

    const content = `
        <div class="content">
            <span class="actor-tag ${actorClass}">${actorNombre}</span>
            <h3>${ev.asunto}</h3>
            <div class="meta">📅 ${ev.fechaTexto}</div>
            <p>${ev.sintesis}</p>
            ${adjuntosHtml}
            <div style="margin-top:10px;">${tiempoHtml}</div>
        </div>
    `;

    container.innerHTML = content;
    timelineContainer.appendChild(container);
});