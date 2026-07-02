"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import { readDocx } from "../lib/readers/docxReader";
import { parseProgrammingDocument } from "../lib/parser/documentParser";
import { reviewProgrammingDocument } from "../lib/ai/reviewEngine";
import { detectNormativa } from "../lib/normativa/normativaEngine";

export default function Home() {
  const [fileName, setFileName] = useState("");
  const [modalidad, setModalidad] = useState("");
  const [codigo, setCodigo] = useState("");
  const [analizando, setAnalizando] = useState(false);
  const [resultado, setResultado] = useState(false);
  const [datosDetectados, setDatosDetectados] = useState(null);
  const [revisionReal, setRevisionReal] = useState(null);
  const [normativaDetectada, setNormativaDetectada] = useState(null);

  async function handleFileChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);

    if (!file.name.toLowerCase().endsWith(".docx")) {
      alert("De momento estamos probando lectura real solo con DOCX.");
      return;
    }

    const result = await readDocx(file);

    if (result.success) {
      const parsed = parseProgrammingDocument(result.text);
      setDatosDetectados(parsed);

      if (parsed?.datosGenerales?.codigoModulo) {
        setCodigo(parsed.datosGenerales.codigoModulo);
      }

      alert("Documento leído correctamente.");
    } else {
      alert("Error al leer el documento: " + result.error);
    }
  }

  function iniciarRevision() {
    setAnalizando(true);
    setResultado(false);

    setTimeout(() => {
      const revision = reviewProgrammingDocument(datosDetectados, modalidad);
      const normativa = detectNormativa(datosDetectados, modalidad);

      setRevisionReal(revision);
      setNormativaDetectada(normativa);
      setAnalizando(false);
      setResultado(true);
    }, 1000);
  }

  return (
    <main style={styles.app}>
      <Sidebar />

      <Dashboard
        fileName={fileName}
        codigo={codigo}
        setCodigo={setCodigo}
        modalidad={modalidad}
        setModalidad={setModalidad}
        analizando={analizando}
        resultado={resultado}
        datosDetectados={datosDetectados}
        normativaDetectada={normativaDetectada}
        revisionReal={revisionReal}
        onFileChange={handleFileChange}
        onStartReview={iniciarRevision}
      />
    </main>
  );
}

const styles = {
  app: {
    minHeight: "100vh",
    display: "flex",
    background: "#eef3f8",
    fontFamily: "Arial, sans-serif",
    color: "#1f2937",
  },
};