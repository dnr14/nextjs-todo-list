import useSWR from "swr";

const POST_URL = "http://localhost:4300/todos";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const usePosts = <T>() => {
  const { data, error } = useSWR<T>(POST_URL, fetcher);
  return {
    posts: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default usePosts;
