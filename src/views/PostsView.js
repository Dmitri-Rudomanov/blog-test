import { useState } from 'react';
import PhonebookForm from '../components/PostForm/PostForm';
import PhonebookList from '../components/PostsList/PostsList';
import Modal from '../components/Modal/Modal';
import { ReactComponent as AddIcon } from '../icons/add.svg';
import IconButton from '../components/IconButton/IconButton';

export default function PostsView() {
  const [showModal, setShowModal] = useState(false);

  const onModalShow = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <div>
      <h1>BLOG</h1>
      {/* <PhonebookForm /> */}
      <IconButton onClick={onModalShow} aria-label="Добавить todo">
        <AddIcon width="40" height="40" fill="#fff" />
      </IconButton>
      <h2>Posts</h2>
      <PhonebookList />
      {showModal && (
        <Modal
          onClose={onModalShow}
          children={<PhonebookForm onModalShow={onModalShow} />}
        ></Modal>
      )}
    </div>
  );
}
