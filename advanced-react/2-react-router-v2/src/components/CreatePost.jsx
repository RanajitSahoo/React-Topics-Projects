import { useContext } from "react";
import { PostListContext } from "../context-store/post-list-store/post-list-store";
import { Form, redirect, useActionData } from "react-router-dom";

const CreatePost = () => {
 

  return (
    <Form className="create-post" method="POST" >
      <div className="mb-3">
        <label htmlFor="user-id" className="form-label">
          User ID
        </label>
        <input
          type="text"
          className="form-control"
          id="user-id"
          name="userId"
          placeholder="your user id.."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          placeholder="How are you feeling today..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Description
        </label>
        <textarea
          type="text"
          className="form-control"
          id="body"
          name="body"
          rows="4"
          placeholder="Tell us more about it..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of Reactions
        </label>
        <input
          type="text"
          className="form-control"
          id="reactions"
          name="reactions"
          placeholder="How many people reacted to this."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          name="tags"
          placeholder="Enter your tags using spaces"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </Form>
  );
};

export const createPostAction = async (data) => {
  const formData =await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ")
  
   fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then( (resObj) => {
     console.log(resObj);
    
    });
    return redirect("/")
};

export default CreatePost;
