import React from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import { useState } from "react";
function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (user) => {
    setUserList((prevUsers) => {
      return [...prevUsers, { ...user, id: Math.random().toString() }];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
