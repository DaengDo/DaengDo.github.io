import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { useTheme } from "../useTheme";
import { useLocalService } from "../useLocalService";

const RootComponent = () => {
  useLocalService();
  useTheme();

  return (
    <>
      <div>뜨개뜨개</div>

      <hr />

      <Outlet />
      {import.meta.env.DEV && <TanStackRouterDevtools />}
    </>
  );
};

export const Route = createRootRoute({
  component: RootComponent,
});
