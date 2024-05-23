import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Routes/Signup";
import Signin from "./Routes/Signin";
import Blog from "./Routes/Blog";
import Landing from "./Routes/Landing";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
