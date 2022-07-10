import type { NextPage } from "next";
import { Title, Text } from "@components/index";
import React, { useEffect, useState } from "react";
import { styled } from "@stitches/react";
import usePosts from "../fetchers/usePosts";

interface Todo {
  id: number;
  content: string;
}

interface HomeProps {
  todos: Todo[];
}

const timeStamp = () => {
  const today = new Date();
  today.setHours(today.getHours() + 9);
  return today.toISOString().replace("T", " ").substring(0, 19);
};

const Home: NextPage<HomeProps> = ({ todos }) => {
  const [time, setTime] = useState<string>(timeStamp());

  const { posts, isError, isLoading } = usePosts<Todo[]>();

  useEffect(() => {
    const timer = setInterval(() => setTime(timeStamp()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (isLoading) return <div>...loading</div>;
  if (isError) return <div>error</div>;

  return (
    <TodoContainer>
      <Title text={`현재 시간 : ${time}`} />
      <Title text="오늘의 할 일" />
      {posts &&
        posts.map(({ content, id }, idx) => (
          <TodoWrapper key={id}>
            {idx + 1}. <Text margin={"0"}>{content}</Text>
          </TodoWrapper>
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

const TodoWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: 10,
  margin: "5px 0",
});

export const getStaticProps = async () => {
  // fetch 실패 시 에러 처리를 해야된다.
  const res = await fetch("http://localhost:4300/todos");
  const todos = await res.json();

  return { props: { todos } };
};

export default Home;
