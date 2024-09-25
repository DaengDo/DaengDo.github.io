import { useEffect } from "react";

import { DARK_MODE } from "./style/globalTheme.css";

const useTheme = () => {
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = (isDarkMode: boolean) => {
      console.log("isDarkMode :", isDarkMode);
      if (isDarkMode) {
        document.body.classList.add(DARK_MODE);
      } else {
        document.body.classList.remove(DARK_MODE);
      }
    };

    // 초기 테마 적용
    applyTheme(darkModeMediaQuery.matches);

    // 다크 모드 변경 감지
    const handleChange = (e: MediaQueryListEvent) => applyTheme(e.matches);
    darkModeMediaQuery.addEventListener("change", handleChange);
    return () => darkModeMediaQuery.removeEventListener("change", handleChange);
  }, []);
};

export { useTheme };
