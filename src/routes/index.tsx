import { createFileRoute, redirect } from "@tanstack/react-router";
import { Main } from "../Main";

const isPWA = () => window.matchMedia("(display-mode: standalone)").matches;

export const Route = createFileRoute("/")({
  component: Main,
  beforeLoad() {
    if (isPWA()) throw redirect({ to: "/posts" });
  },
});
