import { useState } from 'react';
import PostsForm from '../components/PostForm/PostForm';
import PostsList from '../components/PostsList/PostsList';
import Modal from '../components/Modal/Modal';
import { ReactComponent as AddIcon } from '../icons/add.svg';
import IconButton from '../components/IconButton/IconButton';

const styles = {
  create: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 25,
  },
  text: {
    marginRight: 15,
  },
  wrapper: {
    backgroundImage:
      'url(https://static.tumblr.com/maopbtg/E9Bmgtoht/lines.png), url(https://static.tumblr.com/maopbtg/nBUmgtogx/paper.png) ',
    backgroundRepeat: 'repeat-y, repeat',
    backgroundSize: 'contain',
  },
};

export default function PostsView() {
  const [showModal, setShowModal] = useState(false);

  const onModalShow = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.create}>
        <h1 style={styles.text}>Create NEW post</h1>
        <IconButton onClick={onModalShow} aria-label="Добавить todo">
          <AddIcon width="40" height="40" fill="#fff" />
        </IconButton>
      </div>
      <h2>Posts</h2>
      <PostsList />
      {showModal && (
        <Modal
          onClose={onModalShow}
          children={<PostsForm onModalShow={onModalShow} />}
        ></Modal>
      )}
    </div>
  );
}
