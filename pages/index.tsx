import type { NextPage } from "next";
import { theme } from "../stitches.config";
import { Title, Text, Input } from "@components/index";

const Home: NextPage = () => {
  return (
    <div className={theme}>
      <Title text="오늘의 할 일" />
      {Array.from({ length: 5 }, (_, idx) => (
        <Text key={idx}>{`넥스트js공부하기 ${idx + 1}`}</Text>
      ))}
      <Text>json mock serve 뛰우기</Text>
      <Text>스티치 공부하기</Text>
    </div>
  );
};

export default Home;
