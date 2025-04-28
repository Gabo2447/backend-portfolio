import pc from 'picocolors';
import { geminiAI } from '../gemini/apigemini.js';

let lastContent = null; // Guarda el último contenido enviado

export const getGemini = async (req, res) => {
  try {
    if (
      !lastContent ||
      !lastContent.content ||
      lastContent.content.trim() === ''
    ) {
      return res
        .status(400)
        .json({ message: 'Primero necesitas mandar un input a Gemini' });
    }

    // Esperar la respuesta de geminiAI (asíncrona)
    const resgemini = await geminiAI(lastContent.content);

    return res.json(resgemini);
  } catch (err) {
    console.error(pc.red('Error en getGemini:\n'), err);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export const addGemini = async (req, res) => {
  try {
    const { content } = req.body;

    if (!content || typeof content !== 'string' || content.trim() === '') {
      return res.status(400).json({
        message: 'El campo "content" es obligatorio y debe ser texto no vacío',
      });
    }

    // Guardar el contenido recibido para usarlo luego en getGemini
    lastContent = { content };

    // Llamar a Gemini con el texto recibido
    const resgemini = await geminiAI(content);

    return res.status(201).json({
      message: 'Mensaje enviado con éxito a Gemini',
      content: resgemini,
    });
  } catch (err) {
    console.error(pc.red('Error al agregar el mensaje:\n'), err);
    return res.status(500).json({ message: '500 Internal Server Error' });
  }
};
