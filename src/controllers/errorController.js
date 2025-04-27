import pc from 'picocolors';
import { notFoundMiddleware } from '../middlewares/notFoundMiddleware.js';
/**
 * Controlador para manejar el error 404.
 */

export function handleNotFound(req, res, next) {
  notFoundMiddleware(req, res, next); // Pagina no encontrada 404 Error
}
