import { useState } from 'react';
import PropTypes from 'prop-types';
import { useCreateCommentsMutation } from '../../redux/comments-reducer';
export default function CommentsForm({ PostId }) {
  const [createComment] = useCreateCommentsMutation();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'comment':
        setName(value);
        break;
      default:
        return;
    }
  };
  const addNewContact = items => {
    createComment({ ...items });
  };

  const addContact = e => {
    e.preventDefault();
    addNewContact({ name, PostId });
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form onSubmit={addContact}>
        <label>
          Write your Comment:
          <input
            type="text"
            name="comment"
            value={name}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Add comment</button>
      </form>
    </div>
  );
}

CommentsForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
