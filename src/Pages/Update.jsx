import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { URL } from "../assets/helper/";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate("/");

  const [value, setValue] = useState({
    id: "",
    title: "",
    author: "",
    description: "",
  });
  useEffect(() => {
    fetch(URL + id)
      .then((res) => {
        if (!res.ok) {
          throw Error("response not ok from updating");
        } else {
          return res.json();
        }
      })
      .then((data) =>
        setValue((prevValue) => ({
          ...prevValue,
          id: data.id,
          title: data.title,
          author: data.author,
          description: data.description,
        }))
      )
      .catch((err) => console.Error(err));
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      !value.title.trim() ||
      !value.author.trim() ||
      !value.description.trim()
    ) {
      alert("Please fill in all fields");
      return;
    }
    fetch(URL + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(value),
    })
      .then(() =>
        setValue((prev) => ({
          ...prev,
          id: "",
          author: "",
          title: "",
          description: "",
        }))
      )

      .catch((err) => console.log(err));
    navigate("/");
  };
  return (
    <div className="h-screen  flex flex-1 bg-gray-500 justify-center items-center">
      <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl text-center font-semibold mb-4">Edit</h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Title</label>
            <input
              type="text"
              className="w-full capitalize px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Title"
              value={value.title}
              onChange={(e) =>
                setValue((prev) => ({ ...prev, title: e.target.value }))
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Author</label>
            <input
              type="text"
              className="w-full  px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Author"
              value={value.author}
              onChange={(e) =>
                setValue((prev) => ({ ...prev, author: e.target.value }))
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              onChange={(e) =>
                setValue((prev) => ({ ...prev, description: e.target.value }))
              }
              value={value.description}
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
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
