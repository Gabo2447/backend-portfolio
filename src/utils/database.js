import fs from 'node:fs/promises';
import path from 'node:path';
import pc from 'picocolors';

// Define a fixed base directory for the database
const BASE_DIR = path.resolve('src/database');
const DB_FILE = 'db.json';

// Resolve and validate the database path
const DB_PATH = path.join(BASE_DIR, DB_FILE);
if (!DB_PATH.startsWith(BASE_DIR)) {
  throw new Error('Invalid database path');
}

/**
 * Lee toda la base de datos desde el archivo JSON.
 * @returns {Promise<Object>} La base de datos como un objeto.
 * @throws {Error} Si no se puede leer el archivo.
 */
export async function readData() {
  try {
    const data = await fs.readFile(DB_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error(pc.red('❌ Error al leer la base de datos:'), err.message);
    throw new Error('No se pudo leer la base de datos');
  }
}

/**
 * Escribe datos en un objeto específico dentro de la base de datos.
 * Si el objeto no existe, lo crea automáticamente.
 *
 * @param {string} key - El nombre del objeto en la base de datos (por ejemplo, "users").
 * @param {Object} newData - Los datos que se agregarán al objeto.
 * @returns {Promise<void>}
 * @throws {Error} Si no se puede escribir en el archivo.
 */
export async function writeData(key, newData) {
  try {
    // Leer la base de datos actual
    const db = await readData();

    // Asegurarse de que el objeto exista
    db[key] = db[key] || [];

    // Verificar si el id ya existe
    const existingIds = db[key].map((item) => item.id);
    if (existingIds.includes(newData.id)) {
      // Asignar un nuevo id único
      newData.id = Math.max(...existingIds) + 1;
      console.log(
        pc.yellow(`⚠️ ID duplicado detectado. Nuevo ID asignado: ${newData.id}`)
      );
    }

    // Agregar los nuevos datos al objeto
    db[key].push(newData);

    // Escribir los cambios en el archivo
    await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2), 'utf-8');
    console.log(
      pc.green('✅ Datos escritos correctamente en la base de datos.')
    );
  } catch (err) {
    console.error(
      pc.red('❌ Error al escribir en la base de datos:'),
      err.message
    );
    throw new Error('No se pudo escribir en la base de datos');
  }
}
