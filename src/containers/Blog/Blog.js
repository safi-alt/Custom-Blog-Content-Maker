import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import NewPost from "./NewPost/NewPost";
import Posts from "./Posts/Posts";
import "./Blog.css";

// import axios from "../../axios";
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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true",
                  }}
                >
                  New Post
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1>Home</h1>} />
        <Route path="/" render={() => <h1>Home2</h1>} /> */}
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
      </div>
    );
  }
}

export default Blog;
