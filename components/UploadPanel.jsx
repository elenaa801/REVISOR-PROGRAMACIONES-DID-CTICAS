export default function UploadPanel({
  fileName,
  codigo,
  setCodigo,
  modalidad,
  setModalidad,
  analizando,
  onFileChange,
  onStartReview,
}) {
  return (
    <section style={styles.panel}>
      <h3 style={styles.title}>Nueva revisión</h3>

      <p style={styles.text}>
        Sube una programación didáctica y selecciona la modalidad normativa que debe aplicarse.
      </p>

      <div style={styles.uploadBox}>
        <div style={styles.icon}>📄</div>
        <strong>Sube tu documento</strong>
        <p style={styles.smallText}>DOCX o PDF</p>

        <input type="file" accept=".docx,.pdf" onChange={onFileChange} />

        {fileName && (
          <p style={styles.fileName}>
            Archivo seleccionado: {fileName}
          </p>
        )}
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Código del certificado profesional</label>
        <input
          style={styles.input}
          placeholder="Ejemplo: SSCE0110"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
        />
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Modalidad</label>

        <div style={styles.optionGrid}>
          {["Presencial", "Teleformación", "Mixta"].map((item) => (
            <label key={item} style={styles.option}>
              <input
                type="radio"
                name="modalidad"
                value={item}
                checked={modalidad === item}
                onChange={(e) => setModalidad(e.target.value)}
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      <button style={styles.button} onClick={onStartReview}>
        {analizando ? "Analizando..." : "Iniciar revisión"}
      </button>
    </section>
  );
}

const styles = {
  panel: {
    background: "white",
    padding: "28px",
    borderRadius: "18px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    marginBottom: "24px",
  },
  title: {
    color: "#12355b",
    marginTop: 0,
    fontSize: "24px",
  },
  text: {
    color: "#526174",
    lineHeight: "1.6",
  },
  smallText: {
    color: "#64748b",
    fontSize: "14px",
  },
  uploadBox: {
    border: "2px dashed #9ca3af",
    background: "#f8fafc",
    borderRadius: "16px",
    padding: "30px",
    textAlign: "center",
    marginTop: "20px",
  },
  icon: {
    fontSize: "42px",
    marginBottom: "10px",
  },
  fileName: {
    marginTop: "14px",
    color: "#12355b",
    fontWeight: "bold",
  },
  formGroup: {
    marginTop: "24px",
  },
  label: {
    display: "block",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  input: {
    width: "100%",
    padding: "13px",
    borderRadius: "8px",
    border: "1px solid #ccd6e0",
    fontSize: "15px",
  },
  optionGrid: {
    display: "grid",
    gap: "10px",
  },
  option: {
    border: "1px solid #dbe3ec",
    borderRadius: "10px",
    padding: "12px",
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
  button: {
    marginTop: "28px",
    background: "#12355b",
    color: "white",
    border: "none",
    borderRadius: "10px",
    padding: "15px 28px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};