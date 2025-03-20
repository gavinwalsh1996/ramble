import { AuthProvider } from "../context/AuthContext";
// import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <main className="p-4 max-w-2xl mx-auto">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
