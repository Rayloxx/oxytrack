import type { Metadata } from "next";
import "./globals.css";
import { TelemetryProvider } from '@/components/network/TelemetrySync';

export const metadata: Metadata = {
  title: "OxyTrack Technologies",
  description:
    "Hospital oxygen infrastructure intelligence platform for real-time pressure, flow, telemetry, and predictive maintenance.",
  icons: {
    icon: "/logo/oxytrack-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#020617] text-white antialiased">
  <TelemetryProvider>
    {children}
  </TelemetryProvider>
</body>
    </html>
  );
}
