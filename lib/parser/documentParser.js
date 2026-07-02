export function parseProgrammingDocument(text) {
  const cleanText = normalizeText(text);

  return {
    datosGenerales: extractGeneralData(cleanText),
    resultadosAprendizaje: extractMatches(cleanText, /RA\d+[:.][\s\S]*?(?=CE\d+\.\d+|RA\d+[:.]|$)/g),
    criteriosEvaluacion: extractMatches(cleanText, /CE\d+\.\d+[\s\S]*?(?=CE\d+\.\d+|RA\d+[:.]|Actividad|Contenidos|$)/g),
    actividades: extractMatches(cleanText, /Actividad\s+\d+[\s\S]*?(?=Actividad\s+\d+|Recursos didácticos|ACREDITACIÓN|$)/g),
    contenidos: extractSection(cleanText, "Contenidos"),
    metodologia: extractSection(cleanText, "Estrategias metodológicas"),
    recursos: extractSection(cleanText, "Recursos didácticos"),
    espacios: extractSection(cleanText, "Espacios, instalaciones y equipamiento"),
  };
}

function normalizeText(text) {
  return text
    .replace(/\r/g, "")
    .replace(/\t/g, " ")
    .replace(/[ ]{2,}/g, " ")
    .trim();
}

function extractGeneralData(text) {
  return {
    certificado: findFirst(text, /CERTIFICADO PROFESIONAL:\s*(.+)/),
    duracion: findFirst(text, /DURACIÓN DEL CERTIFICADO:\s*(.+)/),
    centro: findFirst(text, /CENTRO DE FORMACIÓN:\s*(.+)/),
    codigoModulo: findFirst(text, /IDENTIFICACIÓN DEL CERTIFICADO DE COMPETENCIA:\s*([A-Z0-9_]+)/),
    horasModulo: findFirst(text, /HORAS:\s*(\d+)/),
  };
}

function extractMatches(text, regex) {
  return [...text.matchAll(regex)]
    .map((match) => match[0].trim())
    .filter(Boolean);
}

function extractSection(text, title) {
  const regex = new RegExp(`${title}[\\s\\S]*?(?=Recursos didácticos|Actividades de aprendizaje|Espacios, instalaciones|ACREDITACIÓN|RA\\d+|$)`, "i");
  const match = text.match(regex);
  return match ? match[0].trim() : "";
}

function findFirst(text, regex) {
  const match = text.match(regex);
  return match ? match[1].trim() : "";
}