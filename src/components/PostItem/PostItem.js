import React from 'react';
import s from './PostItem.module.css';
import { useDeleteContactMutation } from '../../redux/phonebook-reducer';
const PostItem = ({ contact }) => {
  const [deleteContact] = useDeleteContactMutation();
  return (
    <li className={s.contact}>
      <h2 className={s.title}>{contact.title}</h2>
      <p className={s.text}>{contact.body}</p>
      <button
        type="button"
        className={s.delete}
        onClick={() => deleteContact(contact.id)}
      >
        Delete
      </button>
      <button
        type="button"
        className={s.delete}
        onClick={() => deleteContact(contact.id)}
      >
        Update
      </button>
    </li>
  );
};
export default PostItem;
