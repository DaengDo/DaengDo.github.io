import {
  createGlobalTheme,
  createGlobalThemeContract,
  // createTheme, // 개별 태마를 관리할 때 사용하는 api
  // createThemeContract, // 개별 테마의 타입 안정성을 위한 api
} from "@vanilla-extract/css";

const vars = createGlobalThemeContract({
  color: {
    background: "background",

    primary: "primary",
    secondary: "secondary",

    text: "text",
    info: "info",
    warn: "warn",
    placeholder: "placeholder",

    scrollbar: "scrollbar",
    shadow: "shadow",
  },
  spacing: {
    small: "small",
    medium: "medium",
    large: "large",
  },
});

const commonSpacing = {
  small: "8px",
  medium: "16px",
  large: "32px",
};

const DARK_MODE = "dark-mode";

// white mode
createGlobalTheme(":root", vars, {
  color: {
    background: "rgb(255, 255, 255)",

    primary: "rgb(243, 242, 248)",
    secondary: "rgb(233, 233, 233)",

    text: "rgb(0, 0, 0)",
    info: "rgb(230, 176, 18)",
    warn: "rgb(255, 61, 47)",
    placeholder: "rgb(166, 169, 177)",

    scrollbar: "rgb(102, 102, 102)",
    shadow: "rgb(206, 206, 206)",
  },

  spacing: commonSpacing,
});

// dark mode
createGlobalTheme(`.${DARK_MODE}`, vars, {
  color: {
    background: "rgb(255, 255, 255)",

    primary: "rgb(244, 244, 244)",
    secondary: "rgb(233, 233, 233)",

    text: "rgb(0, 0, 0)",
    info: "rgb(220, 220, 220)",
    warn: "rgb(230, 20, 20)",
    placeholder: "rgb(166, 169, 177)",

    scrollbar: "rgb(102, 102, 102)",
    shadow: "rgb(206, 206, 206)",
  },

  spacing: commonSpacing,
});

export { vars, DARK_MODE };
