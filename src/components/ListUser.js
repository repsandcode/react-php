import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ListUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios.get("http://localhost:8888/reactcrud/users/").then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
  };

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:8888/reactcrud/user/${id}/delete`)
      .then((res) => {
        console.log(res.data);
        getUsers();
      });
  };

  return (
    <div cl>
      <h1>List Users</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, key) => (
            <tr key={key} className="px-3">
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>
                <Link to={`user/${user.id}/edit`}>Edit</Link>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListUser;
