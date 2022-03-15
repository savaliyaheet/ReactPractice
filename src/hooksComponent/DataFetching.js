import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);
  const [fetch, setFetch] = useState(1);

  const fetchPost = () => {
    setFetch(id);
  };
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${fetch}`)
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, [fetch]);
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={fetchPost}>Fetch Post</button>
      <p>{posts.title}</p>
      {/* <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul> */}
    </div>
  );
}

export default DataFetching;
