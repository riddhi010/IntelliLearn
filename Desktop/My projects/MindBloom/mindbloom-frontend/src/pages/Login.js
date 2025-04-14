import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styles from './LoginRegister.module.css';
import Cursor from "../components/cursor";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false); // 🔄 Track loading

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true); // start spinner
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });

      toast.success('Login successful! 🎉');
      localStorage.setItem('token', response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));  // ✅ Add this here!

      setTimeout(() => {
        setLoading(false);
        navigate('/dashboard'); // adjust this to your actual home/dashboard route
      }, 1500);
    } catch (error) {
      const msg = error.response?.data?.message || 'Login failed. Try again.';
      toast.error(msg);
      setLoading(false); // stop spinner on error
    }
  };

  return (
    <div className={styles.container}>
      <Cursor />
      <div className={styles.leavesContainer}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`${styles.leaf} leaf-${i % 5}`}></div>
        ))}
      </div>

      <motion.div
        className={styles.glassForm}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Welcome Back!</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button className={styles.authButton} type="submit" disabled={loading}>
            {loading ? (
              <span className={styles.spinner}></span>
            ) : (
              'Login'
            )}
          </button>
        </form>

        <p>
          Don't have an account?
          <span onClick={() => navigate('/register')} className={styles.link}> Register</span>
        </p>
      </motion.div>

      <ToastContainer position="top-center" autoClose={2500} />
    </div>
  );
};

export default Login;
