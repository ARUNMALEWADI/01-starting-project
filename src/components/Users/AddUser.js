import React, { Fragment, useState,useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';
import Wrapper from '../Wrapper';

const AddUser = (props) => {
  const usernameref=useRef();
  const userageref=useRef();
  const usercollegeref=useRef();
const [error,setError]=useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUsername=usernameref.current.value;
    const enteredAge=userageref.current.value;
    const enteredclgname=usercollegeref.current.value;
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 ||enteredclgname.trim().length===0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name ,clgname and age (non-empty values).',
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge,enteredclgname);
    usernameref.current.value='';
    userageref.current.value='';
    usercollegeref.current.value='';

  };

  


  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // value={enteredUsername}
            ref={usernameref}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // value={enteredAge}
            ref={userageref}
          />
          <label>CollegName</label>
          <input type='text' id="clgname" ref={usercollegeref}></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
