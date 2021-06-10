import React from 'react';

const url = "http://localhost:3000/subs/";
const Subs = ({ subs }) => {
  return(
    <>
      <h1>All Subs</h1>
      <a href={ url + "new" }>Add sub</a>
      {
        subs.map((sub) => (
          <div>
            <br />
            {sub.name}
            <br />
            <br />
            <a href={ url + sub.id }>Show</a>
            <br />
            <a href={`${url}${sub.id}/edit`}>Edit</a>
            <br />
            <a href={`${url}${sub.id}`} data-method="delete">Delete</a>
          </div>
        ))
      }
    </>
  )
}

export default Subs;