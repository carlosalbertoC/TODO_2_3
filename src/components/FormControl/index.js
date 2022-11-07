// ^Esto es el INPUT GROUP (HEADER)

import { useState } from "react";

const InputTask = ({ newTask, datesToMockapi }) => {
  const [InputValue, setInputValue] = useState("");

  const handleClickButton = () => {
    newTask(InputValue);
    // console.log(newTask(InputValue));
    // datesToMockapi();
  };

  const handleInputChange = (e) => {
    console.log(e);
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  return (
    <form className="mt-5 container">
      <h2>TO DO:</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={handleInputChange}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={handleClickButton}
        >
          Button
        </button>
      </div>
    </form>
  );
};

export default InputTask;
