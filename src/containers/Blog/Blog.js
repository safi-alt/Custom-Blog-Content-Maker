import React, { Component } from "react";
import axios from "../../axios";
import "./Blog.css";
import Posts from "./Posts/Posts";
import { Route } from "react-router-dom";

//import axios from "axios";
// import Post from "../../components/Post/Post";
// import FullPost from "./FullPost/FullPost";
// import NewPost from "./NewPost/NewPost";

class Blog extends Component {
  render() {
    return (
      <div>
        <header className="Blog">
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/new-post">New Post</a>
              </li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact render={() => <h1>Home</h1>} />
        <Route path="/" render={() => <h1>Home2</h1>} />
      </div>
    );
  }
}

export default Blog;
