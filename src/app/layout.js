import "./globals.css";

export const metadata = {
  title: "Atqiya's Portfolio",
  description: "Sharing my projects in ui/ux design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="font-sans"
      >
        {children}
      </body>
    </html>
  );
}
