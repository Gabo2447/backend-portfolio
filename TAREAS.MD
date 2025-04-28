# 📋 Lista de Tareas para Mejorar el Proyecto

---

## 📑 Tabla de Contenidos

- [1. Estructura del Proyecto](#1-estructura-del-proyecto)
- [2. Código de las Rutas](#2-código-de-las-rutas)
- [3. Controladores y Middlewares](#3-controladores-y-middlewares)
- [4. Base de Datos y Utilidades](#4-base-de-datos-y-utilidades)
- [5. Configuración y Scripts](#5-configuración-y-scripts)
- [6. Pruebas](#6-pruebas)
- [7. Documentación](#7-documentación)
- [Resumen](#resumen)

---

## 1. Estructura del Proyecto 🏗️

### ✅ Lo que está bien:
- Carpeta organizada para `routes`, `controllers`, `middlewares`, `utils`.
- Archivo `db.json` dentro de carpeta `database`.
- `package.json` con scripts útiles (`dev`, `start`, `test`).

### 🔧 Mejoras a implementar:
- [✅] **Separar responsabilidades:**  
  Dividir controladores y rutas. Cada ruta debe llamar a un controlador que maneje la lógica.  
- [ ] **Modularidad en rutas:**  
  Añadir middlewares específicos (ej. autenticación para usuarios) en cada grupo de rutas.

---

## 2. Código de las Rutas 🚦

### ✅ Lo que está bien:
- Rutas bien definidas con métodos HTTP correctos.
- Manejo de errores con try-catch.

### 🔧 Mejoras a implementar:
- [ ] **Estandarizar formato de respuesta:**  
  Usar un formato consistente (preferiblemente JSON) en todas las rutas.  
- [ ] **Validación de datos:**  
  Implementar `express-validator` para validar datos de entrada en rutas POST/PUT.  
- [ ] **Paginación:**  
  Añadir paginación en rutas que devuelven listas grandes (ej. `/users`).

---

## 3. Controladores y Middlewares 🛠️

### ✅ Lo que está bien:
- Middleware `notFoundMiddleware.js` bien diseñado.
- Controlador `errorController.js` delega correctamente.

### 🔧 Mejoras a implementar:
- [ ] **Eliminar redundancia:**  
  Usar directamente `notFoundMiddleware` en `server.js`, eliminar función `handleNotFound`.  
- [ ] **Manejo global de errores:**  
  Añadir middleware global para capturar errores inesperados al final de las rutas.

---

## 4. Base de Datos y Utilidades 💾

### ✅ Lo que está bien:
- `readData` y `writeData` funcionan correctamente con `fs/promises`.

### 🔧 Mejoras a implementar:
- [ ] **Validación de datos antes de escribir:**  
  Usar librería como `Joi` para validar datos antes de guardarlos.  
- [ ] **Manejo de concurrencia:**  
  Implementar bloqueo para evitar conflictos al escribir o migrar a base de datos real (MongoDB).

---

## 5. Configuración y Scripts ⚙️

### ✅ Lo que está bien:
- `package.json` con scripts completos y útiles.
- Uso de ESLint y Prettier para mantener código limpio.

### 🔧 Mejoras a implementar:
- [ ] **Variables de entorno:**  
  Instalar y usar `dotenv` para cargar variables de entorno en `server.js`.

---

## 6. Pruebas 🧪

### ✅ Lo que está bien:
- Pruebas básicas para la base de datos (`database.test.js`).

### 🔧 Mejoras a implementar:
- [ ] **Cobertura de pruebas:**  
  Añadir tests para rutas y controladores usando `supertest`.  
- [ ] **Mocking:**  
  Usar `jest.mock()` para simular funciones de lectura/escritura y evitar dependencia del archivo real.

---

## 7. Documentación 📚

### ✅ Lo que está bien:
- README.md claro y con instrucciones para instalar y ejecutar.

### 🔧 Mejoras a implementar:
- [ ] **Documentación API:**  
  Crear documentación para las rutas y parámetros usando Swagger o Postman.

---

## 📊 Resumen de la Valoración

| Aspecto                | Estrellas | Comentarios                                    |
|------------------------|-----------|-----------------------------------------------|
| Estructura del Proyecto | ⭐⭐⭐⭐      | Bien organizada, pero mejorar separación.     |
| Código de las Rutas    | ⭐⭐⭐       | Funcional, falta consistencia y validaciones. |
| Controladores/Middlewares | ⭐⭐⭐⭐    | Bien, pero redundancias y falta manejo global.|
| Base de Datos          | ⭐⭐⭐⭐      |
