import { useEffect } from "react";
import { useLoaderData } from "@tanstack/react-router";
import { $getRoot } from "lexical";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

import { debounce, updatePost } from "../utils";

const AutoSavePlugin = () => {
  const [editor] = useLexicalComposerContext();

  const post = useLoaderData({ from: "/post/$postId" });

  useEffect(() => {
    const debouncedUpdate = debounce(updatePost, 200);

    editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        const postToSave = {
          ...post,
          title: $getRoot().getTextContent().split("\n")[0],
          content: JSON.stringify(editor.toJSON().editorState),
        };

        debouncedUpdate(postToSave);
      });
    });
  }, [editor, post]);

  return null;
};

export { AutoSavePlugin };
