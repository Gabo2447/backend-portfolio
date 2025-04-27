import pc from 'picocolors';

/**
 * Middleware para manejar rutas no encontradas (404).
 */
export function notFoundMiddleware(req, res, next) {
  res.status(404);
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.send('404 Error - Ruta no encontrada');
  console.log(
    pc.redBright(404),
    ' Error en el cliente al intentar acceder a:',
    req.url
  );
  next();
}
