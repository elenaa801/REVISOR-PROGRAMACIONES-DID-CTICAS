export default function ReviewItem({
  title,
  status = "ok",
}) {
  const iconos = {
    ok: "✅",
    warning: "⚠️",
    error: "❌",
    pending: "⏳",
  };

  return (
    <div style={styles.item}>
      <span style={styles.icon}>
        {iconos[status]}
      </span>

      <span>{title}</span>
    </div>
  );
}

const styles = {
  item: {
    display: "flex",
    gap: "10px",
    padding: "12px 0",
    borderBottom: "1px solid #e5e7eb",
    alignItems: "center",
  },

  icon: {
    fontSize: "18px",
    width: "24px",
  },
};