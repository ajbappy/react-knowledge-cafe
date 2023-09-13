import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({ blogs, handelBookmark }) => {
  const {
    cover,
    autor_name,
    author_img,
    title,
    post_date,
    reading_time,
    tags,
  } = blogs;
  return (
    <div className="mt-10">
      <img src={cover} alt="" className="rounded-md" />
      <div className="flex justify-between my-6 items-center">
        <div className="flex gap-3 items-center">
          <img src={author_img} alt="" />
          <div>
            <h2 className="text-2xl font-semibold">{autor_name}</h2>
            <p className="text-[12px] md:text-base">{post_date} (4 days ago)</p>
          </div>
        </div>
        <div className="flex gap-3 text-[12px] md:text-base ">
          <p>{reading_time} mins read</p>
          <button onClick={() => handelBookmark(title)}>
            <FaRegBookmark className="text-red-500"></FaRegBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-3xl md:text-5xl font-bold mb-5">{title}</h2>
      {tags.map((tags, index) => (
        <span key={index} className="mr-3">
          <a href="#">{tags}</a>
        </span>
      ))}
      <br />
      <button className="text-blue-800 underline py-1">Mark As Read</button>
      <hr className="my-4" />
    </div>
  );
};

Blog.propTypes = {
  blogs: PropTypes.object.isRequired,
  handelBookmark: PropTypes.func,
};

export default Blog;
