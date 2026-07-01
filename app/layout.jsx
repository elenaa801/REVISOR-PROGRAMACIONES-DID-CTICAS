export const metadata = {
  title: "Revisor de Programaciones Didácticas",
  description: "Aplicación para revisar programaciones didácticas de certificados profesionales"
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
