import React, { useState } from "react";
import { registerUser } from "../api/api";

const Register = () => {
  const [formData, setFormData] = useState(
    { name: "", 
      email: "", 
      password: "" });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    //{ ...formData } → Copies the existing form data to keep previous inputs.
    //[key]:-----
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await registerUser(formData);
      alert(response.data.message); // Show success message
    } catch (error) {
      alert(error.response.data.message); // Show error message
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
