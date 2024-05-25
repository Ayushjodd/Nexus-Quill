import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Routes/Signup";
import Signin from "./Routes/Signin";
import Blog from "./Routes/Blog";
import Landing from "./Routes/Landing";
import Blogs from "./Routes/Blogs";
import Publish from './Routes/Publish'
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/" element={<Landing />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/publish" element={<Publish/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
