import mammoth from "mammoth";

export async function readDocx(file) {
  try {
    const arrayBuffer = await file.arrayBuffer();

    const result = await mammoth.extractRawText({
      arrayBuffer,
    });

    return {
      success: true,
      text: result.value,
      warnings: result.messages,
    };
  } catch (error) {
    return {
      success: false,
      text: "",
      warnings: [],
      error: error.message,
    };
  }
}