import { useEffect, useRef } from "react";
import { useLoaderData } from "@tanstack/react-router";
import { $getRoot } from "lexical";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

const AutoLoadPlugin = () => {
  const [editor] = useLexicalComposerContext();
  const post = useLoaderData({ from: "/post/$postId" });
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!isFirstRender.current) return;

    editor.update(() => {
      const root = $getRoot();

      if (post.content === "") {
        editor.focus();
        root.selectEnd();
        return;
      }

      // 에디터 상태 로드
      const data = JSON.parse(post.content);
      const initialEditorState = editor.parseEditorState(data);
      editor.setEditorState(initialEditorState);

      // 커서 위치 조정
      root.getLastDescendant()?.selectEnd();

      isFirstRender.current = false;
    });
  }, [editor, post]);

  return null;
};

export { AutoLoadPlugin };
