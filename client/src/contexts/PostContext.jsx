import axios from 'axios';
import React, {
  createContext, useCallback, useEffect, useState,
} from 'react';

const PostContext = createContext();

function PostContextProvider({ children }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios('http://localhost:3001/posts')
      .then((res) => setPosts(res.data));
  }, []);

  const submitHandler = useCallback((e, input) => {
    e.preventDefault();
    axios.post('http://localhost:3001/posts', { message: input })
      .then((res) => {
        setPosts((prev) => [res.data, ...prev]);
      });
  }, []);

  const deleteHandler = useCallback((id) => {
    axios.delete(`http://localhost:3001/posts/${id}`)
      .then(() => setPosts((prev) => prev.filter((post) => post.id !== id)))
      .catch(console.log);
  }, []);
  return (
    <PostContext.Provider value={{
      deleteHandler, posts, setPosts, submitHandler,
    }}
    >
      {children}
    </PostContext.Provider>
  );
}

export { PostContextProvider, PostContext };
