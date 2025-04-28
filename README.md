# 🚀 Express Server

## 📖 Descripción

Proyecto inicializado con el propósito de crear un Back-End sencillo para [portfolio](https://github.com/Gabo2447/portfolio). Este servidor está diseñado para manejar solicitudes HTTP y proporcionar una API robusta y escalable.

---

## 📚 Tabla de Contenidos

- [📦 Instalación](#-instalación)
- [⚙️ Implementación](#️-implementación)
- [🤝 Contribución](#-contribución)
- [📜 Licencia](#-licencia)
- [🔗 Recursos](#-recursos)
---

## 📦 Instalación

Sigue estos pasos para instalar y ejecutar el proyecto en tu entorno local:

1. **Clona este repositorio**:
   ```bash
   git clone https://github.com/Gabo2447/portfolio-react-express.git
   ```
2. **Navega al directorio del servidor**:
   ```bash
   cd server-express
   ```
3. **Instala las dependencias necesarias**:
   ```bash
   npm install
   ```
4. **Navega al directorio gemini**:
   ```bash
   cd src/gemini
   ```
5. **Crea keyApiGemini.js y escribe lo siguiente**:
   ```javascript
   export const api = 'YOUR_API_KEY';
   ```
6. **Inicia el servidor**:
   ```bash
   # Para desarrollar y con baja memoria:
   npm run lowDev
   # Para desarrollar con alta memoria:
   npm run Dev
   ```
7. **Accede al servidor**: El servidor estará disponible en `http://localhost:3000`.

---

## ⚙️ Implementación

Ejemplo de cómo consumir la API desde el cliente:

```javascript
// Ejemplo de código
fetch('http://localhost:3000/api/v2/data')
  .then(res => res.json())
  .then(data => console.log(data));
```

---

## 🤝 Contribución

¡Nos encantaría recibir tus contribuciones! Por favor, revisa el archivo [CONTRIBUTING.md](CONTRIBUTING.md) para obtener más detalles sobre cómo contribuir al proyecto.

---

## 📜 Licencia

Este proyecto está bajo la licencia [Apache-2.0](LICENSE), una licencia de software libre permisiva que permite el uso, modificación y distribución del software, incluso con fines comerciales, sin restricciones adicionales. Requiere la conservación del aviso de derechos de autor y una copia de la licencia en todas las versiones redistribuidas.

---

## 🔗 Recursos

- [Documentación de Express](https://expressjs.com/)
- [Node.js](https://nodejs.org/)
- [Guía de Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

---

## 🛠️ Reglas de Formateo

Para mantener la consistencia en el proyecto, sigue estas reglas:

1. **Formato del Código**:
   - Usa [Prettier](https://prettier.io/) para formatear el código.
   - Configuración recomendada:
     ```json
     {
       "semi": true,
       "singleQuote": true,
       "tabWidth": 2,
       "trailingComma": "es5"
     }
     ```

2. **Estilo de Commit**:
   - Usa mensajes descriptivos en presente.
   - Incluye emojis para identificar el tipo de cambio:
     - 🐛 `:bug:` para corrección de errores.
     - ✨ `:sparkles:` para nuevas funcionalidades.
     - 📝 `:memo:` para cambios en la documentación.

3. **Linting**:
   - Usa [ESLint](https://eslint.org/) con las reglas configuradas en el proyecto.
   - Ejecuta `npm run lint` antes de enviar un Pull Request.

4. **Pruebas**:
   - Asegúrate de que todas las pruebas pasen antes de enviar cambios.
   - Ejecuta `npm test` para verificar.

---

¡Gracias por usar este proyecto! Si tienes alguna pregunta o sugerencia, no dudes en abrir un issue. 💖