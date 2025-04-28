import { GoogleGenAI } from '@google/genai';
import { api } from './keyApigemini.js';
import picocolors from 'picocolors';

const ai = new GoogleGenAI({ apiKey: api });
/**
 * Envía un mensaje a Gemini y obtiene la respuesta.
 * @param {string} content - Texto a enviar al modelo.
 */

export async function geminiAI(content) {
  const response = await ai.models.generateContent({
    model: 'gemini-2.0-flash',
    contents: [
      {
        parts: [
          { text: content }, // Aquí va el texto que envías
        ],
      },
    ],
    config: {
      temperature: 0.3,
    },
  });
  console.log(picocolors.green('GEMINI\n'), picocolors.cyan(response.text));
  return response.text;
}
