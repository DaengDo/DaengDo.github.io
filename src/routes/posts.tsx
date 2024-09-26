import { createFileRoute, Link, useRouter } from "@tanstack/react-router";

import { deletePost, formatDate, getPostList } from "../utils";

const PostListComponent = () => {
  const posts = Route.useLoaderData();
  const router = useRouter();

  const handleDeleteClick = (id: number) => (e: React.MouseEvent) => {
    e.preventDefault();
    deletePost(id).then(router.invalidate);
  };

  return (
    <>
      <Link to="/post/$postId" params={{ postId: "create" }}>
        새 포스트 만들기
      </Link>

      <hr />

      <ul style={{ display: "flex", flexDirection: "column", padding: "0 40px", gap: "10px" }}>
        {posts.map(({ content, id, image, dateByEdit }) => (
          <li style={{ listStyleType: "none", padding: 0, margin: 0, width: "fit-content" }} key={id}>
            <Link
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(200,200,200, 0.5)",
              }}
              to="/post/$postId"
              params={{ postId: id.toString() }}
            >
              {image && <img style={{ objectFit: "contain" }} src={image} />}
              <div>
                <p>{formatDate(dateByEdit)}</p>
                <p>{content.split("\n")[0]}</p>
              </div>

              <button
                style={{
                  padding: 0,
                  border: "none",
                  backgroundColor: "transparent",
                  outline: "1px solid black",
                }}
                onClick={handleDeleteClick(id)}
              >
                삭제
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export const Route = createFileRoute("/posts")({
  loader: () => getPostList().then((posts) => posts.sort((p1, p2) => p2.dateByEdit - p1.dateByEdit)),

  component: PostListComponent,
});
