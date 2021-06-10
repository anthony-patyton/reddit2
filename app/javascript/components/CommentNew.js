import React from 'react';

const CommentNew = ({ topic, comment }) => {
  const { author, body, errors } = comment;
  const defaultAuthor = author ? author : "";
  const defaultBody = body ? body : "";
  return(
    <>
      <h1>Comment</h1>
      { errors && errors }
      <form action={`/topics/${topic.id}/comments`} method="post">
        <p>Author</p>
        <input
        defaultValue = {defaultAuthor}
        name         = "comment[author]"
        type         = "text"
        required
        />
        <br />
        <p>Body</p>
        <textarea
        defaultValue = {defaultBody}
        name         = "comment[body]"
        required
        />
        <br />
        <button type="submit">Add</button>
      </form>
    </>
  )
}

export default CommentNew;