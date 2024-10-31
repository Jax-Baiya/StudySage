// ===== frontend/src/components/RegisterForm.js =====
import React, { useState } from 'react';
import { registerUser } from '../services/auth';
import { toast } from 'react-toastify';
import LoadingSpinner from './LoadingSpinner';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await registerUser({ username, email, password });
      toast.success('Registration successful!');
    } catch (error) {
      toast.error('Error registering.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Registration Form">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        aria-label="Username"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        aria-label="Email Address"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        aria-label="Password"
      />
      <button type="submit" disabled={loading}>Register</button>
      {loading && <LoadingSpinner />}
    </form>
  );
}

export default RegisterForm;
