import React, { useState, useEffect } from "react";
import { Input } from "semantic-ui-react";
import useDebounce from "../utils/useDebouncedValue.js";
import API from "../utils/API.js";

function UserSearchInput({ where }) {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");

  const debouncedSearchTerm = useDebounce(query, 500);

  useEffect(() => {
    if (!query) {
      return;
    }
    if (debouncedSearchTerm) {
      API.findUsersBy({ [where]: query })
        .then(({ data }) => {
          console.log(data);
          setUsers(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [query]);

  const handleChange = ({ target }) => {
    setQuery(target.value);
  };

  return (
    <>
      <Input
        onChange={handleChange}
        list="users"
        placeholder="Search User..."
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
