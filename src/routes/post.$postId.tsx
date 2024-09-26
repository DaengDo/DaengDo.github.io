import { createFileRoute, Link } from "@tanstack/react-router";

import { PostContent } from "../PostContent";

import { addPost, convertImgToBase64, formatDate, getPost, getVoidPost } from "../utils";

import DEFAULT_IMG from "../assets/apple-touch-icon-57x57.png";

const PostComponent = () => {
  const { dateByCreate, dateByEdit, image } = Route.useLoaderData();

  return (
    <div>
      <Link to="/posts">뒤로가기</Link>
      {image && <img src={image} />}

      <p>작성일: {formatDate(dateByCreate)}</p>

      {dateByEdit !== 0 && <p>수정일: {formatDate(dateByEdit)}</p>}

      <PostContent />
    </div>
  );
};

export const Route = createFileRoute("/post/$postId")({
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

  component: PostComponent,
});
