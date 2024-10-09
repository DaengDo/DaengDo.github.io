import { Link, useLoaderData } from "@tanstack/react-router";

import { CUSTOM_EVENT } from "../constants/customEvent";
import { backToList, toolbar } from "./toolbarPlugin.css";

const ToolbarPlugin = () => {
  const { image } = useLoaderData({ from: "/post/$postId" });

  const handlePhotoClick = () =>
    window.dispatchEvent(
      new CustomEvent(CUSTOM_EVENT.DIALOG_PHOTO, {
        detail: { src: image, description: "post thumbnail", title: "header image" },
      }),
    );

  return (
    <div className={toolbar}>
      <Link to="/posts" className={backToList}>
        {"<"} 메모
      </Link>

      <button type="button" onClick={handlePhotoClick}>
        photo
      </button>
    </div>
  );
};

export { ToolbarPlugin };
