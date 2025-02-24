import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    // { 
    //   id: 1, 
    //   title: "Learning React", 
    //   content: "React is a powerful JavaScript library...", 
    //   datePosted: "2025-02-08", 
    //   link: "blog/bC-compiler" 
    // },
    // { 
    //   id: 2, 
    //   title: "Understanding JavaScript Closures", 
    //   content: "Closures are an important concept in JavaScript...", 
    //   datePosted: "2025-01-15", 
    //   link: "/blog/javascript-closures" 
    // },
    // { 
    //   id: 3, 
    //   title: "Web Development Trends in 2025", 
    //   content: "In 2025, the web development industry will focus on...", 
    //   datePosted: "2025-02-01", 
    //   link: "/blog/web-development-trends-2025" 
    // },
    // { 
    //   id: 4, 
    //   title: "CSS Flexbox for Beginners", 
    //   content: "Flexbox is a layout model in CSS...", 
    //   datePosted: "2024-12-25", 
    //   link: "/blog/css-flexbox-beginners" 
    // },
    // { 
    //   id: 5, 
    //   title: "React State Management", 
    //   content: "Managing state in React can be tricky...", 
    //   datePosted: "2024-11-15", 
    //   link: "/blog/react-state-management" 
    // },
    // { 
    //   id: 6, 
    //   title: "Introduction to Node.js", 
    //   content: "Node.js is a runtime environment for JavaScript...", 
    //   datePosted: "2024-10-05", 
    //   link: "/blog/introduction-to-nodejs" 
    // },
    // { 
    //   id: 7, 
    //   title: "Introduction to Node.js", 
    //   content: "Node.js is a runtime environment for JavaScript...", 
    //   datePosted: "2024-10-05", 
    //   link: "/blog/introduction-to-nodejs" 
    // },
    // { 
    //   id: 8, 
    //   title: "Introduction to Node.js", 
    //   content: "Node.js is a runtime environment for JavaScript...", 
    //   datePosted: "2024-10-05", 
    //   link: "/blog/introduction-to-nodejs" 
    // },
    // Add more posts as needed
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
    <div className="bg-universal dark:bg-universal-dark min-h-screen pt-32">
      <Helmet>
        <title>Blog - Samuel</title>
      </Helmet>
      <div className="flex flex-col items-center w-full">
        <div className="max-w-4xl w-full p-4">
          <p className="text-4xl font-bold border-b-4 border-pink-600 inline">Blog</p>
          <div className="my-4 ">
            <input
              type="text"
              placeholder="Search blog posts..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full p-2 text-lg border border-gray-300 rounded-md bg-universal-100 dark:bg-universal-dark100"
            />
          </div>
          <div>
            {currentPosts.length > 0 ? (
              currentPosts.map((post) => (
                <div key={post.id} className="mb-6 p-4 border-b border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900 hover:text-pink-600">
                    <Link to={post.link}>{post.title}</Link>
                  </h2>
                  <p className="text-sm text-gray-500">
                    Posted on: {new Date(post.datePosted).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <p className="text-gray-700 mt-2">{post.content}</p>
                </div>
              ))
            ) : (
              <p>No posts found</p>
            )}
          </div>
          <p className="w-32 text-xl font-bold border-b-4 border-pink-600 my-4">Total posts: {posts.length}</p>
          <div className="flex justify-center space-x-2 mt-4">
            {filteredPosts.length > postsPerPage && (
              <>
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-1 border border-gray-400 rounded-md disabled:opacity-50"
                >
                  Previous
                </button>
                {Array.from({ length: Math.ceil(filteredPosts.length / postsPerPage) }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => paginate(index + 1)}
                    className={`px-3 py-1 border border-gray-400 rounded-md ${currentPage === index + 1 ? "bg-pink-600 text-white" : ""}`}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === Math.ceil(filteredPosts.length / postsPerPage)}
                  className="px-3 py-1 border border-gray-400 rounded-md disabled:opacity-50"
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
