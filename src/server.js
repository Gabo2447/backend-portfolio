import express from 'express';
import pc from 'picocolors';
import { PORT } from './config.js';
import router from './routes/routes.js';
import { handleNotFound } from './controllers/errorController.js';

const app = express();
app.disable('x-powered-by');

// Rutas Modularizadas
app.use(express.json());

app.use(router);

app.use(handleNotFound);

app.listen(PORT, '0.0.0.0', () => {
  console.log(pc.blueBright(`Servidor escuchando en http://localhost:${PORT}`));
});
