import { Link } from "@tanstack/react-router";
import { backToList, toolbar } from "./toolbarPlugin.css";

const ToolbarPlugin = () => {
  return (
    <div className={toolbar}>
      <Link to="/posts" className={backToList}>
        {"<"} 메모
      </Link>
    </div>
  );
};

export { ToolbarPlugin };
