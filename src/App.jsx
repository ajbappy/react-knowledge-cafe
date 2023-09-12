import "./App.css";
import Blogs from "./components/blogs/blogs";
import Bookmark from "./components/bookmark/Bookmark";

import Header from "./components/Header";

function App() {
  return (
    <div className="max-w-[1280px] mx-auto px-5">
      {/* herader  */}
      <Header></Header>
      <hr />
      <main className="flex flex-col-reverse md:flex-row gap-5">
        <Blogs></Blogs>
        <Bookmark></Bookmark>
      </main>
    </div>
  );
}

export default App;
