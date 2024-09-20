import { createFileRoute, Link } from "@tanstack/react-router";

import { formatDate, getPostList } from "../utils";

const PostListComponent = () => {
  const posts = Route.useLoaderData();
  // const a = Route.useSearch();
  console.log(posts);

  return (
    <>
      <Link to="/post/$postId" params={{ postId: "create" }}>
        새 포스트 만들기
      </Link>

      <hr />

      <ul style={{ display: "flex", flexDirection: "column", padding: "0 40px", gap: "10px" }}>
        {posts.map(({ id, title, image, dateByCreate }) => (
          <li style={{ listStyleType: "none", padding: 0, margin: 0 }} key={id}>
            <Link style={{ display: "flex", gap: "10px" }} to="/post/$postId" params={{ postId: id.toString() }}>
              {image && <img style={{ objectFit: "contain" }} src={image} />}
              <div>
                <p>{formatDate(dateByCreate)}</p>
                <p>{title}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export const Route = createFileRoute("/posts")({
  loader: () => getPostList(),

  component: PostListComponent,
});
