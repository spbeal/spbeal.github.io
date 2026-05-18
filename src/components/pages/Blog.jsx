import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "SurgeV",
      content: "Building and shipping an ecommerce site for a creatine gummy brand.",
      datePosted: "2025-02-28",
      link: "surgev",
    },
    {
      id: 2,
      title: "Trading Bots",
      content: "Notes from experimenting with automated trading systems, cloud tooling, and risk management.",
      datePosted: "2025-08-29",
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
    <div className="min-h-screen page-shell pt-32 pb-24">
      <Helmet>
        <title>Blog - Samuel</title>
      </Helmet>
      <div className="page-container flex flex-col items-center w-full">
        <div className="max-w-4xl w-full p-6">
          <div className="pb-8 text-center">
            <span className="section-eyebrow">Writing</span>
            <h1 className="section-title">Notes & Updates</h1>
          </div>
          <p className="section-copy mb-8 text-center leading-relaxed">
            A small collection of project write-ups, experiments, and progress updates from
            the work I am doing on the side.
          </p>
          <div className="surface-card mb-8 rounded-[24px] p-4 sm:p-5">
            <input
              type="text"
              placeholder="Search blog posts..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full rounded-2xl border border-slate-200 bg-white/90 p-4 text-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
            />
          </div>
          <div className="space-y-6">
            {currentPosts.length > 0 ? (
              currentPosts.map((post) => (
                <div
                  key={post.id}
                  className="surface-card flex flex-col items-start rounded-[26px] p-6 transition-transform hover:-translate-y-1"
                >
                  <h2 className="text-2xl font-bold text-slate-900 hover:text-pink-600 transition-colors">
                    <Link to={post.link}>{post.title}</Link>
                  </h2>
                  <p className="mt-2 text-sm text-slate-500">
                    Posted on: {new Date(post.datePosted).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <p className="mt-3 text-slate-700">{post.content}</p>
                </div>
              ))
            ) : (
              <p className="text-slate-600">No posts matched your search.</p>
            )}
          </div>
          <p className="my-6 inline-flex rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">Total posts: {posts.length}</p>
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
