// controllers/userController.js
import pc from 'picocolors';
import { readData, writeData } from '../utils/database.js';

export const getProducts = async (req, res) => {
  try {
    const data = await readData();
    console.log(pc.green('Datos recibidos de productos:\n'), data.products);
    res.json(data.products);
  } catch (err) {
    res.status(500).json({ message: '500 Internal Server Error' });
    console.error(pc.red(500), ' Internal Server Error\n', err);
  }
};

export const addProducts = async (req, res) => {
  try {
    const newProducts = req.body;
    const id = newProducts.id;
    const data = await readData(); // Leer el archivo para sacar los id

    if (id === null || id === undefined) {
      const products = data.products; // Sacar los productos
      const newId = products[products.length - 1].id; // Crear un id

      newProducts.id = newId; // Pushear el id
    } else if (id === data.products[data.products.length - 1].id)
      newProducts.id++; // Hacer sumar 1 al id

    await writeData('products', newProducts);
    res
      .status(201)
      .json({ message: 'Producto/s agregado/s con éxito', user: newProducts });
  } catch (err) {
    res.status(500).json({ message: '500 Internal Server Error' });
    console.error(pc.red('Error al agregar los productos:\n'), err);
  }
};

export const getProductsId = async (req, res) => {
  try {
    const id = Number(req.params.id); // Convertir a número

    const data = await readData();

    // Usar find para obtener un solo producto
    const product = data.products.find((product) => product.id === id);

    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    res.json(product);
  } catch (err) {
    console.error(pc.red(500), ' Internal Server Error', err);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};
