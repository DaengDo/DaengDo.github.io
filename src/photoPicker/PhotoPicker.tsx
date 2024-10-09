import { useEffect, useRef, useState } from "react";
import { useLoaderData } from "@tanstack/react-router";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

import { CUSTOM_EVENT } from "../constants/customEvent";
import { dialogContent, dialogImg, dialogOverlay } from "./photoPicker.css";
import { updatePost } from "../utils";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getRoot } from "lexical";

const PhotoPicker = () => {
  const initialState = { isOpen: false, src: "", description: "", title: "" };
  const [dialog, setDialog] = useState(initialState);

  const [editor] = useLexicalComposerContext();
  const post = useLoaderData({ from: "/post/$postId" });

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleDialog = (e: CustomEvent<{ src: string; description: string; title: string }>) => {
      console.log(e.detail);
      const { description, src, title } = e.detail;
      setDialog({ isOpen: true, src, description, title });
    };

    window.addEventListener(CUSTOM_EVENT.DIALOG_PHOTO, handleDialog);

    return () => window.removeEventListener(CUSTOM_EVENT.DIALOG_PHOTO, handleDialog);
  }, []);

  const handleOpenChange = (open: boolean) => {
    if (open) return;
    // if (dialog.onClose) dialog.onClose();
    setDialog(initialState);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      const base64 = e.target?.result as string;
      setDialog((prev) => ({ ...prev, src: base64 }));

      editor.read(() =>
        updatePost({
          ...post,
          title: $getRoot().getTextContent().split("\n")[0],
          content: JSON.stringify(editor.toJSON().editorState),
          image: base64,
        }),
      );
    };

    reader.readAsDataURL(file); // 파일을 Base64로 인코딩
  };

  return (
    <Dialog.Root open={dialog.isOpen} onOpenChange={handleOpenChange}>
      <Dialog.Overlay className={dialogOverlay}>
        <VisuallyHidden.Root>
          <Dialog.Title>{dialog.title}</Dialog.Title>
          <Dialog.Description>{dialog.description}</Dialog.Description>
          <input type="file" accept="image/*" ref={inputRef} onChange={handleChange} />
        </VisuallyHidden.Root>

        <Dialog.Content className={dialogContent}>
          <img className={dialogImg} src={dialog.src} />
          <button type="button" onClick={() => inputRef.current?.click()}>
            사진 변경
          </button>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Root>
  );
};

export { PhotoPicker };
