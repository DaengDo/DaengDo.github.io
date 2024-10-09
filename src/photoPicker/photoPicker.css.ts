import { style } from "@vanilla-extract/css";

const dialogOverlay = style({
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  position: "fixed",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const dialogContent = style({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "16px",
});

const dialogImg = style({
  width: "fit-content",
  maxWidth: "80vw",
  maxHeight: "80vh",
});

export { dialogOverlay, dialogContent, dialogImg };
