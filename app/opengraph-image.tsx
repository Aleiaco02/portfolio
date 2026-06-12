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
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28 28"
          fill="none"
          width="320"
          height="320"
        >
          <rect width="28" height="28" rx="6" fill="#000000" />
          <polygon
            points="14,3 24,8.5 24,19.5 14,25 4,19.5 4,8.5"
            strokeWidth="1"
            fill="none"
            strokeLinejoin="round"
            stroke="#ffffff"
          />
          <line x1="9" y1="20" x2="14" y2="9" strokeWidth="1.6" strokeLinecap="round" stroke="#ffffff" />
          <line x1="19" y1="20" x2="14" y2="9" strokeWidth="1.6" strokeLinecap="round" stroke="#ffffff" />
          <line x1="11" y1="16" x2="17" y2="16" strokeWidth="1.6" strokeLinecap="round" stroke="#ffffff" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
