import PropTypes from "prop-types";
import SingelBookmark from "./SingelBookmark";
import { removeItem } from "../localStorage/localStorage";

const Bookmark = ({ bookmarks, readingTime }) => {
  //   console.log(bookmarks);
  return (
    <div className="w-full md:w-1/3 mt-10 ">
      <h2 className="text-2xl font-semibold text-blue-800 bg-blue-100 p-5  rounded-md mb-10">
        Reading time: {readingTime} min
      </h2>
      <div className=" bg-slate-200 p-3">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Bookmarks Blog: {bookmarks.length}
        </h2>
        {bookmarks.map((bookmarkTitle, index) => (
          <SingelBookmark
            key={index}
            bookmarkTitle={bookmarkTitle}
          ></SingelBookmark>
        ))}
        {bookmarks.length > 0 && (
          <button
            className="py-2 px-6 border rounded-lg border-sky-400 text-sky-400 bg-white hover:bg-sky-400 hover:text-white"
            onClick={() => removeItem()}
            type="button"
          >
            Clear Local Storage
          </button>
        )}
      </div>
    </div>
  );
};

Bookmark.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};

export default Bookmark;
