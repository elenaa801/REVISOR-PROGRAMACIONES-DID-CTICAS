export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#f3f6fb",
      fontFamily: "Arial, sans-serif",
      padding: "40px"
    }}>
      <section style={{
        maxWidth: "900px",
        margin: "0 auto",
        background: "white",
        borderRadius: "18px",
        padding: "40px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
      }}>
        <h1 style={{ color: "#12355b", fontSize: "34px" }}>
          Revisor de Programaciones Didácticas
        </h1>

        <p style={{ fontSize: "18px", color: "#4b5563" }}>
          Sube una programación didáctica y revisa su adecuación normativa,
          metodológica y pedagógica.
        </p>

        <div style={{ marginTop: "30px" }}>
          <label><strong>Subir programación DOCX</strong></label>
          <br />
          <input type="file" accept=".docx,.pdf" style={{ marginTop: "10px" }} />
        </div>

        <div style={{ marginTop: "25px" }}>
          <label><strong>Modalidad de revisión</strong></label>
          <div style={{ marginTop: "10px" }}>
            <label><input type="radio" name="modalidad" /> Presencial</label>
            <br />
            <label><input type="radio" name="modalidad" /> Teleformación</label>
            <br />
            <label><input type="radio" name="modalidad" /> Mixta</label>
          </div>
        </div>

        <div style={{ marginTop: "25px" }}>
          <label><strong>Elementos a revisar</strong></label>
          <div style={{ marginTop: "10px" }}>
            <label><input type="checkbox" defaultChecked /> Normativa aplicable</label>
            <br />
            <label><input type="checkbox" defaultChecked /> Estrategias metodológicas</label>
            <br />
            <label><input type="checkbox" defaultChecked /> Resultados de aprendizaje</label>
            <br />
            <label><input type="checkbox" defaultChecked /> Criterios de evaluación</label>
            <br />
            <label><input type="checkbox" defaultChecked /> Coherencia RA-CE-Actividades-Evaluación</label>
          </div>
        </div>

        <button style={{
          marginTop: "35px",
          background: "#12355b",
          color: "white",
          padding: "15px 28px",
          border: "none",
          borderRadius: "10px",
          fontSize: "16px",
          cursor: "pointer"
        }}>
          Revisar programación
        </button>
      </section>
    </main>
  );
}
