import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";

// Move StyledLink definition before the Post component
const StyledLink = styled(Link)`
  display: inline-block;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: #db2777;
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.3s ease-in-out;

  &:hover {
    background-color: #db2777;
  }
`;

const Post = () => {
  const { postId } = useParams();

  // Content for your SurgeV post
  const surgevContent = {
    title: "SurgeV - Creatine Gummies",
    date: "February 28th 2025",
    content: (
      <div className="prose max-w-none">
        {/* <h2>Transform Your Online Presence</h2> */}
        <p>I have been having a ton of fun building an ecommerce website for <a href="https://surgev.store" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline">SurgeV</a></p>
        <ul className="list-disc pl-6">
          <li>Hand making creatine gummies with my roommate </li>
          <li>Next.js</li>
          <li>Stripe payment intent</li>
          <li>Vercel deployment</li>
        </ul>
        
        {/* <h3>Why Choose SurgeV?</h3>
        <p>Our team combines technical expertise with creative vision to build websites that:</p>
        <ul className="list-disc pl-6">
          <li>Convert visitors into customers</li>
          <li>Load in under 2 seconds</li>
          <li>Look amazing on all devices</li>
          <li>Rank higher in search results</li>
        </ul> */}

        {/* <div className="bg-gray-100 p-4 rounded-lg mt-6">
          <h3 className="text-xl font-semibold mb-2">Special Launch Offer!</h3>
          <p>For a limited time, get 20% off your first project. Visit <a href="https://surgev.store" className="text-pink-600 hover:underline">surgev.store</a> to claim your discount.</p>
        </div> */}
      </div>
    )
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{postId === 'surgev' ? surgevContent.title : "Blog Post"} - Samuel</title>
      </Helmet>
      <div className="flex flex-col mx-auto p-4 justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full pt-32">
          <div className="mb-8">
            <StyledLink to="/blog">
              ← Back to Blog
            </StyledLink>
          </div>
          
          {postId === 'surgev' ? (
            <article className="bg-gray-200 p-6 rounded-lg shadow-lg">
              <h1 className="text-4xl font-bold mb-4">{surgevContent.title}</h1>
              <p className="text-gray-500 mb-6">Published on {surgevContent.date}</p>
              {surgevContent.content}
              
              <div className="mt-8 text-center">
                <a
                  href="https://surgev.store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 text-lg font-semibold text-white bg-pink-600 rounded-lg hover:bg-pink-700 transition-colors duration-200"
                >
                  Visit SurgeV Now →
                </a>
              </div>
            </article>
          ) : (
            <h1 className="text-4xl">Blog Post: {postId}</h1>
          )}
        </div>
      </div>
    </div>
  );
};
export default Post;
