import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  Box,
  Typography,
  Paper,
  Alert,
} from "@mui/material";

const Login = ({ login }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onsubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!username || !password) {
      setError("Por favor, completa todos los campos.");
      return;
    }
    const isLogin = await login({ username, password });
    if (isLogin) {
      navigate("/home");
    } else {
      setError("Usuario o contraseña incorrectos.");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper elevation={6} sx={{ p: 4, minWidth: 320 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Iniciar sesión
        </Typography>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        <form onSubmit={onsubmit}>
          <TextField
            label="Usuario"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoFocus
          />
          <TextField
            label="Contraseña"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
            sx={{ mt: 2 }}
          >
            Ingresar
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
