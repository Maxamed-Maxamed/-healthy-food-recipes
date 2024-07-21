import React, { useState } from 'react';

const Comments = ({ recipeId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    setComments([...comments, newComment]);
    setNewComment('');
  };

  return (
    <div>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <input type="text" value={newComment} onChange={(e) => setNewComment(e.target.value)} />
      <button onClick={handleAddComment}>Add Comment</button>
    </div>
  );
};

export default Comments;