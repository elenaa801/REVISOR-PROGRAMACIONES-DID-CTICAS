"use client";

import { useState } from "react";
import { readDocx } from "../lib/readers/docxReader";
import { parseProgrammingDocument } from "../lib/parser/documentParser";

export default function Home() {
  const [fileName, setFileName] = useState("");
  const [modalidad, setModalidad] = useState("");
  const [codigo, setCodigo] = useState("");
  const [analizando, setAnalizando] = useState(false);
  const [resultado, setResultado] = useState(false);
  const [datosDetectados, setDatosDetectados] = useState(null);

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
      console.log("TEXTO EXTRAÍDO:", result.text);
      console.log("DATOS DETECTADOS:", parsed);
      alert("Documento leído correctamente. Revisa la consola del navegador.");
    } else {
      alert("Error al leer el documento: " + result.error);
    }
  }

  function iniciarRevision() {
    setAnalizando(true);
    setResultado(false);

    setTimeout(() => {
      setAnalizando(false);
      setResultado(true);
    }, 1800);
  }

  return (
    <main style={styles.app}>
      <aside style={styles.sidebar}>
        <h1 style={styles.logo}>ATU Review AI</h1>
        <p style={styles.logoText}>Copiloto de programaciones didácticas</p>

        <nav style={styles.nav}>
          <NavItem icon="🏠" text="Dashboard" active />
          <NavItem icon="📄" text="Nueva revisión" />
          <NavItem icon="🔁" text="Comparar" />
          <NavItem icon="✍️" text="Crear programación" />
          <NavItem icon="📚" text="Certificados" />
          <NavItem icon="⚖️" text="Normativa" />
          <NavItem icon="📊" text="Informes" />
          <NavItem icon="⚙️" text="Configuración" />
        </nav>
      </aside>

      <section style={styles.content}>
        <header style={styles.topbar}>
          <div>
            <h2 style={styles.pageTitle}>Dashboard principal</h2>
            <p style={styles.pageSubtitle}>
              Revisión normativa, pedagógica y metodológica de certificados profesionales.
            </p>
          </div>
          <span style={styles.version}>Versión 3.0</span>
        </header>

        <section style={styles.statsGrid}>
          <StatCard title="Programaciones revisadas" value={resultado ? "1" : "0"} />
          <StatCard title="Errores detectados" value={resultado ? "5" : "0"} />
          <StatCard title="Cumplimiento estimado" value={resultado ? "78%" : "0%"} />
          <StatCard title="Estado" value={resultado ? "Revisar" : "Pendiente"} />
        </section>

        <section style={styles.mainGrid}>
          <div style={styles.panel}>
            <h3 style={styles.panelTitle}>Nueva revisión</h3>
            <p style={styles.text}>
              Sube una programación didáctica y selecciona la modalidad normativa que debe aplicarse.
            </p>

            <div style={styles.uploadBox}>
              <div style={styles.uploadIcon}>📄</div>
              <strong>Sube tu documento</strong>
              <p style={styles.smallText}>DOCX o PDF</p>
              <input type="file" accept=".docx,.pdf" onChange={handleFileChange} />
              {fileName && <p style={styles.fileName}>Archivo seleccionado: {fileName}</p>}
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Código del certificado profesional</label>
              <input
                style={styles.input}
                placeholder="Ejemplo: SSCE0110"
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Modalidad</label>
              <div style={styles.optionGrid}>
                {["Presencial", "Teleformación", "Mixta"].map((item) => (
                  <label key={item} style={styles.option}>
                    <input
                      type="radio"
                      name="modalidad"
                      value={item}
                      checked={modalidad === item}
                      onChange={(e) => setModalidad(e.target.value)}
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            <button style={styles.primaryButton} onClick={iniciarRevision}>
              {analizando ? "Analizando..." : "Iniciar revisión"}
            </button>
          </div>

          <div style={styles.panel}>
            <h3 style={styles.panelTitle}>Motor de revisión</h3>
            <p style={styles.text}>
              La revisión comprobará los elementos clave de la programación.
            </p>

            <ReviewItem title="Normativa aplicable según modalidad" />
            <ReviewItem title="Resultados de Aprendizaje RA" />
            <ReviewItem title="Criterios de Evaluación CE" />
            <ReviewItem title="Estrategias metodológicas" />
            <ReviewItem title="Temporalización" />
            <ReviewItem title="Instrumentos de evaluación" />
            <ReviewItem title="Coherencia RA - CE - Actividades - Evaluación" />
          </div>
        </section>

        {datosDetectados && (
          <section style={styles.panel}>
            <h3 style={styles.panelTitle}>Datos detectados del documento</h3>
            <div style={styles.summaryBox}>
              <p><strong>Certificado:</strong> {datosDetectados.datosGenerales.certificado || "No detectado"}</p>
              <p><strong>Duración:</strong> {datosDetectados.datosGenerales.duracion || "No detectada"}</p>
              <p><strong>Centro:</strong> {datosDetectados.datosGenerales.centro || "No detectado"}</p>
              <p><strong>Código módulo:</strong> {datosDetectados.datosGenerales.codigoModulo || "No detectado"}</p>
              <p><strong>Horas módulo:</strong> {datosDetectados.datosGenerales.horasModulo || "No detectadas"}</p>
              <p><strong>RA detectados:</strong> {datosDetectados.resultadosAprendizaje.length}</p>
              <p><strong>CE detectados:</strong> {datosDetectados.criteriosEvaluacion.length}</p>
              <p><strong>Actividades detectadas:</strong> {datosDetectados.actividades.length}</p>
            </div>
          </section>
        )}

        {analizando && (
          <section style={styles.panel}>
            <h3 style={styles.panelTitle}>Analizando programación...</h3>
            <p style={styles.text}>Leyendo documento, comprobando modalidad y preparando informe.</p>
            <div style={styles.progressBar}>
              <div style={styles.progressFill}></div>
            </div>
          </section>
        )}

        {resultado && (
          <section style={styles.panel}>
            <h3 style={styles.panelTitle}>Resultado de revisión simulada</h3>

            <div style={styles.summaryBox}>
              <p><strong>Documento:</strong> {fileName || "No indicado"}</p>
              <p><strong>Certificado:</strong> {codigo || "No indicado"}</p>
              <p><strong>Modalidad aplicada:</strong> {modalidad || "No seleccionada"}</p>
              <p><strong>Cumplimiento estimado:</strong> 78%</p>
            </div>

            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Prioridad</th>
                  <th style={styles.th}>Apartado</th>
                  <th style={styles.th}>Problema detectado</th>
                  <th style={styles.th}>Por qué está mal</th>
                  <th style={styles.th}>Propuesta</th>
                </tr>
              </thead>
              <tbody>
                {erroresSimulados.map((error) => (
                  <tr key={error.apartado}>
                    <td style={styles.td}>{error.prioridad}</td>
                    <td style={styles.td}><strong>{error.apartado}</strong></td>
                    <td style={styles.td}>{error.problema}</td>
                    <td style={styles.td}>{error.motivo}</td>
                    <td style={styles.td}>{error.propuesta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}
      </section>
    </main>
  );
}

const erroresSimulados = [
  {
    prioridad: "Alta",
    apartado: "Modalidad normativa",
    problema: "No queda claro si la programación está adaptada a presencial o teleformación.",
    motivo: "La modalidad condiciona la metodología, seguimiento, evaluación y requisitos documentales.",
    propuesta: "Indicar expresamente la modalidad y adaptar todos los apartados a ella."
  },
  {
    prioridad: "Alta",
    apartado: "RA y CE",
    problema: "No se evidencia una relación completa entre RA, CE, actividades e instrumentos.",
    motivo: "Cada criterio de evaluación debe poder comprobarse mediante evidencias objetivas.",
    propuesta: "Crear una matriz RA-CE-Actividad-Instrumento."
  }
];

function NavItem({ icon, text, active }) {
  return (
    <div style={{ ...styles.navItem, background: active ? "#ffffff22" : "transparent" }}>
      <span>{icon}</span>
      <span>{text}</span>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div style={styles.statCard}>
      <p style={styles.smallText}>{title}</p>
      <strong style={styles.statValue}>{value}</strong>
    </div>
  );
}

function ReviewItem({ title }) {
  return (
    <div style={styles.reviewItem}>
      <span>✅</span>
      <span>{title}</span>
    </div>
  );
}

const styles = {
  app: {
    minHeight: "100vh",
    display: "flex",
    background: "#eef3f8",
    fontFamily: "Arial, sans-serif",
    color: "#1f2937"
  },
  sidebar: {
    width: "285px",
    background: "#12355b",
    color: "white",
    padding: "28px 20px",
    minHeight: "100vh"
  },
  logo: { fontSize: "24px", margin: 0 },
  logoText: { fontSize: "13px", color: "#cbd5e1", marginTop: "8px", marginBottom: "35px" },
  nav: { display: "grid", gap: "8px" },
  navItem: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
    padding: "14px 12px",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "15px"
  },
  content: { flex: 1, padding: "35px" },
  topbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "28px"
  },
  pageTitle: { margin: 0, color: "#12355b", fontSize: "34px" },
  pageSubtitle: { color: "#64748b", marginTop: "8px" },
  version: {
    background: "white",
    border: "1px solid #dbe3ec",
    padding: "10px 14px",
    borderRadius: "999px",
    color: "#12355b",
    fontWeight: "bold"
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
    gap: "18px",
    marginBottom: "24px"
  },
  statCard: {
    background: "white",
    padding: "22px",
    borderRadius: "16px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.06)"
  },
  statValue: { fontSize: "32px", color: "#12355b" },
  mainGrid: {
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    gap: "24px",
    marginBottom: "24px"
  },
  panel: {
    background: "white",
    padding: "28px",
    borderRadius: "18px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    marginBottom: "24px"
  },
  panelTitle: { color: "#12355b", marginTop: 0, fontSize: "24px" },
  text: { color: "#526174", lineHeight: "1.6" },
  smallText: { color: "#64748b", fontSize: "14px" },
  uploadBox: {
    border: "2px dashed #9ca3af",
    background: "#f8fafc",
    borderRadius: "16px",
    padding: "30px",
    textAlign: "center",
    marginTop: "20px"
  },
  uploadIcon: { fontSize: "42px", marginBottom: "10px" },
  fileName: { marginTop: "14px", color: "#12355b", fontWeight: "bold" },
  formGroup: { marginTop: "24px" },
  label: { display: "block", fontWeight: "bold", marginBottom: "10px" },
  input: {
    width: "100%",
    padding: "13px",
    borderRadius: "8px",
    border: "1px solid #ccd6e0",
    fontSize: "15px"
  },
  optionGrid: { display: "grid", gap: "10px" },
  option: {
    border: "1px solid #dbe3ec",
    borderRadius: "10px",
    padding: "12px",
    display: "flex",
    gap: "10px",
    alignItems: "center"
  },
  primaryButton: {
    marginTop: "28px",
    background: "#12355b",
    color: "white",
    border: "none",
    borderRadius: "10px",
    padding: "15px 28px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer"
  },
  reviewItem: {
    display: "flex",
    gap: "10px",
    padding: "12px 0",
    borderBottom: "1px solid #e5e7eb"
  },
  progressBar: {
    height: "12px",
    background: "#e5e7eb",
    borderRadius: "999px",
    overflow: "hidden"
  },
  progressFill: {
    height: "100%",
    width: "70%",
    background: "#12355b"
  },
  summaryBox: {
    background: "#f8fafc",
    border: "1px solid #dbe3ec",
    borderRadius: "14px",
    padding: "18px",
    marginBottom: "22px"
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "14px"
  },
  th: {
    textAlign: "left",
    background: "#f1f5f9",
    color: "#12355b",
    padding: "12px",
    borderBottom: "1px solid #dbe3ec"
  },
  td: {
    padding: "12px",
    borderBottom: "1px solid #e5e7eb",
    verticalAlign: "top"
  }
};