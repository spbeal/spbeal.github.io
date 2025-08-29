import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "SurgeV",
      content: "Developing a business website",
      datePosted: "2025-02-28",
      link: "surgev",
    },
    {
      id: 2,
      title: "Trading Bots",
      content: "Building automated trading bots using AWS, Python, and ML.",
      datePosted: "2025-08-28",
      link: "trading-bots",
    },
  ];
  const sortedPosts = [...posts].sort((a, b) => new Date(b.datePosted) - new Date(a.datePosted));
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredPosts = sortedPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen pt-32">
      <Helmet>
        <title>Blog - Samuel</title>
      </Helmet>
      <div className="flex flex-col items-center w-full">
        <div className="max-w-4xl w-full p-6">
        <div className="pb-8 text-center">
        <p className="text-5xl font-extrabold inline-block leading-tight border-b-4 border-pink-600 pb-2 
               drop-shadow-lg">            My Blog
          </p>
        </div>
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search blog posts..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full p-3 text-lg border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-600"
            />
          </div>
          <div className="space-y-6">
            {currentPosts.length > 0 ? (
              currentPosts.map((post) => (
                <div
                  key={post.id}
                  className="flex flex-col items-start bg-gray-200 shadow-lg rounded-lg p-6 hover:bg-gray-100 transition-colors"
                >
                  <h2 className="text-2xl font-bold text-gray-900 hover:text-pink-600 transition-colors">
                    <Link to={post.link}>{post.title}</Link>
                  </h2>
                  <p className="text-sm text-gray-500 mt-2">
                    Posted on: {new Date(post.datePosted).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <p className="text-gray-700 mt-3">{post.content}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No posts found</p>
            )}
          </div>
          <p className="w-32 text-xl font-bold border-b-4 border-pink-600 my-6">Total posts: {posts.length}</p>
          <div className="flex justify-center space-x-2 mt-8">
            {filteredPosts.length > postsPerPage && (
              <>
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-gray-400 rounded-md text-sm disabled:opacity-50 transition-opacity"
                >
                  Previous
                </button>
                {Array.from({ length: Math.ceil(filteredPosts.length / postsPerPage) }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => paginate(index + 1)}
                    className={`px-4 py-2 border border-gray-400 rounded-md text-sm ${currentPage === index + 1 ? "bg-pink-600 text-white" : ""} transition-colors`}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === Math.ceil(filteredPosts.length / postsPerPage)}
                  className="px-4 py-2 border border-gray-400 rounded-md text-sm disabled:opacity-50 transition-opacity"
                >
                  Next
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
