import React from 'react';
import s from './CommentsList.module.css';
import {
  useFetchCommentsQuery,
  useDeleteCommentsMutation,
} from '../../redux/comments-reducer';

const PostsList = PostId => {
  const { data, isLoading } = useFetchCommentsQuery();
  const [deleteComment] = useDeleteCommentsMutation();
  console.log(data);
  const filterCheck = () => {
    if (data) {
      return data.filter(comment => comment.postId === PostId.PostId);
    }
  };
  return (
    <>
      {!isLoading && (
        <ul className={s.list}>
          {filterCheck().map(comment => (
            <li className={s.item} key={comment.id}>
              <h3>Comment:</h3>
              <p className={s.text}>{comment.body}</p>
              <button
                onClick={() => deleteComment(comment.id)}
                className={s.btn}
                type="button"
              >
                Delete Comment
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default PostsList;
