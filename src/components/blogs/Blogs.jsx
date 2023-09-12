import { useEffect, useState } from "react";
import Blog from "./blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("../../../public/blog.json");

        const data = await res.json();
        console.log(data);
        setBlogs(data);
      } catch (error) {
        console.log("system catch an error", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="w-full md:w-2/3">
      {blogs.map((blogs) => (
        <Blog key={Blogs.id} blogs={blogs}></Blog>
      ))}
    </div>
  );
};

export default Blogs;
