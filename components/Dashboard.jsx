import StatsCards from "./StatsCards";
import UploadPanel from "./UploadPanel";
import RevisionPanel from "./RevisionPanel";
import DatosDetectadosPanel from "./DatosDetectadosPanel";
import NormativaPanel from "./NormativaPanel";
import LoadingPanel from "./LoadingPanel";
import ProgressPanel from "./ProgressPanel";
import ResultadosPanel from "./ResultadosPanel";

export default function Dashboard({
  fileName,
  codigo,
  setCodigo,
  modalidad,
  setModalidad,
  analizando,
  resultado,
  datosDetectados,
  normativaDetectada,
  revisionReal,
  onFileChange,
  onStartReview,
}) {
  return (
    <section style={styles.content}>
      <header id="dashboard" style={styles.topbar}>
        <div>
          <h2 style={styles.title}>Dashboard principal</h2>
          <p style={styles.subtitle}>
            Revisión normativa, pedagógica y metodológica de certificados profesionales.
          </p>
        </div>

        <span style={styles.version}>Versión 5.0</span>
      </header>

      <StatsCards resultado={resultado} revision={revisionReal} />

      <section id="revision" style={styles.mainGrid}>
        <UploadPanel
          fileName={fileName}
          codigo={codigo}
          setCodigo={setCodigo}
          modalidad={modalidad}
          setModalidad={setModalidad}
          analizando={analizando}
          onFileChange={onFileChange}
          onStartReview={onStartReview}
        />

        <RevisionPanel />
      </section>

      <ProgressPanel
        datos={datosDetectados}
        normativa={normativaDetectada}
        revision={revisionReal}
      />

      <DatosDetectadosPanel datos={datosDetectados} />

      <NormativaPanel normativa={normativaDetectada} />

      <LoadingPanel analizando={analizando} />

      <ResultadosPanel
        resultado={resultado}
        revision={revisionReal}
        fileName={fileName}
        codigo={codigo}
        modalidad={modalidad}
      />
    </section>
  );
}

const styles = {
  content: {
    flex: 1,
    padding: "35px",
  },
  topbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "28px",
  },
  title: {
    margin: 0,
    color: "#12355b",
    fontSize: "34px",
  },
  subtitle: {
    color: "#64748b",
    marginTop: "8px",
  },
  version: {
    background: "white",
    border: "1px solid #dbe3ec",
    padding: "10px 14px",
    borderRadius: "999px",
    color: "#12355b",
    fontWeight: "bold",
  },
  mainGrid: {
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    gap: "24px",
    marginBottom: "24px",
  },
};