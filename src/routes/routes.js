import express from 'express';
import {
  getUsers,
  getUsersId,
  addUsers,
} from '../controllers/userController.js';

import {
  getProducts,
  getProductsId,
  addProducts,
} from '../controllers/productsController.js';

import { getGemini, addGemini } from '../controllers/geminiController.js';

import { getAPI, getRoot } from '../controllers/rootController.js';

const router = express.Router();

// USERS
router.get('/users', getUsers); // Ruta Default: USERS
router.post('/users/new', addUsers); // Ruta para agregar un nuevo usuario
router.get('/users/:id', getUsersId); // Ruta para ver el json en especifico

// PRODUCTS
router.get('/products', getProducts); // Ruta Default: USERS
router.get('/products/:id', getProductsId); // Ruta para ver el producto con su id
router.post('/products/new', addProducts); // Ruta para agregar un nuevo usuario

// GEMINI
router.get('/gemini', getGemini); // Ruta Default: GEMINI
router.post('/gemini/new', addGemini); // Ruta para agregar informacion a gemini y recibir el output

// Ruta de inicio
router.get('/', getRoot);
router.get('/api', getAPI); // Ruta para obtener todos los datos de la API

export default router;
