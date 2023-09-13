import { useEffect, useState } from "react";
import Blog from "./blog";
import PropTypes from "prop-types";

const Blogs = ({ handelBookmark, handelReadingTime }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("blog.json");

        const data = await res.json();
        // console.log(data);
        setBlogs(data);
      } catch (error) {
        console.log("system catch an error", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="w-full md:w-2/3">
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blogs={blog}
          handelBookmark={handelBookmark}
          handelReadingTime={handelReadingTime}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handelBookmark: PropTypes.func,
  handelReadingTime: PropTypes.func,
};

export default Blogs;
