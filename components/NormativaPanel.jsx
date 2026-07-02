export default function NormativaPanel({ normativa }) {
  if (!normativa) return null;

  return (
    <section style={styles.panel}>
      <h3 style={styles.title}>⚖️ Normativa detectada</h3>

      <div style={styles.infoBox}>
        <p>
          <strong>Certificado detectado:</strong>{" "}
          {normativa.codigoDetectado || "No detectado"}
        </p>

        <p>
          <strong>Modalidad:</strong>{" "}
          {normativa.modalidadAplicada}
        </p>

        <p>
          <strong>Estado:</strong>{" "}
          {normativa.estado}
        </p>
      </div>

      <h4 style={styles.subtitle}>Normativa general aplicable</h4>

      {normativa.normativaGeneral.map((item, index) => (
        <div key={index} style={styles.row}>
          <span>✅</span>
          <div>
            <strong>{item.nombre}</strong>
            <div style={styles.text}>{item.motivo}</div>
          </div>
        </div>
      ))}

      <h4 style={styles.subtitle}>Normativa según modalidad</h4>

      {normativa.normativaModalidad.map((item, index) => (
        <div key={index} style={styles.row}>
          <span>{item.aplica ? "✅" : "⚠️"}</span>
          <div>
            <strong>{item.nombre}</strong>
            <div style={styles.text}>{item.motivo}</div>
          </div>
        </div>
      ))}
    </section>
  );
}

const styles = {
  panel: {
    background: "#ffffff",
    padding: "28px",
    borderRadius: "18px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    marginBottom: "24px"
  },

  title: {
    color: "#12355b",
    marginTop: 0,
    marginBottom: "20px"
  },

  subtitle: {
    color: "#12355b",
    marginTop: "25px",
    marginBottom: "12px"
  },

  infoBox: {
    background: "#f8fafc",
    border: "1px solid #dbe3ec",
    borderRadius: "12px",
    padding: "18px"
  },

  row: {
    display: "flex",
    gap: "12px",
    padding: "12px 0",
    borderBottom: "1px solid #ececec",
    alignItems: "flex-start"
  },

  text: {
    color: "#64748b",
    marginTop: "4px"
  }
};