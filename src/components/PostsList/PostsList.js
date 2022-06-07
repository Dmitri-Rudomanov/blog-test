import React from 'react';
import PostItem from '../PostItem/PostItem';
import s from './PostsList.module.css';
import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from '../../redux/phonebook-reducer';
const PostsList = () => {
  const { data, isLoading } = useFetchContactsQuery();
  console.log(data);
  return (
    <>
      {!isLoading && (
        <ul className={s.list}>
          {data.map(contact => (
            <PostItem key={contact.id} contact={contact} />
          ))}
        </ul>
      )}
    </>
  );
};

export default PostsList;
