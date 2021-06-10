import React from 'react';

const SubNew = ({ sub }) => {

  const { name } = sub;
  const defaultName = name ? name : ""
  return(
    <>
      <h1>SubNew Component Here</h1>
      <form action="/subs" method="post">
        <input 
        placeholder  = "Name"
        type         = "text"
        defaultValue = {defaultName}
        name         = "sub[name]"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default SubNew;