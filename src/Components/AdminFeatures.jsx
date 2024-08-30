import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

const AdminFeatures = () => {
  const [users, setUsers] = useState([]);
  const [newAdmin, setNewAdmin] = useState({ username: "", email: "", password: "", role: "" });
  const [updatedUser, setUpdatedUser] = useState({ id: "", username: "", email: "" });
  const [userToDelete, setUserToDelete] = useState(null);
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  // Define the fetchAllUsers function inside the component using useCallback
  const fetchAllUsers = useCallback(async () => {
    try {
      const response = await axios.get(`${backendUrl}/web/user/users`);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users", error);
    }
  }, [backendUrl]); // Include backendUrl as a dependency

  useEffect(() => {
    fetchAllUsers();
  }, [fetchAllUsers]); // Include fetchAllUsers as a dependency

  const handleAddAdmin = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${backendUrl}/web/user/register`, newAdmin);
      setNewAdmin({ username: "", email: "", password: "", role: "" });
      fetchAllUsers();
    } catch (error) {
      console.error("Error adding admin", error);
    }
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${backendUrl}/web/user/users${updatedUser.id}`, updatedUser);
      setUpdatedUser({ id: "", username: "", email: "" });
      fetchAllUsers();
    } catch (error) {
      console.error("Error updating user", error);
    }
  };

  const handleUpdateAdminUser = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${backendUrl}/web/user/admin/users${updatedUser.id}`, updatedUser);
      setUpdatedUser({ id: "", username: "", email: "" });
      fetchAllUsers();
    } catch (error) {
      console.error("Error updating admin user", error);
    }
  };

  const handleDeleteAdminUser = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`${backendUrl}/web/user/admin/delusers${userToDelete.id}`);
      setUserToDelete(null);
      fetchAllUsers();
    } catch (error) {
      console.error("Error deleting admin user", error);
    }
  };

  return (
    <div>
      <h1>Admin Management</h1>

      {/* Form to add a new admin */}
      <form onSubmit={handleAddAdmin}>
        <input
          type="text"
          placeholder="Username"
          value={newAdmin.username}
          onChange={(e) => setNewAdmin({ ...newAdmin, username: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newAdmin.email}
          onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={newAdmin.password}
          onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })}
        />
        <input
          type="text"
          placeholder="Role"
          value={newAdmin.role}
          onChange={(e) => setNewAdmin({ ...newAdmin, role: e.target.value })}
        />
        <button type="submit">Add Admin</button>
      </form>

      {/* Display list of users */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} - {user.email} - {user.role}
            <button onClick={() => setUpdatedUser(user)}>Edit</button>
            <button onClick={() => setUserToDelete(user)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Form to update a user */}
      <form onSubmit={handleUpdateUser}>
        <input
          type="text"
          placeholder="Username"
          value={updatedUser.username}
          onChange={(e) => setUpdatedUser({ ...updatedUser, username: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={updatedUser.email}
          onChange={(e) => setUpdatedUser({ ...updatedUser, email: e.target.value })}
        />
        <button type="submit">Update User</button>
      </form>

      {/* Form to update an admin user */}
      <form onSubmit={handleUpdateAdminUser}>
        <input
          type="text"
          placeholder="Username"
          value={updatedUser.username}
          onChange={(e) => setUpdatedUser({ ...updatedUser, username: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={updatedUser.email}
          onChange={(e) => setUpdatedUser({ ...updatedUser, email: e.target.value })}
        />
        <button type="submit">Update Admin</button>
      </form>

      {/* Form to delete an admin user */}
      {userToDelete && (
        <form onSubmit={handleDeleteAdminUser}>
          <p>Are you sure you want to delete {userToDelete.username}?</p>
          <button type="submit">Yes, Delete</button>
          <button type="button" onClick={() => setUserToDelete(null)}>Cancel</button>
        </form>
      )}
    </div>
  );
};

export default AdminFeatures;
