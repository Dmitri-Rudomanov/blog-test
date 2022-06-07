import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useFetchCommentsQuery } from '../../redux/comments-reducer';
const PostsList = PostId => {
  const [filtered, setFiltered] = useState([]);
  const { data, isLoading } = useFetchCommentsQuery();
  console.log(data);
  console.log(PostId.PostId);
  const filterCheck = () => {
    if (data) {
      return data.filter(comment => comment.postId === PostId.PostId);
    }
  };
  console.log(filterCheck());
  return (
    <>
      {!isLoading && (
        <ul>
          {filterCheck().map(comment => (
            <li key={comment.id}>
              <h3>Comment #{comment.id}</h3>
              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default PostsList;
