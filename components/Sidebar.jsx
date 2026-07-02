export default function Sidebar() {
  const menu = [
    { icon: "🏠", text: "Dashboard", href: "#dashboard", active: true },
    { icon: "📄", text: "Nueva revisión", href: "#revision" },
    { icon: "🔁", text: "Comparar", href: "#comparar" },
    { icon: "✍️", text: "Crear programación", href: "#crear" },
    { icon: "📚", text: "Certificados", href: "#certificados" },
    { icon: "⚖️", text: "Normativa", href: "#normativa" },
    { icon: "📊", text: "Informes", href: "#informes" },
    { icon: "⚙️", text: "Configuración", href: "#configuracion" },
  ];

  return (
    <aside style={styles.sidebar}>
      <h1 style={styles.logo}>ATU Review AI</h1>
      <p style={styles.logoText}>Copiloto de programaciones didácticas</p>

      <nav style={styles.nav}>
        {menu.map((item) => (
          <a
            key={item.text}
            href={item.href}
            style={{
              ...styles.navItem,
              background: item.active ? "#ffffff22" : "transparent",
            }}
          >
            <span>{item.icon}</span>
            <span>{item.text}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}

const styles = {
  sidebar: {
    width: "285px",
    background: "#12355b",
    color: "white",
    padding: "28px 20px",
    minHeight: "100vh",
  },
  logo: {
    fontSize: "24px",
    margin: 0,
  },
  logoText: {
    fontSize: "13px",
    color: "#cbd5e1",
    marginTop: "8px",
    marginBottom: "35px",
  },
  nav: {
    display: "grid",
    gap: "8px",
  },
  navItem: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
    padding: "14px 12px",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "15px",
    color: "white",
    textDecoration: "none",
  },
};