import { Fragment } from 'react';
import React,{ useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import Wrapper from './components/Wrapper';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge,uClg) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge,clg:uClg, id: Math.random().toString() },
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
