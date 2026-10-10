import { ImageResponse } from "next/og";

export const alt = "Brandon.dev — diseño y desarrollo web";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BEZEL = "#141312";
const PANEL = "#1D1D1A";
const HAIRLINE = "rgba(255,255,255,0.06)";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: BEZEL,
          padding: 44,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            gap: 22,
            background: PANEL,
            border: `1px solid ${HAIRLINE}`,
            borderRadius: 30,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 92,
              height: 92,
              borderRadius: 26,
              background: BEZEL,
              color: "#f8f8f4",
              fontSize: 64,
              fontWeight: 600,
              letterSpacing: "-0.08em",
            }}
          >
            B<span style={{ color: "#5bd79c", fontSize: 34 }}>.</span>
          </div>
          <div
            style={{
              display: "flex",
              color: "#f8f8f4",
              fontSize: 64,
              fontWeight: 600,
              letterSpacing: "-0.07em",
            }}
          >
            Brandon.dev
          </div>
          <div
            style={{
              display: "flex",
              color: "#c2c2ba",
              fontSize: 25,
            }}
          >
            Diseño y desarrollo web a medida
          </div>
        </div>
      </div>
    ),
    size,
  );
}
