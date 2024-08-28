import React, { useState, useEffect } from "react";
import axios from "axios"; // If you use axios, otherwise you can remove this line.

const AdminFeatures = () => {
  // State for storing users and form data
  const [users, setUsers] = useState([]);
  const [newAdmin, setNewAdmin] = useState({ username: "", email: "", password: "", role: "" });
  const [updatedUser, setUpdatedUser] = useState({ username: "", email: "" });
  const [userToDelete, setUserToDelete] = useState(null);

  // Fetch all users on component mount
  useEffect(() => {
    fetchAllUsers();
  }, []);

  // Function to fetch all users
  const fetchAllUsers = async () => {
    try {
      const response = await axios.get("/api/users"); // Replace with your API endpoint
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users", error);
    }
  };

  // Function to handle adding a new admin
  const handleAddAdmin = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/admins", newAdmin); // Replace with your API endpoint
      setNewAdmin({ username: "", email: "", password: "", role: "" });
      fetchAllUsers(); // Refresh users after adding a new admin
    } catch (error) {
      console.error("Error adding admin", error);
    }
  };

  // Function to handle updating a user
  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/users/${updatedUser.id}`, updatedUser); // Replace with your API endpoint
      setUpdatedUser({ username: "", email: "" });
      fetchAllUsers(); // Refresh users after updating
    } catch (error) {
      console.error("Error updating user", error);
    }
  };

  // Function to handle updating an admin user
  const handleUpdateAdminUser = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/admins/${updatedUser.id}`, updatedUser); // Replace with your API endpoint
      setUpdatedUser({ username: "", email: "" });
      fetchAllUsers(); // Refresh users after updating
    } catch (error) {
      console.error("Error updating admin user", error);
    }
  };

  // Function to handle deleting an admin user
  const handleDeleteAdminUser = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`/api/admins/${userToDelete.id}`); // Replace with your API endpoint
      setUserToDelete(null);
      fetchAllUsers(); // Refresh users after deletion
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
            {user.username} - {user.email}
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
    </div>
  );
};

export default AdminFeatures;
