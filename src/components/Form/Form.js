import React, { useState } from "react";
import ErrorModal from "../Error/ErrorModal";
import styles from "./Form.module.css";

const Form = (props) => {
  const [query, setQuery] = useState("");
  const [blankError, setBlankError] = useState("");

  const thisOne = (evt) => {
    evt.preventDefault();
    console.log(query);

    if (query.trim().length === 0) {
      setBlankError({ title: "Oops!", message: "Fill in the value" });
      return;
    }

    props.toApp(query);
    setQuery("");
  };

  const ErrorHandler = () => {
    setBlankError(null);
  };

  return (
    <div>
      {blankError && (
        <ErrorModal
          title={blankError.title}
          message={blankError.message}
          onConfirm={ErrorHandler}
        ></ErrorModal>
      )}

      <form onSubmit={thisOne}>
        <input
          type="text"
          placeholder="Type a city name"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          className={styles.search}
          // onKeyPress={thisOne}
        />
        <button className={styles.button} type="submit" onClick={thisOne}>
          SEARCH
        </button>
      </form>
    </div>
  );
};

export default Form;
