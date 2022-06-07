import { useState } from 'react';
import s from './PostForm.module.css';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { useCreateContactMutation } from '../../redux/phonebook-reducer';
export default function PostForm() {
  const [createContact] = useCreateContactMutation();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'title':
        setName(value);
        break;
      case 'text':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const addNewContact = items => {
    createContact({ id: shortid.generate(), ...items });
  };

  const addContact = e => {
    e.preventDefault();
    addNewContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <div className={s.wrapper}>
      <form onSubmit={addContact} className={s.paper}>
        <label className={s.margin}>
          Title:
          <input
            type="text"
            name="title"
            className={s.title}
            value={name}
            onChange={handleChange}
            required
          />
        </label>
        <label className={s.label}>
          <textarea
            className={s.text}
            value={number}
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
  name: PropTypes.string,
  number: PropTypes.string,
};
