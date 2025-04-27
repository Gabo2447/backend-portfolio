import express from 'express';
import pc from 'picocolors';
import { readData, writeData } from '../utils/database.js';

const router = express.Router();

// Ruta de inicio
router.get('/', (req, res) => {
  res.status(200);
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.send('Bienvenido a mi página de inicio');
  console.log(
    pc.white(`Conexion a ${req.url}:`),
    pc.green(`✔️ ${res.statusCode}`)
  );
});

// Ruta para obtener todos los datos de la API
router.get('/api/v1', async (req, res) => {
  try {
    const data = await readData();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).send('500 Internal Server Error');
    console.log(pc.red('Error al obtener datos:\n'), err);
  }
});

// Ruta para agregar un nuevo usuario
router.post('/api/v1/new/users', async (req, res) => {
  try {
    const newUser = req.body; // Asegúrate de usar express.json() en server.js
    await writeData('users', newUser);
    res
      .status(201)
      .json({ message: 'Usuario agregado con éxito', user: newUser });
  } catch (err) {
    res.status(500).send('500 Internal Server Error');
    console.log(pc.red('Error al agregar usuario:\n'), err);
  }
});

router.post('/api/v1/new/products', async (req, res) => {
  try {
    const newProduct = req.body;
    await writeData('products', newProduct);
    res
      .status(201)
      .json({ message: 'Producto agregado con exito', product: newProduct });
  } catch (err) {
    res.status(500).send('500 Internal Server Error');
    console.log(pc.red(500), ' Internal Server Error\n', err);
  }
});

export default router;
