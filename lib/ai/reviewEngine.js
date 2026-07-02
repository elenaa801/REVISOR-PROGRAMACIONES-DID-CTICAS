export function reviewProgrammingDocument(parsedData, modalidad) {
  const issues = [];

  const raCount = parsedData?.resultadosAprendizaje?.length || 0;
  const ceCount = parsedData?.criteriosEvaluacion?.length || 0;
  const activityCount = parsedData?.actividades?.length || 0;
  const horasModulo = Number(parsedData?.datosGenerales?.horasModulo || 0);

  if (!modalidad) {
    issues.push(createIssue(
      "Alta",
      "Modalidad",
      "No se ha seleccionado modalidad.",
      "La modalidad condiciona metodología, seguimiento, evaluación y recursos.",
      "Seleccionar presencial, teleformación o mixta antes de revisar."
    ));
  }

  if (raCount === 0) {
    issues.push(createIssue(
      "Crítica",
      "Resultados de Aprendizaje",
      "No se han detectado RA.",
      "Una programación debe vincularse a los resultados de aprendizaje correspondientes.",
      "Revisar que los RA estén incluidos y redactados de forma identificable."
    ));
  }

  if (ceCount === 0) {
    issues.push(createIssue(
      "Crítica",
      "Criterios de Evaluación",
      "No se han detectado CE.",
      "Los CE permiten comprobar si el alumnado alcanza los resultados de aprendizaje.",
      "Incluir todos los criterios de evaluación asociados a cada RA."
    ));
  }

  if (activityCount < raCount) {
    issues.push(createIssue(
      "Alta",
      "Actividades",
      "Hay menos actividades que resultados de aprendizaje.",
      "Cada RA debería tener actividades suficientes para evidenciar su adquisición.",
      "Añadir actividades vinculadas claramente a cada RA y CE."
    ));
  }

  if (!horasModulo || horasModulo <= 0) {
    issues.push(createIssue(
      "Media",
      "Horas",
      "No se han detectado horas del módulo.",
      "La temporalización debe comprobarse frente a la duración oficial.",
      "Indicar las horas del módulo y distribuirlas por unidades o bloques."
    ));
  }

  if (modalidad === "Teleformación") {
    issues.push(createIssue(
      "Media",
      "Teleformación",
      "Debe comprobarse la adaptación específica a teleformación.",
      "La teleformación requiere seguimiento, tutorización, recursos digitales y evaluación adaptada.",
      "Añadir referencias a plataforma, tutorías, seguimiento online, actividades digitales y evidencias evaluables."
    ));
  }

  const score = calculateScore(issues);

  return {
    score,
    totalIssues: issues.length,
    criticalIssues: issues.filter((i) => i.priority === "Crítica").length,
    highIssues: issues.filter((i) => i.priority === "Alta").length,
    mediumIssues: issues.filter((i) => i.priority === "Media").length,
    lowIssues: issues.filter((i) => i.priority === "Baja").length,
    issues,
  };
}

function createIssue(priority, section, problem, reason, proposal) {
  return {
    priority,
    section,
    problem,
    reason,
    proposal,
  };
}

function calculateScore(issues) {
  let score = 100;

  issues.forEach((issue) => {
    if (issue.priority === "Crítica") score -= 20;
    if (issue.priority === "Alta") score -= 12;
    if (issue.priority === "Media") score -= 7;
    if (issue.priority === "Baja") score -= 3;
  });

  return Math.max(score, 0);
}