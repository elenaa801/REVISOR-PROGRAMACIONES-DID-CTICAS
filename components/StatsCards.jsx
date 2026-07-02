export default function StatsCards({ resultado, revision }) {
  const cards = [
    {
      titulo: "Programaciones revisadas",
      valor: resultado ? "1" : "0",
    },
    {
      titulo: "Errores detectados",
      valor: revision?.totalIssues ?? "0",
    },
    {
      titulo: "Cumplimiento",
      valor: revision ? `${revision.score}%` : "0%",
    },
    {
      titulo: "Estado",
      valor: resultado ? "Revisar" : "Pendiente",
    },
  ];

  return (
    <section style={styles.grid}>
      {cards.map((card) => (
        <div key={card.titulo} style={styles.card}>
          <p style={styles.title}>{card.titulo}</p>
          <strong style={styles.value}>{card.valor}</strong>
        </div>
      ))}
    </section>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
    gap: "18px",
    marginBottom: "24px",
  },

  card: {
    background: "white",
    padding: "22px",
    borderRadius: "16px",
    boxShadow: "0 8px 20px rgba(0,0,0,.06)",
  },

  title: {
    color: "#64748b",
    fontSize: "14px",
    marginBottom: "12px",
  },

  value: {
    fontSize: "32px",
    color: "#12355b",
  },
};