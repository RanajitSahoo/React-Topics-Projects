import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../context-store/post-list-store/post-list-store";
import EmptyMessage from "./EmptyMessage";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const postList = useLoaderData();
  // const [datafetched, setDataFetched] = useState(false);
  // if (!datafetched) {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitPosts(data.posts);
  //     });
  //   setDataFetched(true);
  // }

  return (
    <>
      
      { postList.length === 0 && <EmptyMessage />}
      { postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};
export default PostList;
