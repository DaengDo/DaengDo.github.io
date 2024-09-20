import { useEffect } from "react";
import { useLoaderData } from "@tanstack/react-router";
import { $createParagraphNode, $createTextNode, $getRoot } from "lexical";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

const AutoLoadPlugin = () => {
  const [editor] = useLexicalComposerContext();
  const post = useLoaderData({ from: "/post/$postId" });

  useEffect(() => {
    editor.update(() => {
      const root = $getRoot();
      root.clear();

      const paragraphNode = $createParagraphNode();
      const textNode = $createTextNode(post.content);
      paragraphNode.append(textNode);
      root.append(paragraphNode);
    });
  }, [editor, post]);

  return null;
};

export { AutoLoadPlugin };
