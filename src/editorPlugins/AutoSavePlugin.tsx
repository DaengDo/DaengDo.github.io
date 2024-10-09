import { useEffect } from "react";
import { useLoaderData } from "@tanstack/react-router";
import { $getRoot } from "lexical";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

import { debounce, getPost, updatePost } from "../utils";

const AutoSavePlugin = () => {
  const [editor] = useLexicalComposerContext();

  const post = useLoaderData({ from: "/post/$postId" });

  useEffect(() => {
    const savePost = ({ title, content }: { title: string; content: string }) =>
      getPost({ id: post.id }).then((prev) => updatePost({ ...prev, title, content }));

    const debouncedUpdate = debounce(savePost, 200);

    editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        const title = $getRoot().getTextContent().split("\n")[0];
        const content = JSON.stringify(editor.toJSON().editorState);

        debouncedUpdate({ title, content });
      });
    });
  }, [editor, post]);

  return null;
};

export { AutoSavePlugin };
