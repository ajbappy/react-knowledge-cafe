import { useEffect, useState } from "react";
import "./App.css";
import Blogs from "./components/blogs/blogs";
import Bookmark from "./components/bookmark/Bookmark";

import Header from "./components/Header";
import { getItem, setItemLS } from "./components/localStorage/localStorage";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const [readingTime, setReadingTime] = useState(0);

  useEffect(() => {
    const getStoredItems = getItem();
    setBookmarks(getStoredItems);
  }, []);

  const handelBookmark = (title) => {
    const getStoredItems = getItem();
    if (getStoredItems.indexOf(title) !== -1) {
      return;
    }
    setItemLS(title);
    const newBookmark = [...bookmarks, title];
    setBookmarks(newBookmark);
  };

  const handelReadingTime = (time) => {
    const newTime = readingTime + time;
    setReadingTime(newTime);
  };
  return (
    <div className="max-w-[1280px] mx-auto px-5">
      {/* herader  */}
      <Header></Header>
      <hr />
      <main className="flex flex-col-reverse md:flex-row gap-5">
        <Blogs
          handelBookmark={handelBookmark}
          handelReadingTime={handelReadingTime}
        ></Blogs>
        <Bookmark bookmarks={bookmarks} readingTime={readingTime}></Bookmark>
      </main>
    </div>
  );
}

export default App;
