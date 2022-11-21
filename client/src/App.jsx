import React, { useCallback, useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import axios from 'axios';
import MyForm from './components/MyForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostList from './components/PostList';
import { PostContext } from './contexts/PostContext';

function App() {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   axios('http://localhost:3001/posts')
  //     .then((res) => setPosts(res.data));
  // }, []);

  // const submitHandler = useCallback((e, input) => {
  //   e.preventDefault();
  //   axios.post('http://localhost:3001/posts', { message: input })
  //     .then((res) => {
  //       setPosts((prev) => [res.data, ...prev]);
  //     });
  // }, []);

  // const deleteHandler = useCallback((id) => {
  //   axios.delete(`http://localhost:3001/posts/${id}`)
  //     .then(() => setPosts((prev) => prev.filter((post) => post.id !== id)))
  //     .catch(console.log);
  // }, []);

  return (
    <Container>
      <MyForm />
      <PostList />
    </Container>
  );
}

export default App;
