import UploadZone from "../components/UploadZone";

export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#eef3f8",
      fontFamily: "Arial, sans-serif",
      color: "#1f2937"
    }}>
      <section style={{
        background: "#12355b",
        color: "white",
        padding: "45px",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "38px", margin: 0 }}>
          ATU Review AI
        </h1>
        <p style={{ fontSize: "18px", marginTop: "12px" }}>
          Revisor inteligente de programaciones didácticas
        </p>
      </section>

      <section style={{
        maxWidth: "1100px",
        margin: "40px auto",
        padding: "0 25px"
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px"
        }}>
          <Card
            title="📄 Nueva revisión"
            text="Sube una programación, elige presencial o teleformación y revisa normativa, RA, CE, metodología y evaluación."
          />
          <Card
            title="🔁 Comparar documentos"
            text="Compara dos versiones de una programación y detecta cambios, mejoras o aspectos pendientes."
          />
          <Card
            title="✍️ Crear programación"
            text="Genera una programación didáctica desde cero a partir del certificado profesional y la modalidad."
          />
        </div>

        <div style={{
          background: "white",
          marginTop: "35px",
          padding: "35px",
          borderRadius: "18px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
        }}>
          <h2 style={{ color: "#12355b", marginTop: 0 }}>
            Nueva revisión
          </h2>

          <UploadZone />

          <div style={{ marginTop: "24px" }}>
            <label><strong>Código del certificado profesional</strong></label>
            <br />
            <input
              type="text"
              placeholder="Ejemplo: SSCE0110"
              style={input}
            />
          </div>

          <div style={{ marginTop: "24px" }}>
            <label><strong>Modalidad normativa</strong></label>
            <div style={{ marginTop: "10px", lineHeight: "2" }}>
              <label><input type="radio" name="modalidad" /> Presencial</label><br />
              <label><input type="radio" name="modalidad" /> Teleformación</label><br />
              <label><input type="radio" name="modalidad" /> Mixta</label>
            </div>
          </div>

          <div style={{ marginTop: "24px" }}>
            <label><strong>La aplicación revisará</strong></label>
            <div style={{ marginTop: "10px", lineHeight: "2" }}>
              <label><input type="checkbox" defaultChecked /> Normativa de la modalidad seleccionada</label><br />
              <label><input type="checkbox" defaultChecked /> Estrategias metodológicas</label><br />
              <label><input type="checkbox" defaultChecked /> Resultados de Aprendizaje RA</label><br />
              <label><input type="checkbox" defaultChecked /> Criterios de Evaluación CE</label><br />
              <label><input type="checkbox" defaultChecked /> Coherencia RA - CE - Actividades - Evaluación</label><br />
              <label><input type="checkbox" defaultChecked /> Temporalización</label><br />
              <label><input type="checkbox" defaultChecked /> Instrumentos de evaluación</label>
            </div>
          </div>

          <button style={button}>
            Revisar programación
          </button>
        </div>
      </section>
    </main>
  );
}

function Card({ title, text }) {
  return (
    <div style={{
      background: "white",
      padding: "28px",
      borderRadius: "18px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
    }}>
      <h2 style={{ color: "#12355b", marginTop: 0 }}>{title}</h2>
      <p style={{ color: "#526174", lineHeight: "1.5" }}>{text}</p>
      <button style={{
        marginTop: "15px",
        background: "#eef3f8",
        border: "1px solid #ccd6e0",
        padding: "12px 18px",
        borderRadius: "10px",
        cursor: "pointer"
      }}>
        Abrir
      </button>
    </div>
  );
}

const input = {
  marginTop: "8px",
  padding: "13px",
  width: "100%",
  border: "1px solid #ccd6e0",
  borderRadius: "8px",
  fontSize: "15px"
};

const button = {
  marginTop: "32px",
  background: "#12355b",
  color: "white",
  padding: "15px 30px",
  border: "none",
  borderRadius: "10px",
  fontSize: "16px",
  cursor: "pointer"
};
