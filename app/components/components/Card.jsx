export default function Card({
  icon,
  title,
  description,
  buttonText = "Abrir",
  onClick,
}) {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "18px",
        padding: "28px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        border: "1px solid #e5e7eb",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "0.3s"
      }}
    >
      <div>
        <div
          style={{
            fontSize: "42px",
            marginBottom: "18px"
          }}
        >
          {icon}
        </div>

        <h2
          style={{
            color: "#12355b",
            marginBottom: "10px",
            fontSize: "22px"
          }}
        >
          {title}
        </h2>

        <p
          style={{
            color: "#5b6777",
            lineHeight: "1.6",
            minHeight: "95px"
          }}
        >
          {description}
        </p>
      </div>

      <button
        onClick={onClick}
        style={{
          marginTop: "20px",
          background: "#12355b",
          color: "white",
          border: "none",
          borderRadius: "10px",
          padding: "14px",
          fontSize: "15px",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        {buttonText}
      </button>
    </div>
  );
}
