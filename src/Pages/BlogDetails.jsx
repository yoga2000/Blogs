import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import UseFetch from "../Hooks/UseFetch";
import { URL } from "../assets/helper";
import Header from "../Components/Header";
import Loading from "../Components/Loading";

const BlogDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, loading } = UseFetch(URL + id);

  const handleDelete = () => {
    fetch(URL + id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Header />
      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              <span>Author : </span> {data.author}
            </h2>
            <h1 className=" text-gray-500 mt-4 md:block">
              Title: {data.title}
            </h1>
            <p className=" text-base text-gray-500 my-8 md:mt-4 md:block">
              {data.description}
            </p>
            <div className="mt-4 flex gap-4 items-center justify-center md:mt-8">
              <button
                onClick={handleDelete}
                className="inline-block rounded bg-emerald-600 px-12 py-3 text font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Delete
              </button>
              <Link
                to={`/update/${id}`}
                className="inline-block rounded bg-emerald-600 px-12 py-3 text font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Edit
              </Link>
              <button></button>
            </div>
          </div>
        </div>

        <img
          alt={data.image}
          src={data.image}
          className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
        />
      </section>
    </>
  );
};

export default BlogDetails;
