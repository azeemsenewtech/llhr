// src/pages/Users.jsx
import { useEffect, useState } from "react";
import { api } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const { data } = await api.get("/users");
    setUsers(data.users);
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Users</h2>

      {users.map((u) => (
        <div
          key={u._id}
          style={{
            padding: 10,
            marginTop: 10,
            background: "#eee",
            width: 300,
            cursor: "pointer",
          }}
          onClick={() => navigate(`/chat/${u._id}`)}
        >
          {u.email}
        </div>
      ))}
    </div>
  );
}
