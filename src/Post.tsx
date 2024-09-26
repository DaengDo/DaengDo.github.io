import { Link, useLoaderData } from "@tanstack/react-router";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";

import { AutoSavePlugin } from "./editorPlugins/AutoSavePlugin";
import { AutoLoadPlugin } from "./editorPlugins/AutoLoadPlugin";

const Post = () => {
  const initialConfig = {
    namespace: "MyEditor",
    // theme,
    onError: console.error,
  };

  const { content } = useLoaderData({ from: "/post/$postId" });

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <Link to="/posts">메모</Link>
      <RichTextPlugin
        contentEditable={<ContentEditable defaultValue={content} />}
        // placeholder={<div>Enter some text...</div>}
        ErrorBoundary={LexicalErrorBoundary}
      />
      <HistoryPlugin />
      <AutoFocusPlugin />
      <AutoLoadPlugin />
      <AutoSavePlugin />
    </LexicalComposer>
  );
};

export { Post };
