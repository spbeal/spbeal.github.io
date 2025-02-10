import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Post = () => {
  const { postId } = useParams(); // Get the post ID from the URL

  return (
    <div className="min-h-screen">
      <div className="flex flex-col mx-auto p-4 justify-center items-center w-full h-full">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 pt-32">
            <Link to="/blog" className="px-4 py-2 text-sm font-semibold text-white bg-pink-600 rounded-md hover:bg-pink-700 transition">
              ← Go Back
            </Link>
            <h1 className="text-4xl">Blog Post: {postId}</h1>
              {/* Fetch and display post content based on postId */}
        </div>
      </div>
    </div>
  );
};
const StyledLink = styled(Link)`
  display: inline-block;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: #ec4899; /* Tailwind's pink-500 */
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.3s ease-in-out;

  &:hover {
    background-color: #db2777; /* Tailwind's pink-600 */
  }
`;

export default Post;