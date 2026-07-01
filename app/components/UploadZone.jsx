export default function UploadZone() {
  return (
    <div
      style={{
        border: "2px dashed #9ca3af",
        borderRadius: "18px",
        padding: "40px",
        textAlign: "center",
        background: "#f8fafc",
        marginTop: "20px"
      }}
    >
      <div style={{ fontSize: "48px", marginBottom: "15px" }}>📄</div>

      <h3 style={{ color: "#12355b", marginBottom: "10px" }}>
        Sube tu programación didáctica
      </h3>

      <p style={{ color: "#64748b", marginBottom: "20px" }}>
        Formatos admitidos: DOCX y PDF
      </p>

      <input type="file" accept=".docx,.pdf" />

      <p style={{ fontSize: "13px", color: "#94a3b8", marginTop: "18px" }}>
        En próximas versiones la aplicación leerá el documento y extraerá apartados, tablas, RA, CE y temporalización.
      </p>
    </div>
  );
}
