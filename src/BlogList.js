import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="BlogList">
      <h2>{blogs.length !== 0 ? title : "No blog post!!!"}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written By {blog.author}</p>
          <Link to = {`/blogs/${blog.id}`}>
           <button className="btn pt">Read Blog</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
