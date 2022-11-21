import React, { memo, useContext } from 'react';
import { Button, ListGroupItem } from 'reactstrap';
import { PostContext } from '../../contexts/PostContext';

function PostItem({ post, id }) {
  const { deleteHandler } = useContext(PostContext);
  console.log('render');
  return (
    <ListGroupItem>
      <Button className="btn-danger" onClick={() => deleteHandler(id)}>x</Button>
      {`${id}. ${post.message}`}
    </ListGroupItem>
  );
}

export default memo(PostItem);
