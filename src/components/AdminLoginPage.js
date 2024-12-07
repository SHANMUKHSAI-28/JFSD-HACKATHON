import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography, Container, Paper } from '@mui/material';

export function AdminLoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const loginAdmin = () => {
    axios
      .post('http://localhost:2001/admin/login', null, {
        params: { username, password },
      })
      .then((response) => {
        const { success, message, adminName } = response.data;
        if (success) {
          localStorage.setItem('isAdmin', true);
          localStorage.setItem('adminName', adminName);
          localStorage.setItem('username', username);
          setMessage(message);
          navigate('/admin-home');
        } else {
          setMessage(message);
        }
      })
      .catch((error) => {
        setMessage('An error occurred. Please try again.');
        console.error('Login error:', error);
      });
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #3498DB 0%, #2C3E50 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: 5,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={8}
          sx={{
            p: 5,
            borderRadius: 3,
            textAlign: 'center',
            backgroundColor: '#FFF',
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              color: '#2C3E50',
              textTransform: 'uppercase',
              mb: 3,
            }}
          >
            Admin Login
          </Typography>
          <Box component="form" sx={{ mt: 3 }}>
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{
                mb: 3,
                borderRadius: 2,
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                },
              }}
            />
            <TextField
              fullWidth
              type="password"
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                mb: 3,
                borderRadius: 2,
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                },
              }}
            />
            <Button
              fullWidth
              variant="contained"
              onClick={loginAdmin}
              sx={{
                backgroundColor: '#3498DB',
                color: '#FFF',
                fontWeight: 'bold',
                py: 1.5,
                borderRadius: 2,
                fontSize: '1rem',
                '&:hover': {
                  backgroundColor: '#2C3E50',
                },
              }}
            >
              Login
            </Button>
          </Box>
          {message && (
            <Typography
              variant="body2"
              sx={{
                mt: 2,
                color: message.includes('error') ? '#E74C3C' : '#27AE60',
                fontWeight: 'bold',
              }}
            >
              {message}
            </Typography>
          )}
        </Paper>
      </Container>
    </Box>
  );
}
