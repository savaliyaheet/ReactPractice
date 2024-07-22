import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => {
        console.log(res);
        setPosts(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetching;
