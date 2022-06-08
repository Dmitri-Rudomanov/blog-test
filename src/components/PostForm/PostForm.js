import { useState } from 'react';
import s from './PostForm.module.css';
import PropTypes from 'prop-types';
import { useCreatePostsMutation } from '../../redux/posts-reducer';
export default function PostForm({ onModalShow }) {
  const [createPost] = useCreatePostsMutation();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'text':
        setText(value);
        break;
      default:
        return;
    }
  };
  const addNewPost = items => {
    createPost({ ...items });
  };

  const addPost = e => {
    e.preventDefault();
    addNewPost({ title, text });
    setTitle('');
    setText('');
    onModalShow();
  };

  return (
    <div className={s.wrapper}>
      <form onSubmit={addPost} className={s.paper}>
        <label className={s.margin}>
          Title:
          <input
            type="text"
            name="title"
            className={s.title}
            value={title}
            onChange={handleChange}
            required
          />
        </label>
        <label className={s.label}>
          <textarea
            className={s.text}
            value={text}
            onChange={handleChange}
            required
            placeholder="Enter something funny."
            name="text"
            rows="4"
          />
        </label>
        <button type="submit" className={s.button}>
          Add post
        </button>
      </form>
    </div>
  );
}

PostForm.propTypes = {
  onModalShow: PropTypes.func,
};
