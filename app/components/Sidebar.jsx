export default function Sidebar() {
  const menuItems = [
    "🏠 Inicio",
    "📄 Nueva revisión",
    "📂 Mis revisiones",
    "📚 Certificados",
    "⚖️ Legislación",
    "📊 Informes",
    "🔍 Modo Inspector",
    "⚙️ Configuración"
  ];

  return (
    <aside style={{
      width: "280px",
      background: "#12355b",
      color: "white",
      padding: "30px 22px",
      minHeight: "100vh"
    }}>
      <h2 style={{ fontSize: "22px", marginBottom: "8px" }}>
        Revisor FP
      </h2>

      <p style={{
        fontSize: "13px",
        color: "#cbd5e1",
        marginBottom: "35px"
      }}>
        Programaciones didácticas
      </p>

      {menuItems.map((item) => (
        <div key={item} style={{
          padding: "14px 12px",
          marginBottom: "8px",
          borderRadius: "10px",
          background: item.includes("Nueva") ? "#ffffff25" : "transparent",
          cursor: "pointer",
          fontSize: "15px"
        }}>
          {item}
        </div>
      ))}
    </aside>
  );
}
