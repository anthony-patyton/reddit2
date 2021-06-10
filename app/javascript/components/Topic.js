import React from 'react';

const Topic = ({ topic, sub }) => {
  const { name, body } = topic
  return(
    <>
      <div className="topic-card">
        <h1>Topic: {name}</h1>
        <h6>Sub: {sub.name}</h6>
        <p>{body}</p>
        <a href={`/subs`}>Subs</a>
        <br />
        <a href={`/`}>Also subs</a>
        <br />
        <a href={`/subs/${sub.id}`}>Sub show</a>
        <a href={`/topics/${topic.id}/comments`}>Show comments</a>
      </div>
    </>
  )
}

export default Topic;