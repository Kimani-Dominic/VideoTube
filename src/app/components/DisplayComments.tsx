import React from 'react';
import Comment from './comment';

const commentsList = [
  { name: 'John Doe', comment: 'Great work on the project!' },
  { name: 'Jane Smith', comment: 'I love the design and layout.' },
  { name: 'Bob Johnson', comment: 'Nice use of colors.' },
];

export default function DisplayComments() {
  return (
    <div>
      <h2>Comments</h2>
      {commentsList.map((comment, index) => (
        <Comment key={index} name={comment.name} comment={comment.comment} />
      ))}
    </div>
  );
};
