import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Alessandro Iacovelli";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <p style={{ color: "#71717a", fontSize: 20, letterSpacing: 6, textTransform: "uppercase", margin: 0 }}>
          Portfolio
        </p>
        <h1 style={{ color: "#ffffff", fontSize: 80, fontWeight: 700, margin: "16px 0 0 0", letterSpacing: -2 }}>
          Alessandro Iacovelli
        </h1>
        <p style={{ color: "#a1a1aa", fontSize: 28, margin: "16px 0 0 0", fontWeight: 300 }}>
          Front End Developer
        </p>
        <p style={{ color: "#3f3f46", fontSize: 20, margin: "48px 0 0 0", letterSpacing: 2 }}>
          alessandroiacovelli.it
        </p>
      </div>
    ),
    { ...size }
  );
}
