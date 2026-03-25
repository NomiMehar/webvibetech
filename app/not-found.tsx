import { Button } from "@/components/Button/Button";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "grid",
        placeItems: "center",
        padding: "4rem 1.5rem",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "28rem" }}>
        <p
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#8a847a",
            marginBottom: "0.75rem",
          }}
        >
          404
        </p>
        <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 600, margin: 0 }}>
          This page drifted offline.
        </h1>
        <p style={{ marginTop: "1rem", color: "#5c5852", lineHeight: 1.6 }}>
          The route you wanted isn&apos;t here—try home or a service stream below.
        </p>
        <div style={{ marginTop: "2rem", display: "flex", gap: "0.75rem", justifyContent: "center" }}>
          <Button href="/" variant="primary">
            Back home
          </Button>
          <Button href="/services/ai-automation" variant="secondary">
            AI &amp; Automation
          </Button>
        </div>
      </div>
    </div>
  );
}
