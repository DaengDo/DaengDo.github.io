import { style } from "@vanilla-extract/css";
import { vars } from "../style/globalTheme.css";

const toolbar = style({
  display: "flex",
  padding: "10px",
  fontSize: "20px",
});

const backToList = style({
  textDecoration: "none",
  color: vars.color.info,
});

export { toolbar, backToList };
