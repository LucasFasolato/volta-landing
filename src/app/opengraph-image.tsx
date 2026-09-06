import { ImageResponse } from "next/og";
export const alt = "VOLTA. Tu próximo paso, online. Store, Booking y Portfolio.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", background: "#f7f9f8", color: "#080b0a", padding: "64px 72px", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}><span style={{ fontSize: 32, fontWeight: 700, letterSpacing: -1 }}>VOLTA</span><span style={{ width: 10, height: 10, background: "#00e878", borderRadius: 10 }} /></div>
      <div style={{ display: "flex", flexDirection: "column", marginTop: 64, fontSize: 88, lineHeight: 1.03, fontWeight: 700, letterSpacing: -5 }}><span>Tu próximo</span><div style={{ display: "flex", gap: 22 }}>paso,<span style={{ background: "#00e878", padding: "0 12px 8px" }}>online.</span></div></div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "auto", paddingTop: 28, borderTop: "1px solid #dde2e0", fontSize: 22, color: "#47524d" }}><span>Productos y tecnología, con propósito.</span><span>Store · Booking · Portfolio</span></div>
      <div style={{ display: "flex", position: "absolute", right: 80, top: 182, width: 120, height: 160, border: "2px solid #dde2e0", transform: "skewY(-8deg)" }} /><div style={{ display: "flex", position: "absolute", right: 50, top: 156, width: 120, height: 160, background: "#00e878", transform: "skewY(-8deg)" }} />
    </div>, size,
  );
}
