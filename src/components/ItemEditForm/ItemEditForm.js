import { useState } from 'react';
import s from './ItemEditForm.module.css';
import PropTypes from 'prop-types';
import { useUpdatePostsMutation } from '../../redux/posts-reducer';
export default function ItemEditForm({
  titleValue,
  textValue,
  postId,
  updateChange,
}) {
  const [updatePost] = useUpdatePostsMutation();
  const [title, setTitle] = useState(titleValue);
  const [text, setText] = useState(textValue);

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
  const addNewContact = items => {
    updatePost({ ...items });
  };

  const UpdateContact = e => {
    e.preventDefault();
    addNewContact({ title, text, postId });
    updateChange(false);
    setTitle('');
    setText('');
  };

  return (
    <form onSubmit={UpdateContact} className={s.form}>
      <label className={s.label}>
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
        Text
        <textarea
          className={s.text}
          value={text}
          onChange={handleChange}
          required
          placeholder="Enter something funny."
          name="text"
        />
      </label>
      <button type="submit" className={s.button}>
        Save Changes
      </button>
    </form>
  );
}

ItemEditForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
