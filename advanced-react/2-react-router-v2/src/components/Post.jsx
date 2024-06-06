import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { PostListContext } from "../context-store/post-list-store/post-list-store";
const Post = ({ post }) => {
   const{deletePost}= useContext(PostListContext);
    return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title ">
          {post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" 
          onClick={()=>{deletePost(post.id)}}
          >
            <MdDeleteForever className="fs-5" />
          </span>
        </h5>
        <hr />
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-success mx-1">{tag}</span>
        ))}
        <hr/>
        <div className="badge text-bg-info">{post.reactions.likes} likes</div>

      </div>
    </div>
  );
};
export default Post;
