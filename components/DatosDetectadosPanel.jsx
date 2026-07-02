export default function DatosDetectadosPanel({ datos }) {
  if (!datos) return null;

  return (
    <section style={styles.panel}>
      <h3 style={styles.title}>Datos detectados del documento</h3>

      <div style={styles.box}>
        <p><strong>Certificado:</strong> {datos.datosGenerales.certificado || "No detectado"}</p>
        <p><strong>Duración:</strong> {datos.datosGenerales.duracion || "No detectada"}</p>
        <p><strong>Centro:</strong> {datos.datosGenerales.centro || "No detectado"}</p>
        <p><strong>Código módulo:</strong> {datos.datosGenerales.codigoModulo || "No detectado"}</p>
        <p><strong>Horas módulo:</strong> {datos.datosGenerales.horasModulo || "No detectadas"}</p>
        <p><strong>RA detectados:</strong> {datos.resultadosAprendizaje.length}</p>
        <p><strong>CE detectados:</strong> {datos.criteriosEvaluacion.length}</p>
        <p><strong>Actividades detectadas:</strong> {datos.actividades.length}</p>
      </div>
    </section>
  );
}

const styles = {
  panel: {
    background: "white",
    padding: "28px",
    borderRadius: "18px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    marginBottom: "24px"
  },
  title: {
    color: "#12355b",
    marginTop: 0,
    fontSize: "24px"
  },
  box: {
    background: "#f8fafc",
    border: "1px solid #dbe3ec",
    borderRadius: "14px",
    padding: "18px"
  }
};