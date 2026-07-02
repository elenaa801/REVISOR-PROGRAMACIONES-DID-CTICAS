import { readDocx } from "./docxReader";
import { readPdf } from "./pdfReader";

export async function readDocument(file) {
  if (!file) {
    return {
      success: false,
      text: "",
      error: "No se ha seleccionado ningún archivo.",
    };
  }

  const fileName = file.name.toLowerCase();

  if (fileName.endsWith(".docx")) {
    return await readDocx(file);
  }

  if (fileName.endsWith(".pdf")) {
    return await readPdf(file);
  }

  return {
    success: false,
    text: "",
    error: "Formato no admitido. Solo se permiten archivos DOCX o PDF.",
  };
}