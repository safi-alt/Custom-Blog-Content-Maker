import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./NewPost.css";

class NewPost extends Component {
  state = {
    title: "",
    content: "",
    author: "Safi",
    submitted: false,
  };

  componentDidMount() {
    // if unauth => this.props.history.replace('/posts')
  }

  postDataHandler = () => {
    const data = {
      title: this.state.title,
      body: this.state.content,
      author: this.state.author,
    };
    axios.post("/posts", data).then((response) => {
      console.log(response);
      this.props.history.push("/posts"); // This helps on adding page to the stack without removing the previous page so can go back to previous page
      //this.setState({ submitted: true });
      // or
      //this.props.history.replace('/posts'); both work the same by creating a new page so cant go back to previous page
    });
  };

  render() {
    let redirect = null;
    if (this.state.submitted) {
      redirect = <Redirect to="/posts" />;
    }
    return (
      <div className="NewPost">
        {redirect}
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={(event) => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={(event) => this.setState({ author: event.target.value })}
        >
          <option value="Safi">Safi</option>
          <option value="Taimoor">Taimoor</option>
          <option value="Hamza">Hamza</option>
          <option value="Hanzala">Hanzala</option>
          <option value="Omama">Omama</option>
        </select>
        <button onClick={this.postDataHandler}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
