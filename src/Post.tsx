import { useLoaderData } from "@tanstack/react-router";

import { CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { ListNode, ListItemNode } from "@lexical/list";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableNode, TableCellNode, TableRowNode } from "@lexical/table";
import { HorizontalRuleNode } from "@lexical/react/LexicalHorizontalRuleNode";

import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { InitialConfigType, LexicalComposer } from "@lexical/react/LexicalComposer";

import { AutoSavePlugin } from "./editorPlugins/AutoSavePlugin";
import { AutoLoadPlugin } from "./editorPlugins/AutoLoadPlugin";
import { ToolbarPlugin } from "./editorPlugins/ToolbarPlugin";

import { editorContainer, editorSpace } from "./style/post.css";
import { editorParagrah } from "./style/editorTheme.css";

const Post = () => {
  const initialConfig = {
    namespace: "MyEditor",
    nodes: [
      LinkNode,
      AutoLinkNode,
      ListNode,
      ListItemNode,
      TableNode,
      TableCellNode,
      TableRowNode,
      HorizontalRuleNode,
      CodeNode,
      HeadingNode,
      LinkNode,
      ListNode,
      ListItemNode,
      QuoteNode,
    ],
    theme: {
      paragraph: editorParagrah,
    },
    onError: console.error,
  } satisfies InitialConfigType;

  const { content } = useLoaderData({ from: "/post/$postId" });

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <HistoryPlugin />
      <AutoLoadPlugin />
      <AutoSavePlugin />
      <MarkdownShortcutPlugin />

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
