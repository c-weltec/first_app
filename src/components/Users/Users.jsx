import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/actions/userActions";

const Users = () => {
  const usersSlice = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      {usersSlice.loading ? (
        <center>Loading...</center>
      ) : (
        <ul>
          {usersSlice?.users?.map((user) => (
            <li>{user.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Users;
