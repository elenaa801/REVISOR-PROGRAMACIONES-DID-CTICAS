export default function RevisionPanel() {
  const items = [
    "Normativa aplicable según modalidad",
    "Resultados de Aprendizaje RA",
    "Criterios de Evaluación CE",
    "Estrategias metodológicas",
    "Temporalización",
    "Instrumentos de evaluación",
    "Coherencia RA - CE - Actividades - Evaluación",
  ];

  return (
    <section style={styles.panel}>
      <h3 style={styles.title}>Motor de revisión</h3>

      <p style={styles.text}>
        La revisión comprobará los elementos clave de la programación.
      </p>

      {items.map((item) => (
        <div key={item} style={styles.item}>
          <span>✅</span>
          <span>{item}</span>
        </div>
      ))}
    </section>
  );
}

const styles = {
  panel: {
    background: "white",
    padding: "28px",
    borderRadius: "18px",
    boxShadow: "0 10px 30px rgba(0,0,0,.08)",
    marginBottom: "24px",
  },
  title: {
    color: "#12355b",
    marginTop: 0,
    fontSize: "24px",
  },
  text: {
    color: "#526174",
    lineHeight: "1.6",
  },
  item: {
    display: "flex",
    gap: "10px",
    padding: "12px 0",
    borderBottom: "1px solid #e5e7eb",
  },
};