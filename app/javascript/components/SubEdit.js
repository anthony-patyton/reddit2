import React from 'react';

const SubEdit = ({ sub }) => {
  const { name, id } = sub;
  const defaultName = name ? name : "";
  return(
    <>
      <h1>SubNew Component Here</h1>
      <form action={`/subs/${id}`} method="post">
        {/* need this for edit!!! */}
        <input type="hidden" name="_method" value="patch" />
        <input 
        required  
        placeholder  = "Name"
        type         = "text"
        defaultValue = {defaultName}
        name         ="sub[name]"
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default SubEdit;