import axios from 'axios';
import React, {
  createContext, useCallback, useEffect, useState,
  useMemo,
} from 'react';

const PostContext = createContext();
const CallbackContext = createContext();

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

  const handlersObject = useMemo(() => ({
    deleteHandler, setPosts, submitHandler,
  }), []);
  return (
    <PostContext.Provider value={posts}>
      <CallbackContext.Provider value={handlersObject}>
        {children}
      </CallbackContext.Provider>
    </PostContext.Provider>
  );
}

export { PostContextProvider, PostContext, CallbackContext };
