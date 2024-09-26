import { style } from "@vanilla-extract/css";
import { vars } from "./globalTheme.css";

const editorContainer = style({
  padding: "0 20px",
  flexBasis: 0,
  flexGrow: 1,

  display: "flex",
  flexDirection: "column",
});

const editorSpace = style({
  flexBasis: 0,
  flexGrow: 1,
  outline: "none",
  backgroundColor: vars.color.background,
  borderRadius: "16px",
  padding: "5px",
});

export { editorContainer, editorSpace };
