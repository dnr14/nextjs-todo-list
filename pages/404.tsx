import { Button } from "@components/Button";
import { Text } from "@components/Text";
import Link from "next/link";
import React from "react";
import { styled } from "../stitches.config";

const NotFoundWrapper = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px 0",
  flexDirection: "column",
});

export default function notFount() {
  return (
    <NotFoundWrapper>
      <Text>없는 TODO 페이지입니다.</Text>
      <Button>
        <Link href={"/"}>돌아가기</Link>
      </Button>
    </NotFoundWrapper>
  );
}
