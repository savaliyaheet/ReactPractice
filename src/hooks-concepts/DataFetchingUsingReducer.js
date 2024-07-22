import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  isLoading: true,
  error: "",
  posts: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        isLoading: false,
        error: "",
        posts: action.payload,
      };
    case "FETCH_ERROR":
      return {
        isLoading: false,
        error: "Something went Wrong",
        posts: [],
      };
  }
};

function DataFetchingUsingReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => dispatch({ type: "FETCH_SUCCESS", payload: res.data }))
      .catch((err) => dispatch({ type: "FETCH_ERROR" }));
  }, []);

  return (
    <div>
      {state.posts.map((post) => {
        return <p key={post.id}>{post.title}</p>;
      })}
    </div>
  );
}

export default DataFetchingUsingReducer;
