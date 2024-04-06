import React, { useState } from "react";
import { URL } from "../assets/helper";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim() || !description.trim()) {
      alert("Please fill in all fields");
      return;
    }
    const newBlog = { title, author, description };
    fetch(URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newBlog),
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("response not ok from creating a blog");
        } else {
          return res.json();
        }
      })
      .catch((err) => console.log(err));
    setAuthor("");
    setTitle("");
    setDescription("");
    navigate("/");
  };

  return (
    <div className="h-screen  flex flex-1 bg-gray-500 justify-center items-center">
      <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl text-center font-semibold mb-4">
          Create Your Blog
        </h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Title</label>
            <input
              value={title}
              type="text"
              className="w-full capitalize px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Author</label>
            <input
              value={author}
              type="text"
              className="w-full  px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Author"
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              id="message"
              rows="4"
              className="w-full  px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Add a Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
