import React from 'react';

const TopicNew = ({ topic, sub }) => {
  const { id } = sub;
  const { name, body, errors } = topic;
  const defaultName = name ? name : "";
  const defaultBody = body ? body : "";
  return(
    <>
      <h1>Topic New</h1>
      { errors && errors }
      <form action={`/subs/$id.topics`} method="post">
        <p>Name</p>
        <input 
        defaultValue = {defaultName}
        name         = "topic[name]"
        type         = "text"
        required
        />
        <p>Body</p>
        <textarea 
        defaultValue = {defaultBody}
        name         = "topic[body]"
        required
        />
        <br />
        <button type="submit">Add</button>
      </form>
    </>
  )
}

export default TopicNew;