import React from 'react';

const Comments = ({ topic, comments }) => {
  const { id, name } = topic;
  return(
    <>
      <h1>Comments Page from {name} sub</h1>
      <a href={`/`}>Back to subs</a>
      <br />
      <a href={`/topics/${id}/comments/new`}>Topic New</a>
      {
        comments.map((comment) => (
          <div key={comment.id}>
            <h3>{comment.author}</h3>
            <p>{comment.body}</p>
          </div>
        ))
      }
    </>
  );
}

export default Comments;