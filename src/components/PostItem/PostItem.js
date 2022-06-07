import React, { useState } from 'react';
import s from './PostItem.module.css';
import CommentsList from '../CommentsList/CommentsList';
import CommentsForm from '../CommentsForm/CommentForm';
import { useDeleteContactMutation } from '../../redux/phonebook-reducer';
const PostItem = ({ contact }) => {
  const [deleteContact] = useDeleteContactMutation();
  const [showMore, setShowMore] = useState(false);
  const showMoreClick = () => {
    setShowMore(prevState => !prevState);
  };
  return (
    <li className={showMore ? s.contactFull : s.contact}>
      <h2 className={s.title}>{contact.title}</h2>
      <p className={showMore ? s.textFull : s.text}>{contact.body}</p>

      {showMore && <CommentsForm PostId={contact.id} />}
      {showMore && <CommentsList PostId={contact.id} />}
      <button
        type="button"
        className={s.delete}
        onClick={() => deleteContact(contact.id)}
      >
        Delete
      </button>
      <button type="button" className={s.delete}>
        Update
      </button>
      <button type="button" className={s.delete} onClick={showMoreClick}>
        {showMore === false ? 'Watch Full post' : 'Watch Less'}
      </button>
    </li>
  );
};
export default PostItem;
