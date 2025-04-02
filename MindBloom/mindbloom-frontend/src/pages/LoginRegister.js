import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './LoginRegister.module.css';

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => setIsLogin(!isLogin);

  return (
    <div className={styles.container}>
      {/* Falling Leaves Background */}
      <div className={styles.leavesContainer}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`${styles.leaf} leaf-${i % 5}`}></div>
        ))}
      </div>

      {/* Form Section */}
      <motion.div
        className={styles.glassForm}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>{isLogin ? 'Welcome Back!' : 'Join Us Today!'}</h2>
        <form>
          {!isLogin && (
            <div>
              <label htmlFor="fullName">Full Name</label>
              <input id="fullName" type="text" placeholder="Full Name" required />
            </div>
          )}
  
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Email" required />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Password" required />
          </div>

          <button className={styles.authButton} type="submit">
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        <p>
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <span onClick={toggleMode}>{isLogin ? ' Register' : ' Login'}</span>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginRegister;
