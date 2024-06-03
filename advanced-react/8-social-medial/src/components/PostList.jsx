import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../context-store/post-list-store/post-list-store";
import EmptyMessage from "./EmptyMessage";
import Loading from "./Loading";

const PostList = () => {
  const { postList, addInitPosts } = useContext(PostListContext);
  // const [datafetched, setDataFetched] = useState(false);
  // if (!datafetched) {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitPosts(data.posts);
  //     });
  //   setDataFetched(true);
  // }

  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    
    
    fetch("https://dummyjson.com/posts",{signal})
      .then((res) => res.json())
      .then((data) => {
        addInitPosts(data.posts);
        setFetching(false);
        
      });
    return ()=>{
      console.log("cleaning up useeffect");
      controller.abort();
    }
    
  }, []);

  return (
    <>
    {fetching && <Loading/>}
      {!fetching && postList.length === 0 && <EmptyMessage />}
      {!fetching && postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export default PostList;
