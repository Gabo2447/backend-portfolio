// controllers/userController.js
import pc from 'picocolors';
import { readData, writeData } from '../utils/database.js';

export const getUsers = async (req, res) => {
  try {
    const data = await readData();
    console.log(pc.green('Datos recibidos users:\n'), data.users);
    res.json(data.users);
  } catch (err) {
    res.status(500).json({ message: '500 Internal Server Error' });
    console.error(pc.red(500), ' Internal Server Error\n', err);
  }
};

export const addUsers = async (req, res) => {
  try {
    const newUser = req.body;
    const id = newUser.id;
    const data = await readData(); // Leer el archivo para sacar los id

    if (id === null || id === undefined) {
      const users = data.users; // Sacar los productos
      const newId = users[users.length - 1].id; // Crear un id

      newUser.id = newId; // Pushear el id
    } else if (id === data.users[data.users.length - 1].id) newUser.id++; // Hacer sumar 1 al id

    await writeData('products', newUser);
    res
      .status(201)
      .json({ message: 'Producto/s agregado/s con éxito', user: newUser });
  } catch (err) {
    res.status(500).json({ message: '500 Internal Server Error' });
    console.error(pc.red('Error al agregar los productos:\n'), err);
  }
};

export const getUsersId = async (req, res) => {
  try {
    const id = Number(req.params.id); // Convertir a número

    const data = await readData();

    // Usar find para obtener un solo producto
    const user = data.users.find((user) => user.id === id);

    if (!user) {
      return res.status(404).json({ message: 'UserID no encontrado' });
    }

    res.json(user);
  } catch (err) {
    console.error(pc.red(500), ' Internal Server Error', err);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};
