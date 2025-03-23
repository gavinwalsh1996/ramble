"use client";

import { AuthProvider } from "../context/AuthContext";
// import "@/styles/globals.css";
import GlobalStyles from "@/styles/GlobalStyles";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Inter', sans-serif" }}>
        <AuthProvider>
          <GlobalStyles />
          <main className="p-4 max-w-2xl mx-auto">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
