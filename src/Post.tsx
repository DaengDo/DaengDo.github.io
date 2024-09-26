import { useLoaderData } from "@tanstack/react-router";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { InitialConfigType, LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";

import { AutoSavePlugin } from "./editorPlugins/AutoSavePlugin";
import { AutoLoadPlugin } from "./editorPlugins/AutoLoadPlugin";
import { ToolbarPlugin } from "./editorPlugins/ToolbarPlugin";

import { editorContainer, editorSpace } from "./style/post.css";
import { editorParagrah } from "./style/editorTheme.css";

const Post = () => {
  const initialConfig = {
    namespace: "MyEditor",
    theme: {
      paragraph: editorParagrah,
    },
    onError: console.error,
  } satisfies InitialConfigType;

  const { content } = useLoaderData({ from: "/post/$postId" });

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <HistoryPlugin />
      <AutoFocusPlugin />
      <AutoLoadPlugin />
      <AutoSavePlugin />

      <ToolbarPlugin />
      <RichTextPlugin
        contentEditable={
          <div className={editorContainer}>
            <ContentEditable className={editorSpace} defaultValue={content} spellCheck={false} />
          </div>
        }
        ErrorBoundary={LexicalErrorBoundary}
      />
    </LexicalComposer>
  );
};

export { Post };
