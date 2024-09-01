import { useEffect, useState } from "react";
import axios from "axios";

const User = ({ id, name, email, createdAt, isAdmin }) => {
  const [deleted, setDeleted] = useState(false);

  return (
    !deleted && (
      <div className="user">
        <p>{name}</p>
        <p>{email}</p>
        <p>{createdAt}</p>
        {isAdmin && <p className="admin">Admin</p>}
        <button
          className="del-btn"
          onClick={() => {
            axios
              .delete("/api/auth/delete_user/" + id, {
                withCredentials: true,
              })
              .then((res) => {
                setDeleted(true);
              });
          }}
        >
          Delete
        </button>
      </div>
    )
  );
};

const AdminUsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/api/auth/get_users", {
        withCredentials: true,
      })
      .then((res) => {
        setUsers(res.data.users);
      });
  }, []);

  return (
    <div className="admin-users-page">
      {users.map((user) => (
        <User
          key={user._id}
          id={user._id}
          name={user.name}
          email={user.email}
          createdAt={user.createdAt}
          isAdmin={user.is_admin}
        />
      ))}
    </div>
  );
};

export default AdminUsersPage;
