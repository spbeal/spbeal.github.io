import { useParams } from "react-router-dom";

const Post = () => {
  const { postId } = useParams(); // Get the post ID from the URL

  return (
    <div className="min-h-screen">
      <h1 className="text-4xl">Blog Post: {postId}</h1>
      {/* Fetch and display post content based on postId */}
    </div>
  );
};

export default Post;