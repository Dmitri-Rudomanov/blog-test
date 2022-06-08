import React from 'react';
import PostItem from '../PostItem/PostItem';
import s from './PostsList.module.css';
import { useFetchPostsQuery } from '../../redux/posts-reducer';
const PostsList = () => {
  const { data, isLoading } = useFetchPostsQuery();
  console.log(data);
  return (
    <>
      {!isLoading && (
        <ul className={s.list}>
          {data.map(post => (
            <PostItem key={post.id} post={post} />
          ))}
        </ul>
      )}
    </>
  );
};

export default PostsList;
