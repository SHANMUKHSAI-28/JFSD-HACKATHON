import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ff4081',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:2004/employer/login', null, {
        params: {
          email: email,
          password: password,
        },
      });

      if (response.status === 200) {
        localStorage.setItem('employerEmail', email);
        navigate('/employer-home');
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          setErrorMessage('Invalid credentials, please try again.');
        } else {
          setErrorMessage(`Error: ${error.response.statusText}`);
        }
      } else if (error.request) {
        setErrorMessage('Server not reachable, please try again later.');
      } else {
        setErrorMessage('Something went wrong, please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container sx={{ minHeight: '100vh', flexDirection: 'column', background: 'linear-gradient(to right, #6a11cb, #2575fc)' }}>
        <CssBaseline />
        {/* Admin Login Section */}
        <AppBar position="sticky" sx={{ backgroundColor: "#0e6ce6", boxShadow: 3 }}>
          <Toolbar>
            <Typography
              variant="h4"
              sx={{
                flexGrow: 1,
                textAlign: "center",
                color: "#fff",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              Placement Portal
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Login Form Section */}
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{
            flexGrow: 1,
            padding: 4,
          }}
        >
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={12}
            square
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: 4,
              borderRadius: 3,
              background: 'rgba(255, 255, 255, 0.95)',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main', width: 56, height: 56 }}>
                <LockOutlinedIcon fontSize="large" />
              </Avatar>
              <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', color: '#34495e' }}>
                Recruiter Login
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3, width: '100%' }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{ mb: 2 }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  sx={{ mb: 2 }}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    py: 1.5,
                    fontWeight: 'bold',
                    background: 'linear-gradient(to right, #2575fc, #6a11cb)',
                    color: '#fff',
                    '&:hover': {
                      background: 'linear-gradient(to right, #6a11cb, #2575fc)',
                    },
                  }}
                  disabled={loading}
                >
                  {loading ? 'Logging In...' : 'Sign In'}
                </Button>
                {errorMessage && (
                  <Typography color="error" variant="body2" sx={{ mt: 2 }}>
                    {errorMessage}
                  </Typography>
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default LoginPage;
