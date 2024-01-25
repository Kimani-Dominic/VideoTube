// components/Comment.js
import React from 'react';

export default function Comment  (props: any)  {
  const {name, comment} = props; 
  return (
    <div>
      <strong>{name}</strong>
      <p>{comment}</p>
      <hr />
    </div>
  );
};

