import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "#021526",
          color: "#f4efe4",
          padding: 72,
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#e4c36a",
          }}
        >
          Kean University · Union, NJ
        </div>
        <div style={{ fontSize: 64, lineHeight: 1.05, marginTop: 24 }}>
          Kean CS Lab
        </div>
        <div style={{ fontSize: 28, marginTop: 20, color: "#9bb0c4" }}>
          Kean University
        </div>
      </div>
    ),
    size,
  );
}
