import React from "react";
import { WithData } from "../helpers";
function Users(users) {
  
  
  return (
    <div>
      <p>{users.users[0].id}</p>
      <p>{users.users[0].name}</p>
      <p>{users.users[0].address.street}</p>
      <p>{users.users[0].phone}</p>
      <p>{users.users[0].company.name}</p>
      <p>{users.users[0].email}</p>
    </div>
  );
}

export default WithData(Users);
