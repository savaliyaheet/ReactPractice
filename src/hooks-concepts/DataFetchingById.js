import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetchingById() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [clickId, setClickId] = useState(1);

  const handleClick = () => {
    setClickId(id);
  };

  //Note!: Using promises

  // useEffect(() => {
  //   axios
  //     .get(`https://jsonplaceholder.typicode.com/posts/${clickId}`)
  //     .then((res) => {
  //       console.log(res.data);
  //       setPost(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, [clickId]);

  //Note!: Using async/await

  useEffect(() => {
    async function FetchData() {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${clickId}`
        );
        setPost(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    FetchData();
  }, [clickId]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleClick}>Fetch Post</button>
      <div>{post.title}</div>
    </div>
  );
}

export default DataFetchingById;
