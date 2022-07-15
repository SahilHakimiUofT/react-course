import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const validateUsername = () => {
    if (enteredUsername.trim().length === 0) {
      setError({ error: "invalid input", message: "Please enter a valid username" });
      return false;
    }
    return true;
  };
  const validateAge = () => {
    if (enteredAge === "" || enteredAge <= 0) {
      setError({ error: "invalid input", message: "Please enter a valid age (>0)" });
      return false;
    }
    return true;
  };
  const addUserHandler = (event) => {
    event.preventDefault();
    if (validateUsername() && validateAge()) {
      const data = {
        username: enteredUsername,
        age: enteredAge,
      };
      props.onAddUser(data);
      setEnteredAge("");
      setEnteredUsername("");
    } else {
      return;
    }
  };

  const changeUsernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const changeAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const resetError = () => {
    setError(null);
  };
  //   const toggleModal = () => {
  //     setDisplayModal((prevToggle) => {
  //       return !prevToggle;
  //     });
  //   };
  return (
    <div>
      {error && <ErrorModal error={error.error} errorMessage={error.message} okHandler={resetError} />}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username:</label>
          <input id="username" value={enteredUsername} type="text" onChange={changeUsernameHandler} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" value={enteredAge} onChange={changeAgeHandler} type="number" />
          <Button className={styles.button__red} type="submit">
            Add User
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
