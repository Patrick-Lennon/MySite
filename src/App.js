import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import IndividualPost from "./components/IndividualPost";
import Post from "./components/Post";
import Project1 from "./components/Project1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path = "/" element = {<Home />} />
          <Route exact path = "/about" element = {<About />}  />
          <Route exact path = "/post:slug" element = {<IndividualPost />} />
          <Route exact path = "/post" element = {<Post />} />
          <Route exact path = "/project1" element = {<Project1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
