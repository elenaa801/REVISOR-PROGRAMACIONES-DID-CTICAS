export default function Home() {
  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <div>
          <h1 style={styles.title}>ATU Review AI</h1>
          <p style={styles.subtitle}>
            Revisor inteligente de programaciones didácticas de certificados profesionales
          </p>
        </div>
      </header>

      <section style={styles.container}>
        <div style={styles.intro}>
          <h2 style={styles.sectionTitle}>Panel principal</h2>
          <p style={styles.text}>
            Selecciona qué quieres hacer. La aplicación está preparada para revisar
            programaciones, comparar documentos y crear programaciones desde cero.
          </p>
        </div>

        <div style={styles.grid}>
          <ModuleCard
            icon="📄"
            title="Nueva revisión"
            description="Sube una programación y revisa normativa, modalidad, RA, CE, metodología, temporalización e instrumentos de evaluación."
            active
          />

          <ModuleCard
            icon="🔁"
            title="Comparar documentos"
            description="Compara dos versiones de una programación para detectar cambios, mejoras y aspectos pendientes."
          />

          <ModuleCard
            icon="✍️"
            title="Crear programación"
            description="Genera una programación didáctica desde cero a partir del certificado profesional y la modalidad."
          />
        </div>

        <section style={styles.reviewBox}>
          <h2 style={styles.sectionTitle}>Nueva revisión</h2>

          <div style={styles.uploadBox}>
            <div style={styles.uploadIcon}>📄</div>
            <h3 style={styles.uploadTitle}>Sube tu programación didáctica</h3>
            <p style={styles.text}>Formatos admitidos: DOCX y PDF</p>
            <input type="file" accept=".docx,.pdf" />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Código del certificado profesional</label>
            <input
              type="text"
              placeholder="Ejemplo: SSCE0110"
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Modalidad normativa</label>
            <div style={styles.options}>
              <label><input type="radio" name="modalidad" /> Presencial</label>
              <label><input type="radio" name="modalidad" /> Teleformación</label>
              <label><input type="radio" name="modalidad" /> Mixta</label>
            </div>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Elementos que revisará la aplicación</label>
            <div style={styles.checks}>
              <label><input type="checkbox" defaultChecked /> Normativa según modalidad seleccionada</label>
              <label><input type="checkbox" defaultChecked /> Estrategias metodológicas</label>
              <label><input type="checkbox" defaultChecked /> Resultados de Aprendizaje RA</label>
              <label><input type="checkbox" defaultChecked /> Criterios de Evaluación CE</label>
              <label><input type="checkbox" defaultChecked /> Coherencia RA - CE - Actividades - Evaluación</label>
              <label><input type="checkbox" defaultChecked /> Temporalización</label>
              <label><input type="checkbox" defaultChecked /> Instrumentos de evaluación</label>
            </div>
          </div>

          <button style={styles.primaryButton}>
            Revisar programación
          </button>
        </section>
      </section>
    </main>
  );
}

function ModuleCard({ icon, title, description, active }) {
  return (
    <article style={{
      ...styles.card,
      border: active ? "2px solid #12355b" : "1px solid #dbe3ec"
    }}>
      <div style={styles.cardIcon}>{icon}</div>
      <h3 style={styles.cardTitle}>{title}</h3>
      <p style={styles.text}>{description}</p>
      {active && <span style={styles.badge}>Disponible ahora</span>}
      {!active && <span style={styles.badgeMuted}>Próximamente</span>}
    </article>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#eef3f8",
    fontFamily: "Arial, sans-serif",
    color: "#1f2937"
  },
  header: {
    background: "#12355b",
    color: "white",
    padding: "55px 30px",
    textAlign: "center"
  },
  title: {
    fontSize: "44px",
    margin: 0
  },
  subtitle: {
    fontSize: "18px",
    marginTop: "12px"
  },
  container: {
    maxWidth: "1100px",
    margin: "40px auto",
    padding: "0 24px"
  },
  intro: {
    marginBottom: "24px"
  },
  sectionTitle: {
    color: "#12355b",
    marginTop: 0
  },
  text: {
    color: "#526174",
    lineHeight: "1.6"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px"
  },
  card: {
    background: "white",
    padding: "28px",
    borderRadius: "18px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
  },
  cardIcon: {
    fontSize: "42px",
    marginBottom: "15px"
  },
  cardTitle: {
    color: "#12355b",
    fontSize: "24px",
    marginTop: 0
  },
  badge: {
    display: "inline-block",
    marginTop: "15px",
    background: "#dcfce7",
    color: "#166534",
    padding: "8px 12px",
    borderRadius: "999px",
    fontSize: "13px",
    fontWeight: "bold"
  },
  badgeMuted: {
    display: "inline-block",
    marginTop: "15px",
    background: "#f1f5f9",
    color: "#64748b",
    padding: "8px 12px",
    borderRadius: "999px",
    fontSize: "13px",
    fontWeight: "bold"
  },
  reviewBox: {
    background: "white",
    marginTop: "35px",
    padding: "35px",
    borderRadius: "18px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
  },
  uploadBox: {
    border: "2px dashed #9ca3af",
    borderRadius: "18px",
    padding: "38px",
    textAlign: "center",
    background: "#f8fafc",
    marginTop: "20px"
  },
  uploadIcon: {
    fontSize: "46px"
  },
  uploadTitle: {
    color: "#12355b"
  },
  formGroup: {
    marginTop: "26px"
  },
  label: {
    display: "block",
    fontWeight: "bold",
    marginBottom: "10px"
  },
  input: {
    padding: "13px",
    width: "100%",
    border: "1px solid #ccd6e0",
    borderRadius: "8px",
    fontSize: "15px"
  },
  options: {
    display: "grid",
    gap: "10px"
  },
  checks: {
    display: "grid",
    gap: "10px"
  },
  primaryButton: {
    marginTop: "32px",
    background: "#12355b",
    color: "white",
    padding: "15px 30px",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold"
  }
};
