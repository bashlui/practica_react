import { useState } from "react";
import { Box, Card, CardContent, Typography, Stack, Button } from "@mui/material";

function Home() {
  const [count, setCount] = useState(0);

  const suma = () => setCount((c) => c + 1);
  const resta = () => setCount((c) => c - 1);
  const mensaje = () => alert("¡Hola Mundo!");
  const guardar = () => alert("Guardado");

  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "transparent",
      }}
    >
      <Card
        sx={{
          minWidth: 320,
          maxWidth: 400,
          p: 2,
          boxShadow: 4,
          borderRadius: 3,
        }}
      >
        <CardContent>
          <Typography variant="h4" component="div" gutterBottom>
            ¡Bienvenido a mi app React!
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            Aquí puedes probar botones personalizados y el contador.
          </Typography>

          <Box sx={{ my: 3 }}>
            <Typography variant="h2" color="primary" sx={{ fontWeight: 600 }}>
              {count}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Valor actual del contador
            </Typography>
          </Box>

          <Stack spacing={2} direction="row" justifyContent="center" sx={{ mb: 2 }}>
            <Button variant="contained" color="primary" onClick={suma}>
              Sumar
            </Button>
            <Button variant="outlined" color="primary" onClick={resta}>
              Restar
            </Button>
          </Stack>
          <Stack spacing={2} direction="row" justifyContent="center">
            <Button variant="contained" color="success" onClick={mensaje}>
              Mensaje
            </Button>
            <Button variant="contained" color="secondary" onClick={guardar}>
              Guardar
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Home;
