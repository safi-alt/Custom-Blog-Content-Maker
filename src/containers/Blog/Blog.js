import React, { Component } from "react";
import axios from "axios";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      const posts = response.data.slice(0, 4);
      const updatedPosts = posts.map((post) => {
        return { ...post, author: "Max" };
      });
      this.setState({ posts: updatedPosts });
      //   console.log(response);
    });
  }
  //then() helps to collect the data b/c the get method is aysnc and after it is completed then() is executed
  render() {
    const posts = this.state.posts.map((post) => {
      return <Post key={post.id} title={post.title} author={post.author} />;
    });
    return (
      <div>
        <section className="Posts">{posts}</section>
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
