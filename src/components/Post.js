import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";

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

  const posts = {
    surgev: {
      title: "SurgeV - Creatine Gummies",
      date: "February 28th 2025",
      content: (
        <div className="prose max-w-none">
          <p>
            I have been having a ton of fun building an ecommerce experience for{" "}
            <a
              href="https://surgev.store"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:underline"
            >
              SurgeV
            </a>{" "}
            and using it as a chance to sharpen product thinking, storefront UX, and deployment
            workflow decisions.
          </p>
          <ul className="list-disc pl-6">
            <li>Built the storefront in Next.js with a fast, focused landing experience</li>
            <li>Integrated Stripe payment flows for a smoother checkout path</li>
            <li>Shipped and iterated through Vercel deployments</li>
            <li>Hand making creatine gummies with my roommate</li>
          </ul>
        </div>
      ),
      cta: {
        href: "https://surgev.store",
        label: "Visit SurgeV Now →"
      }
    },
    "trading-bots": {
      title: "Trading Bots",
      date: "August 28th 2025",
      content: (
        <div className="prose max-w-none">
          <p>
            This project is part research notebook and part engineering sandbox. I have
            been exploring what it takes to design trading workflows that are measurable,
            automated, and disciplined rather than purely speculative.
          </p>
          <ul className="list-disc pl-6">
            <li>Developed and deployed trading bots on AWS EC2 and Lambda</li>
            <li>Integrated with Coinbase, Alpaca, and Binance APIs for market data and execution</li>
            <li>Used Python, Pandas, and scikit-learn to evaluate data and strategy ideas</li>
            <li>Built backtesting and live-trading workflows with risk management in mind</li>
          </ul>
        </div>
      )
    }
  };

  const post = posts[postId];
  const pageTitle = post ? `${post.title} - Samuel` : `Blog Post - Samuel`;

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <div className="flex flex-col mx-auto p-4 justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full pt-32">
          <div className="mb-8">
            <StyledLink to="/blog">
              ← Back to Blog
            </StyledLink>
          </div>

          {post ? (
            <article className="bg-gray-200 p-6 rounded-lg shadow-lg">
              <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
              <p className="text-gray-500 mb-6">Published on {post.date}</p>
              {post.content}
              {post.cta ? (
                <div className="mt-8 text-center">
                  <a
                    href={post.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 text-lg font-semibold text-white bg-pink-600 rounded-lg hover:bg-pink-700 transition-colors duration-200"
                  >
                    {post.cta.label}
                  </a>
                </div>
              ) : (
                <p className="mt-6 text-gray-600">More notes from this project are on the way.</p>
              )}
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
