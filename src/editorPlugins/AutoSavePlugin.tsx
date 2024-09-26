import { useEffect } from "react";
import { useLoaderData } from "@tanstack/react-router";
import { $getRoot } from "lexical";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

import { updatePost } from "../utils";

const AutoSavePlugin = () => {
  const [editor] = useLexicalComposerContext();

  const post = useLoaderData({ from: "/post/$postId" });

  useEffect(() => {
    const saveAutomatically = () => {
      console.log("이게 두 번 호출된다고?");
      editor.read(() => updatePost({ ...post, content: $getRoot().getTextContent() }));
    };

    window.addEventListener("beforeunload", saveAutomatically);

    return () => {
      window.removeEventListener("beforeunload", saveAutomatically);
      saveAutomatically();
    };
  }, [editor, post]);

  return null;
};

export { AutoSavePlugin };
