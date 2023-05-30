import { useEffect, useState } from "react";
import { API } from "../../apiService";

const UsersFromComponent = () => {
  const [users, setUsers] = useState([]);
  const [usersLoading, setUsersLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      setUsersLoading(true);
      const response = await API.getUsers();
      setUsersLoading(false);
      setUsers(response.data);
    } catch (error) {
      setUsersLoading(false);
      // setError(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      {usersLoading ? (
        <center>Loading...</center>
      ) : (
        <ul>
          {users?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default UsersFromComponent;
