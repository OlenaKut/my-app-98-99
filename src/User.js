import React from "react";
function Users(props) {
  return (
    <div className="p">
      <h3>Hello </h3>
      <h1>I'm {props.name}</h1>
      <img src={props.avatar} alt="User" className="rounded-3 m-3" />
    </div>
  );
}
export default Users;
