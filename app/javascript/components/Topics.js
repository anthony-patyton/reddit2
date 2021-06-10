import React from 'react';

const Topics = ({ topics, sub }) => {
  const { name, id } = sub;
  return(
    <>
      <h1>Topics Page from {name} sub </h1>
      <a href={`/subs/${id}`}>back to sub show</a>
      <br />
      <a href={`/`}>Back to subs</a>
      <br />
      <a href={`/subs/${id}/topics/new`}>Topic new</a>
      <br />
      {
        topics.map((topic) => (
          <div key={topic.id} className="topic-card">
            <h3>{topic.name}</h3>
            <p>{topic.body}</p>
            <a href={`/subs/${sub.id}/topics/${topic.id}`}>Show Topic</a>
            <a href={`/subs/${sub.id}/topics/${topic.id}/edit`}>Edit Topic</a>
            <a href={`/subs/${sub.id}/topics/${topic.id}`} data-method="delete">Delete Topic</a>
          </div>
        ))
      }
    </>
  )
}

export default Topics;