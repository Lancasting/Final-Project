import React, { useState, useEffect } from "react";
import { Form } from "semantic-ui-react";
import useDebounce from "../utils/useDebouncedValue.js";
import API from "../utils/API.js";

function UserSearchInput({ setTicket, assigneeError }) {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState();

  const debouncedSearchTerm = useDebounce(query, 500);

  useEffect(() => {
    console.log(users);
    if (!query) {
      return;
    }
    if (debouncedSearchTerm) {
      API.findUsersBy(["email", query])
        .then(({ data }) => {
          setUsers(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [query]);

  const handleChange = ({ target }) => {
    setQuery(target.value);
    setTicket((prevState) => {
      return {
        ...prevState,
        assignedTo: target.value,
      };
    });
  };

  return (
    <>
      <Form.Input
        name="email"
        onChange={handleChange}
        list="users"
        placeholder="Search User..."
        error={assigneeError ? "Please Enter A Valid User" : false}
      />
      <datalist id="users">
        {users.map((user) => (
          <option key={user._id} value={user._id}>
            {user.email}
          </option>
        ))}
      </datalist>
    </>
  );
}

export default UserSearchInput;
