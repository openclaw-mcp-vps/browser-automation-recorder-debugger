import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AutoRec — Record, Generate & Debug Browser Automation Scripts",
  description: "Record browser actions and generate debuggable automation scripts with AI-powered failure analysis. Built for QA engineers and automation testers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a58d1542-e0f6-4b09-92b3-72c5825edbf2"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
