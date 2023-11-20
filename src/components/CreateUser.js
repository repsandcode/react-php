import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
    console.log(inputs);
  };

  const handleSubmit = (event) => {
    console.log(inputs);

    event.preventDefault();

    axios
      .post("http://localhost:8888/reactcrud/user/save", inputs)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      });
    console.log(inputs);
  };

  useEffect(() => {
    console.log(inputs);
  }, [inputs]);

  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="mobile">Mobile: </label>
          <input
            type="text"
            name="mobile"
            id="mobile"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default CreateUser;
