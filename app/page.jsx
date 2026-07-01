export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      background: "#eef3f8",
      fontFamily: "Arial, sans-serif"
    }}>
      <aside style={{
        width: "260px",
        background: "#12355b",
        color: "white",
        padding: "30px 20px"
      }}>
        <h2 style={{ fontSize: "20px", marginBottom: "35px" }}>
          Revisor FP
        </h2>

        {[
          "🏠 Inicio",
          "📄 Nueva revisión",
          "📂 Mis revisiones",
          "📚 Certificados",
          "⚖️ Legislación",
          "📊 Informes",
          "⚙️ Configuración"
        ].map((item) => (
          <div key={item} style={{
            padding: "14px 12px",
            marginBottom: "8px",
            borderRadius: "10px",
            background: item.includes("Nueva") ? "#ffffff22" : "transparent",
            cursor: "pointer"
          }}>
            {item}
          </div>
        ))}
      </aside>

      <section style={{ flex: 1, padding: "40px" }}>
        <h1 style={{ color: "#12355b", fontSize: "34px" }}>
          Nueva revisión de programación didáctica
        </h1>

        <p style={{ color: "#526174", fontSize: "17px" }}>
          Sube una programación y selecciona el tipo de revisión que quieres aplicar.
        </p>

        <div style={{
          background: "white",
          marginTop: "30px",
          padding: "35px",
          borderRadius: "18px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          maxWidth: "900px"
        }}>
          <h2 style={{ color: "#12355b" }}>Datos de la revisión</h2>

          <label><strong>Subir programación</strong></label>
          <br />
          <input type="file" accept=".docx,.pdf" style={{ marginTop: "10px" }} />

          <div style={{ marginTop: "25px" }}>
            <label><strong>Código del certificado profesional</strong></label>
            <br />
            <input
              type="text"
              placeholder="Ejemplo: SSCE0110"
              style={{
                marginTop: "8px",
                padding: "12px",
                width: "100%",
                border: "1px solid #ccd6e0",
                borderRadius: "8px"
              }}
            />
          </div>

          <div style={{ marginTop: "25px" }}>
            <label><strong>Modalidad normativa</strong></label>
            <div style={{ marginTop: "10px", lineHeight: "2" }}>
              <label><input type="radio" name="modalidad" /> Presencial</label><br />
              <label><input type="radio" name="modalidad" /> Teleformación</label><br />
              <label><input type="radio" name="modalidad" /> Mixta</label>
            </div>
          </div>

          <div style={{ marginTop: "25px" }}>
            <label><strong>Tipo de revisión</strong></label>
            <div style={{ marginTop: "10px", lineHeight: "2" }}>
              <label><input type="checkbox" defaultChecked /> Normativa aplicable</label><br />
              <label><input type="checkbox" defaultChecked /> Estrategias metodológicas</label><br />
              <label><input type="checkbox" defaultChecked /> Resultados de aprendizaje</label><br />
              <label><input type="checkbox" defaultChecked /> Criterios de evaluación</label><br />
              <label><input type="checkbox" defaultChecked /> Coherencia RA - CE - Actividades - Evaluación</label><br />
              <label><input type="checkbox" defaultChecked /> Temporalización</label><br />
              <label><input type="checkbox" defaultChecked /> Instrumentos de evaluación</label>
            </div>
          </div>

          <button style={{
            marginTop: "35px",
            background: "#12355b",
            color: "white",
            padding: "15px 30px",
            border: "none",
            borderRadius: "10px",
            fontSize: "16px",
            cursor: "pointer"
          }}>
            Revisar programación
          </button>
        </div>
      </section>
    </main>
  );
}
