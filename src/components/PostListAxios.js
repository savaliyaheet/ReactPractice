import React, { Component } from "react";
import axios from "axios";
const params = {
  access_key: "0633d400b5ecdaa0f316147e0ebb0c06",
  query: "New York",
};

class PostListAxios extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      error: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://api.imgflip.com/get_memes")
      .then((respose) => {
        // console.log(respose.data);
        const gif = respose.data.data.memes;
        console.log(gif);
        this.setState({ posts: gif });
      })
      .catch((err) => {
        console.log("Error Countered", err);
        this.setState({
          error: "Data Cannot be fetched",
        });
      });
  }

  render() {
    const { posts, error } = this.state;
    return (
      <div>
        Posts
            {posts.length
              ? posts.map((post) => (
                <img src={post.url} width='100' height='100'/>
                ))
              : null}
            {error ? <div>{error}</div> : null}
          
      </div>
    );
  }
}

export default PostListAxios;
