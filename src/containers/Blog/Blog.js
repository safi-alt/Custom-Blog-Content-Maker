import React, { Component } from "react";
import axios from "axios";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response);
    });
  }
  //then() helps to collect the data b/c the get method is aysnc and after it is completed then() is executed
  render() {
    return (
      <div>
        <section className="Posts">
          <Post />
          <Post />
          <Post />
        </section>
        <section>
          <FullPost />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
