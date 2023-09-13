import PropTypes from "prop-types";
import SingelBookmark from "./SingelBookmark";
import { removeItem } from "../localStorage/localStorage";

const Bookmark = ({ bookmarks }) => {
  //   console.log(bookmarks);
  return (
    <div className="w-full md:w-1/3 mt-10">
      <h2 className="text-3xl font-semibold">
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
  );
};

Bookmark.propTypes = {
  bookmarks: PropTypes.array,
};

export default Bookmark;
