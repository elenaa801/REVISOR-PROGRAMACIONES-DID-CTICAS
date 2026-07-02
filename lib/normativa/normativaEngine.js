export function detectNormativa(parsedData, modalidad) {
  const codigoModulo = parsedData?.datosGenerales?.codigoModulo || "";
  const certificado = parsedData?.datosGenerales?.certificado || "";

  return {
    codigoDetectado: codigoModulo,
    certificadoDetectado: certificado,
    modalidadAplicada: modalidad || "No seleccionada",
    normativaGeneral: [
      {
        nombre: "Ley Orgánica 3/2022",
        aplica: true,
        motivo: "Ordenación e integración del Sistema de Formación Profesional."
      },
      {
        nombre: "Real Decreto 659/2023",
        aplica: true,
        motivo: "Ordenación del Sistema de Formación Profesional."
      },
      {
        nombre: "Real Decreto 658/2024",
        aplica: true,
        motivo: "Modificación y actualización del marco de certificados profesionales."
      }
    ],
    normativaModalidad: getNormativaModalidad(modalidad),
    estado: codigoModulo
      ? "Certificado detectado. Pendiente de contraste con base normativa específica."
      : "No se ha detectado código de certificado o módulo."
  };
}

function getNormativaModalidad(modalidad) {
  if (modalidad === "Teleformación") {
    return [
      {
        nombre: "Normativa específica de teleformación",
        aplica: true,
        motivo: "Debe revisarse plataforma, tutorización, seguimiento, actividades online y evaluación."
      }
    ];
  }

  if (modalidad === "Presencial") {
    return [
      {
        nombre: "Normativa de impartición presencial",
        aplica: true,
        motivo: "Debe revisarse espacios, equipamiento, asistencia, sesiones y evaluación presencial."
      }
    ];
  }

  if (modalidad === "Mixta") {
    return [
      {
        nombre: "Normativa combinada presencial y teleformación",
        aplica: true,
        motivo: "Debe revisarse tanto la parte presencial como la parte online."
      }
    ];
  }

  return [
    {
      nombre: "Modalidad no seleccionada",
      aplica: false,
      motivo: "La aplicación necesita conocer la modalidad para aplicar la normativa correspondiente."
    }
  ];
}