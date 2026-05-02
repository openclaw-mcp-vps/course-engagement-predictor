import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Course Engagement Predictor — Predict Student Dropout Early",
  description: "Analyze student behavior patterns in your LMS to identify at-risk students and suggest intervention strategies before they drop out."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1ddc144b-a915-4dcd-bfba-1beed90b6e20"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
