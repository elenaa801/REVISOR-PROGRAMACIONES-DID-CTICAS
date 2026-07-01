export default function Home() {
  const errores = [
    {
      apartado: "Modalidad normativa",
      estado: "Revisar",
      detalle: "Debe comprobarse si la programación está adaptada a presencial, teleformación o modalidad mixta.",
      gravedad: "Alta"
    },
    {
      apartado: "Resultados de Aprendizaje",
      estado: "Pendiente",
      detalle: "La app revisará si todos los RA oficiales aparecen y están bien relacionados con actividades y evaluación.",
      gravedad: "Alta"
    },
    {
      apartado: "Criterios de Evaluación",
      estado: "Pendiente",
      detalle: "Se comprobará si cada CE tiene instrumento de evaluación asociado.",
      gravedad: "Alta"
    },
    {
      apartado: "Estrategias metodológicas",
      estado: "Revisar",
      detalle: "Se analizará si la metodología es activa, práctica y coherente con el certificado.",
      gravedad: "Media"
    },
    {
      apartado: "Temporalización",
      estado: "Pendiente",
      detalle: "Se verificará si las horas coinciden con las oficiales del certificado profesional.",
      gravedad: "Alta"
    }
  ];

  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      background: "#eef3f8",
      fontFamily: "Arial, sans-serif",
      color: "#1f2937"
    }}>
      <aside style={{
        width: "280px",
        background: "#12355b",
        color: "white",
        padding: "30px 22px"
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

        {[
          "🏠 Inicio",
          "📄 Nueva revisión",
          "📂 Mis revisiones",
          "📚 Certificados",
          "⚖️ Legislación",
          "📊 Informes",
          "🔍 Modo Inspector",
          "⚙️ Configuración"
        ].map((item) => (
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

      <section style={{ flex: 1, padding: "40px" }}>
        <header style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px"
        }}>
          <div>
            <h1 style={{ color: "#12355b", fontSize: "34px", margin: 0 }}>
              Nueva revisión de programación didáctica
            </h1>
            <p style={{ color: "#526174", fontSize: "16px" }}>
              Revisión normativa, metodológica y pedagógica de certificados profesionales.
            </p>
          </div>

          <div style={{
            background: "white",
            padding: "14px 20px",
            borderRadius: "14px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.06)"
          }}>
            <strong>Versión 0.3</strong>
            <br />
            <span style={{ fontSize: "13px", color: "#64748b" }}>
              Interfaz avanzada
            </span>
          </div>
        </header>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "25px"
        }}>
          <section style={{
            background: "white",
            padding: "32px",
            borderRadius: "18px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
          }}>
            <h2 style={{ color: "#12355b", marginTop: 0 }}>
              Datos de la revisión
            </h2>

            <label><strong>Subir programación</strong></label>
            <br />
            <input type="file" accept=".docx,.pdf" style={{ marginTop: "10px" }} />

            <div style={{ marginTop: "24px" }}>
              <label><strong>Código del certificado profesional</strong></label>
              <br />
              <input
                type="text"
                placeholder="Ejemplo: SSCE0110"
                style={{
                  marginTop: "8px",
                  padding: "13px",
                  width: "100%",
                  border: "1px solid #ccd6e0",
                  borderRadius: "8px",
                  fontSize: "15px"
                }}
              />
            </div>

            <div style={{ marginTop: "24px" }}>
              <label><strong>Modalidad normativa que debe aplicar la revisión</strong></label>
              <div style={{ marginTop: "10px", lineHeight: "2" }}>
                <label><input type="radio" name="modalidad" /> Presencial</label><br />
                <label><input type="radio" name="modalidad" /> Teleformación</label><br />
                <label><input type="radio" name="modalidad" /> Mixta / con sesiones presenciales</label>
              </div>
            </div>

            <div style={{ marginTop: "24px" }}>
              <label><strong>Nivel de revisión</strong></label>
              <div style={{ marginTop: "10px", lineHeight: "2" }}>
                <label><input type="radio" name="nivel" /> Básica</label><br />
                <label><input type="radio" name="nivel" /> Normativa</label><br />
                <label><input type="radio" name="nivel" /> Pedagógica</label><br />
                <label><input type="radio" name="nivel" defaultChecked /> Completa / IA experta</label>
              </div>
            </div>

            <div style={{ marginTop: "24px" }}>
              <label><strong>Elementos a revisar</strong></label>
              <div style={{ marginTop: "10px", lineHeight: "2" }}>
                <label><input type="checkbox" defaultChecked /> Normativa aplicable</label><br />
                <label><input type="checkbox" defaultChecked /> Estrategias metodológicas</label><br />
                <label><input type="checkbox" defaultChecked /> Resultados de Aprendizaje RA</label><br />
                <label><input type="checkbox" defaultChecked /> Criterios de Evaluación CE</label><br />
                <label><input type="checkbox" defaultChecked /> Coherencia RA - CE - Actividades - Evaluación</label><br />
                <label><input type="checkbox" defaultChecked /> Temporalización</label><br />
                <label><input type="checkbox" defaultChecked /> Instrumentos de evaluación</label><br />
                <label><input type="checkbox" defaultChecked /> Recursos y espacios</label><br />
                <label><input type="checkbox" defaultChecked /> Corrección automática del documento</label>
              </div>
            </div>

            <button style={{
              marginTop: "32px",
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
          </section>

          <section style={{
            background: "white",
            padding: "32px",
            borderRadius: "18px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
          }}>
            <h2 style={{ color: "#12355b", marginTop: 0 }}>
              Panel de análisis
            </h2>

            <div style={{
              background: "#eef6ff",
              border: "1px solid #bfdbfe",
              padding: "20px",
              borderRadius: "14px",
              marginBottom: "22px"
            }}>
              <strong>Estado de revisión</strong>
              <p style={{ marginBottom: 0, color: "#475569" }}>
                Preparado para analizar el documento cuando se conecte el motor de IA.
              </p>
            </div>

            <h3 style={{ color: "#12355b" }}>Indicadores previstos</h3>

            {[
              ["Cumplimiento normativo", "0 %"],
              ["Calidad metodológica", "0 %"],
              ["Cobertura RA y CE", "0 %"],
              ["Coherencia pedagógica", "0 %"]
            ].map(([nombre, valor]) => (
              <div key={nombre} style={{ marginBottom: "15px" }}>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "14px"
                }}>
                  <span>{nombre}</span>
                  <strong>{valor}</strong>
                </div>
                <div style={{
                  height: "9px",
                  background: "#e5e7eb",
                  borderRadius: "999px",
                  marginTop: "6px"
                }}>
                  <div style={{
                    height: "9px",
                    width: "0%",
                    background: "#12355b",
                    borderRadius: "999px"
                  }} />
                </div>
              </div>
            ))}

            <h3 style={{ color: "#12355b", marginTop: "28px" }}>
              Descargas futuras
            </h3>

            <div style={{ display: "grid", gap: "10px" }}>
              {[
                "Descargar DOCX corregido",
                "Descargar PDF corregido",
                "Descargar informe técnico",
                "Descargar informe ejecutivo"
              ].map((boton) => (
                <button key={boton} style={{
                  padding: "12px",
                  borderRadius: "10px",
                  border: "1px solid #cbd5e1",
                  background: "#f8fafc",
                  cursor: "pointer",
                  textAlign: "left"
                }}>
                  ⬇ {boton}
                </button>
              ))}
            </div>
          </section>
        </div>

        <section style={{
          background: "white",
          padding: "32px",
          borderRadius: "18px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          marginTop: "25px"
        }}>
          <h2 style={{ color: "#12355b", marginTop: 0 }}>
            Reglas de revisión preparadas
          </h2>

          <table style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "14px"
          }}>
            <thead>
              <tr style={{ background: "#f1f5f9" }}>
                <th style={th}>Apartado</th>
                <th style={th}>Estado</th>
                <th style={th}>Detalle</th>
                <th style={th}>Gravedad</th>
              </tr>
            </thead>
            <tbody>
              {errores.map((item) => (
                <tr key={item.apartado}>
                  <td style={td}><strong>{item.apartado}</strong></td>
                  <td style={td}>{item.estado}</td>
                  <td style={td}>{item.detalle}</td>
                  <td style={td}>{item.gravedad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </section>
    </main>
  );
}

const th = {
  textAlign: "left",
  padding: "14px",
  borderBottom: "1px solid #e5e7eb",
  color: "#12355b"
};

const td = {
  padding: "14px",
  borderBottom: "1px solid #e5e7eb",
  verticalAlign: "top"
};
