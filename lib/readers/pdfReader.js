import pdf from "pdf-parse";

export async function readPdf(file) {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const result = await pdf(buffer);

    return {
      success: true,
      text: result.text,
      pages: result.numpages,
      info: result.info,
    };
  } catch (error) {
    return {
      success: false,
      text: "",
      pages: 0,
      info: null,
      error: error.message,
    };
  }
}