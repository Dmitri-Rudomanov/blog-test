import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './CommentsForm.module.css';
import { useCreateCommentsMutation } from '../../redux/comments-reducer';
export default function CommentsForm({ PostId }) {
  const [createComment] = useCreateCommentsMutation();
  const [text, setText] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'comment') {
      setText(value);
    }
  };
  const addNewContact = items => {
    createComment({ ...items });
  };

  const addContact = e => {
    e.preventDefault();
    addNewContact({ text, PostId });
    setText('');
  };

  return (
    <div>
      <form className={s.form} onSubmit={addContact}>
        <label>
          Write your Comment:
          <input
            className={s.input}
            type="text"
            name="comment"
            value={text}
            onChange={handleChange}
            required
          />
        </label>
        <button className={s.btn} type="submit">
          Add comment
        </button>
      </form>
    </div>
  );
}

CommentsForm.propTypes = {
  PostId: PropTypes.number,
};
