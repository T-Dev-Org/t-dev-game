// Archivo localStorageUtils.js

// Función para guardar un valor en localStorage
function guardarEnLocalStorage (clave, valor) {
  try {
    // Convertir el valor a JSON antes de guardarlo
    const valorJSON = JSON.stringify(valor)
    localStorage.setItem(clave, valorJSON)
  } catch (error) {
    console.error('Error al guardar en localStorage:', error)
  }
}

// Función para recuperar un valor de localStorage
function obtenerDeLocalStorage (clave) {
  try {
    // Recuperar el valor del localStorage
    const valorJSON = localStorage.getItem(clave)
    if (valorJSON !== null) {
      // Convertir el valor JSON a un objeto JavaScript
      return JSON.parse(valorJSON)
    } else {
      return null // La clave no existe en localStorage
    }
  } catch (error) {
    console.error('Error al obtener de localStorage:', error)
    return null
  }
}

// Función para eliminar un valor de localStorage
function eliminarDeLocalStorage (clave) {
  try {
    localStorage.removeItem(clave)
  } catch (error) {
    console.error('Error al eliminar de localStorage:', error)
  }
}

// Función para limpiar todo el localStorage
function limpiarLocalStorage () {
  try {
    localStorage.clear()
  } catch (error) {
    console.error('Error al limpiar localStorage:', error)
  }
}

// Exportar las funciones como un módulo
export {
  guardarEnLocalStorage,
  obtenerDeLocalStorage,
  eliminarDeLocalStorage,
  limpiarLocalStorage
}
