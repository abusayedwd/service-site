import React from "react";
import "../styles/tailwind.css";
import "../styles/index.css";
import "../styles/font.css";

export const metadata = {
  title: "Service Website",
  description: "Service Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
