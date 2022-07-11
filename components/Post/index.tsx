import { styled } from "@stitches/react";
import { Text } from "@components/Text";

interface PostProps {
  id: number;
  content: string;
}

export function Post({ content, id }: PostProps) {
  return (
    <TodoWrapper>
      {id}. <Text margin={"0"}>{content}</Text>
    </TodoWrapper>
  );
}

const TodoWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: 10,
  margin: "5px 0",
});
