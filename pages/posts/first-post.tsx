import { CSSProperties, styled } from "@stitches/react";
import { useRouter } from "next/router";
import { FC, useCallback } from "react";

import { Button } from "../../components/index";

interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

type FirstPostProps = {
  posts: Post[];
};

const Container = styled("section", {
  padding: "100px",
});

const FirstPost: FC<FirstPostProps> = ({ posts }) => {
  const _posts = posts.slice(0, 20);
  const { back } = useRouter();

  const handleBackup = useCallback(() => back(), [back]);

  const styled: CSSProperties = {
    fontSize: "2rem",
    marginBottom: "2rem",
  };

  return (
    <Container>
      <Button onClick={handleBackup}>돌아가기</Button>
      <h1>First Post</h1>
      <div>pre-fetching</div>
      {_posts.map(({ id, title, body }) => (
        <div key={id}>
          <div style={styled}>title : {title}</div>
          <div>body : {body}</div>
        </div>
      ))}
    </Container>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: { posts },
  };
};

export default FirstPost;
