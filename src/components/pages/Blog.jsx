import React, {useState} from "react";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import styled from 'styled-components';

const Blog = () => {

  const posts = [
    // { 
    //   id: 1, 
    //   title: "Learning React", 
    //   content: "React is a powerful JavaScript library...", 
    //   datePosted: "2025-02-08", 
    //   link: "/blog/learning-react" 
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
    //   link: "/blog/blog/introduction-to-nodejs" 
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

  // State for the search query
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter the posts based on the search query
  const filteredPosts = sortedPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    post.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get the posts for the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div name="blog" className="w-full min-h-screen pt-32">
    <Helmet>
      <title>Blog - Samuel</title>
    </Helmet>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full gap-8">
          <div className="sm:text-left pl-4 ">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Blog
            </p>
          <BlogPostsContainer>
            <SearchBar>
              <SearchInput
                type="text"
                placeholder="Search blog posts..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </SearchBar>

            <PostsContainer>
              {(currentPosts.length > 0 ) ? (
                currentPosts.map(post => (
                  <Post key={post.id}>
                    <PostTitle>
                      <Link to={post.link}>{post.title}</Link>
                    </PostTitle>
                    <PostDate>Posted on: {new Date(post.datePosted).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</PostDate>
                    <PostContent>{post.content}</PostContent>
                  </Post>
                ))
              ) : (
                <p>No posts found</p>
              )}
            </PostsContainer>
            <p className="w-32 text-xl font-bold border-b-4 border-pink-600">
              Total posts: {posts.length}
            </p>
            {/* Pagination Controls */}
            <PaginationContainer>
              {filteredPosts.length > postsPerPage && (
                <>
                  <PaginationButton onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                    Previous
                  </PaginationButton>
                  {Array.from({ length: Math.ceil(filteredPosts.length / postsPerPage) }, (_, index) => (
                    <PaginationButton key={index} onClick={() => paginate(index + 1)} active={currentPage === index + 1}>
                      {index + 1}
                    </PaginationButton>
                  ))}
                  <PaginationButton onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(filteredPosts.length / postsPerPage)}>
                    Next
                  </PaginationButton>
                </>
              )}
            </PaginationContainer>

          </BlogPostsContainer>

          </div>
        </div>
      </div>
    </div>
  )
  
};

const BlogPostsContainer = styled.div`
  width: 100%;
  min-height: 100vh; /* Take full height of the screen */
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-top: 30px;
  box-sizing: border-box;
  overflow-y: auto; /* Enable scrolling when content overflows */
`;

const SearchBar = styled.div`
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto; /* Allow scrolling if content overflows */
`;

const Post = styled.div`
  margin-bottom: 20px;
`;

const PostTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  a {
    text-decoration: none;
    color: #333;
    &:hover {
      color: #be185d;
    }
  }
`;

const PostDate = styled.p`
  font-size: 14px;
  color: #888;
`;

const PostContent = styled.p`
  font-size: 16px;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PaginationButton = styled.button`
  padding: 10px;
  margin: 0 5px;
  font-size: 16px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  ${(props) => props.active && `
    background-color: #db2777;
    color: white;
  `}
`;

export default Blog;
