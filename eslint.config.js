// eslint.config.js
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.js'],

    languageOptions: {
      ecmaVersion: 2020, // ES11
      sourceType: 'module', // para usar import/export

      // Definir variables globales que habilita el entorno es6 y node
      globals: {
        // Variables de ES6
        Set: 'readonly',
        Map: 'readonly',
        Promise: 'readonly',
        // Variables de Node.js
        process: 'readonly',
        module: 'readonly',
        require: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly'
      }
    },

    rules: {
      semi: ['error', 'always'], // exigir punto y coma
      quotes: ['error', 'single'], // comillas simples
      'no-unused-vars': ['warn'], // advertencia por variables no usadas
      'no-console': 'off', // permitir console.log
      'comma-dangle': ['error', 'never'], // no permitir coma final
      'space-before-function-paren': ['error', 'never'], // sin espacio antes de paréntesis en funciones
      curly: ['error', 'all'] // siempre usar llaves en if/else
    }
  }
]);
