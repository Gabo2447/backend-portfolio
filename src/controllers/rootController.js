// controllers/userController.js
import pc from 'picocolors';
import { readData } from '../utils/database.js';

export const getRoot = async(req, res) => {
  try {
    res.status(200).json({ message: 'Bienvenido a mi página de inicio' });
    console.log(
      pc.white(`Conexion a ${req.url}:`),
      pc.green(`✔️ ${res.statusCode}`)
    );
  } catch (err) {
    res.status(500).json({ message: '500 Internal Server Error' });
    console.error(pc.red(500), ' Internal Server Error\n', err);
  }
};

export const getAPI = async(req, res) => {
  try {
    const data = await readData();

    if (!data) {
      return res.status(404).json({ message: 'No se encontraron datos' });
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: '500 Internal Server Error' });
    console.error(pc.red('Error al obtener datos:\n'), err);
  }
};
