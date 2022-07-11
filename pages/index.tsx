import type { NextPage } from "next";
import { Title, Post } from "@components/index";
import { useEffect, useState } from "react";
import { styled } from "@stitches/react";
import usePosts from "../fetchers/usePosts";

interface Todo {
  id: number;
  content: string;
}

const timeStamp = () => {
  const today = new Date();
  today.setHours(today.getHours() + 9);
  return today.toISOString().replace("T", " ").substring(0, 19);
};

const Home: NextPage = () => {
  const [time, setTime] = useState<string>(timeStamp());

  const { posts, isError, isLoading } = usePosts<Todo[]>();

  useEffect(() => {
    const timer = setInterval(() => setTime(timeStamp()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!posts || isLoading) return <div>...loading</div>;
  if (isError) return <div>error</div>;

  return (
    <TodoContainer>
      <Title text={`현재 시간 : ${time}`} />
      <Title text="오늘의 할 일" />
      {posts.map((post, idx) => (
        <Post key={idx} {...post} />
      ))}
    </TodoContainer>
  );
};

const TodoContainer = styled("section", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export default Home;
