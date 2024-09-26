import { createFileRoute } from "@tanstack/react-router";

import { Post } from "../Post";

import { addPost, convertImgToBase64, getPost, getVoidPost } from "../utils";

import DEFAULT_IMG from "../assets/apple-touch-icon-57x57.png";

export const Route = createFileRoute("/post/$postId")({
  component: Post,

  loader: async ({ params: { postId } }) => {
    const id = Number(postId);

    if (Number.isNaN(id))
      return addPost(
        getVoidPost({
          title: "새 포스트",
          image: await convertImgToBase64(DEFAULT_IMG),
        }),
      );

    const post = await getPost({ id });
    return post;
  },
});
