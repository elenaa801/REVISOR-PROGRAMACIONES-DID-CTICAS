export default function ProgressPanel({ datos, normativa, revision }) {
  const pasos = [
    { texto: "Documento leído", activo: !!datos },
    { texto: "Datos detectados", activo: !!datos },
    { texto: "Normativa detectada", activo: !!normativa },
    { texto: "Revisión ejecutada", activo: !!revision },
    { texto: "Informe preparado", activo: !!revision },
  ];

  return (
    <section style={styles.panel}>
      <h3 style={styles.title}>Progreso del análisis</h3>

      <div style={styles.list}>
        {pasos.map((paso, index) => (
          <div key={index} style={styles.item}>
            <span>{paso.activo ? "✅" : "⏳"}</span>
            <span>{paso.texto}</span>
          </div>
        ))}
      </div>
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
    marginTop: 0,
    color: "#12355b",
    fontSize: "24px",
  },
  list: {
    display: "grid",
    gap: "12px",
  },
  item: {
    display: "flex",
    gap: "10px",
    padding: "12px",
    borderRadius: "10px",
    background: "#f8fafc",
    border: "1px solid #dbe3ec",
  },
};