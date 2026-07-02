export default function ResultadosPanel({
  resultado,
  revision,
  fileName,
  codigo,
  modalidad,
}) {
  if (!resultado || !revision) return null;

  return (
    <section style={styles.panel}>
      <h3 style={styles.title}>Resultado de la revisión</h3>

      <div style={styles.summary}>
        <p><strong>Documento:</strong> {fileName || "No indicado"}</p>
        <p><strong>Certificado:</strong> {codigo || "No indicado"}</p>
        <p><strong>Modalidad:</strong> {modalidad || "No seleccionada"}</p>
        <p><strong>Cumplimiento:</strong> {revision.score}%</p>
        <p><strong>Incidencias:</strong> {revision.totalIssues}</p>
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Prioridad</th>
            <th style={styles.th}>Apartado</th>
            <th style={styles.th}>Problema</th>
            <th style={styles.th}>Motivo</th>
            <th style={styles.th}>Propuesta</th>
          </tr>
        </thead>

        <tbody>
          {revision.issues.map((issue, index) => (
            <tr key={index}>
              <td style={styles.td}>{issue.priority}</td>
              <td style={styles.td}>{issue.section}</td>
              <td style={styles.td}>{issue.problem}</td>
              <td style={styles.td}>{issue.reason}</td>
              <td style={styles.td}>{issue.proposal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

const styles = {
  panel: {
    background: "white",
    padding: "28px",
    borderRadius: "18px",
    boxShadow: "0 10px 30px rgba(0,0,0,.08)",
    marginBottom: "24px"
  },

  title: {
    marginTop: 0,
    color: "#12355b",
    fontSize: "24px"
  },

  summary: {
    background: "#f8fafc",
    border: "1px solid #dbe3ec",
    borderRadius: "12px",
    padding: "18px",
    marginBottom: "22px"
  },

  table: {
    width: "100%",
    borderCollapse: "collapse"
  },

  th: {
    background: "#f1f5f9",
    color: "#12355b",
    textAlign: "left",
    padding: "12px",
    borderBottom: "1px solid #dbe3ec"
  },

  td: {
    padding: "12px",
    borderBottom: "1px solid #e5e7eb",
    verticalAlign: "top"
  }
};