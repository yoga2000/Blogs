import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="border-b-2 border-slate-500 shadow-sm">
      <div className="mx-auto max-w-screen-xl px-4  sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600" to="/">
              <h1>Blogs</h1>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-4">
              <Link
                className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                to="/create"
              >
                Create a new Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
