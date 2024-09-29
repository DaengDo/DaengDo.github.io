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
      editor.read(() => {
        updatePost({
          ...post,
          title: $getRoot().getTextContent().split("\n")[0],
          content: JSON.stringify(editor.toJSON().editorState),
        });
      });
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
