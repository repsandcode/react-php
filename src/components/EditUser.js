import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    axios.get(`http://localhost:8888/reactcrud/user/${id}`).then((res) => {
      setInputs(res.data[0]);
    });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .put(`http://localhost:8888/reactcrud/user/${id}/edit`, inputs)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      });
  };

  return (
    <div>
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            value={inputs.name}
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            value={inputs.email}
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="mobile">Mobile: </label>
          <input
            value={inputs.mobile}
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

export default EditUser;
