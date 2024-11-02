// File: src/hooks/useAuth.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function useAuth() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated by verifying the token in localStorage
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('No token found, redirecting to login page');
      navigate('/login'); // Redirect to login page if not authenticated
    }
  }, [navigate]);
}

export default useAuth;