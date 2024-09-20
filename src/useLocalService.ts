import { useEffect } from "react";

const useLocalService = () => {
  useEffect(() => {
    if (!("serviceWorker" in window.navigator)) return;

    window.navigator.serviceWorker
      .register(new URL(import.meta.env.DEV ? "./serviceWorker" : "./serviceWorker.js", import.meta.url))
      .then((registration) => console.log("연결됨", registration))
      .catch((error) => console.log("Service Worker registration failed:", error));
  }, []);
};

export { useLocalService };
