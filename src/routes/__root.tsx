import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { useLocalService } from "../useLocalService";

const RootComponent = () => {
  useLocalService();

  return (
    <div style={{ backgroundColor: "#ECEDF1" }}>
      <div>뜨개뜨개</div>

      <hr />

      <Outlet />
      {import.meta.env.DEV && <TanStackRouterDevtools />}
    </div>
  );
};

export const Route = createRootRoute({
  component: RootComponent,
});
