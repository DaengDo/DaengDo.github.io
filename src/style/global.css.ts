import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./globalTheme.css";

globalStyle("body", { margin: 0 });

globalStyle("body *", {
  fontFamily: "system-ui",
  boxSizing: "border-box",
});

globalStyle("#root", {
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  width: "100vw",
  backgroundColor: vars.color.primary,
});
