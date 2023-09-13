import PropTypes from "prop-types";

const SingelBookmark = ({ bookmarkTitle }) => {
  // const { title } = bookmark;
  //   console.log(bookmark);
  return (
    <div>
      <h2 className="p-4 bg-slate-100 my-4 rounded-lg font-medium text-xl">
        {bookmarkTitle}
      </h2>
    </div>
  );
};

SingelBookmark.propTypes = {
  bookmarkTitle: PropTypes.string,
};

export default SingelBookmark;
