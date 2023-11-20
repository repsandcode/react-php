import { useState } from "react";

function CreateUser() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ [name]: value, ...values }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(inputs);
  };

  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="mobile">Mobile: </label>
          <input
            type="text"
            name="mobile"
            id="mobile"
            onChange={handleChange}
          ></input>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default CreateUser;
