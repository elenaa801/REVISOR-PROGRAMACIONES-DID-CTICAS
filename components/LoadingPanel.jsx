export default function LoadingPanel({ analizando }) {
  if (!analizando) return null;

  return (
    <section style={styles.panel}>
      <h3 style={styles.title}>Analizando programación...</h3>
      <p style={styles.text}>
        Leyendo documento, comprobando modalidad, detectando normativa y preparando informe.
      </p>

      <div style={styles.progressBar}>
        <div style={styles.progressFill}></div>
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
  text: {
    color: "#526174",
    lineHeight: "1.6"
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
  }
};