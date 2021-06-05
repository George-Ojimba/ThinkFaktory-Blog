// import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading.....</div>}
      {data && <BlogList blogs={data} title={"All Blog's!"} />}
      {/*<BlogList blogs = {blogs.filter((blog) => blog.author === "George" )} title= {"George Blog's!"}*/}
    </div>
  );
};

export default Home;