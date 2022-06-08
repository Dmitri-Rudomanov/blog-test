import React, { useState } from 'react';
import s from './PostItem.module.css';
import CommentsList from '../CommentsList/CommentsList';
import CommentsForm from '../CommentsForm/CommentForm';
import ItemEditForm from '../ItemEditForm/ItemEditForm';
import { useDeletePostsMutation } from '../../redux/posts-reducer';
const PostItem = ({ post }) => {
  const [deletePost] = useDeletePostsMutation();
  const [showMore, setShowMore] = useState(false);
  const [update, setUpdate] = useState(false);

  const updateChange = value => {
    setUpdate(value);
  };
  const showMoreClick = () => {
    setShowMore(prevState => !prevState);
  };
  return (
    <>
      {update ? (
        <div className={s.post}>
          <ItemEditForm
            titleValue={post.title}
            textValue={post.body}
            postId={post.id}
            updateChange={updateChange}
          />
        </div>
      ) : (
        <li className={showMore ? s.postFull : s.post}>
          <h2 className={s.title}>{post.title}</h2>
          <p className={showMore ? s.textFull : s.text}>{post.body}</p>

          {showMore && <CommentsForm PostId={post.id} />}
          {showMore && <CommentsList PostId={post.id} />}

          <div className={s.buttons}>
            <button
              type="button"
              className={s.delete}
              onClick={() => deletePost(post.id)}
            >
              Delete
            </button>
            <button
              type="button"
              onClick={() => setUpdate(true)}
              className={s.upd}
            >
              Update
            </button>
            <button type="button" className={s.watch} onClick={showMoreClick}>
              {showMore === false ? 'Watch More' : 'Watch Less'}
            </button>
          </div>
        </li>
      )}
    </>
  );
};
export default PostItem;
