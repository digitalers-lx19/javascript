# Web Storage

Interfaz que permite almacenar datos en el navegador de forma persistente. Proporciona dos mecanismos de almacenamiento: __localStorage__, que guarda datos sin fecha de caducidad, y __sessionStorage__, que los elimina al cerrar la ventana. Es ideal para guardar preferencias de usuario, sesiones y datos de aplicaciones web.

## Metodos

| Metodo | Descripcion |
|-|-|
| __setItem(`key`, `value`)__ | Guarda un valor en el almacenamiento |
| __getItem(`key`)__ | Obtiene un valor por su clave |
| __removeItem(`key`)__ | Elimina un valor por su clave |
| __clear()__ | Elimina todos los valores del almacenamiento |
| __key(`index`)__ | Obtiene la clave en la posicion indicada |
| __length__ | Devuelve la cantidad de elementos almacenados |

## Implementacion

```js
localStorage.setItem('usuario', 'Juan');
localStorage.setItem('edad', '30');

const usuario = localStorage.getItem('usuario');
console.log(usuario); // 'Juan'

localStorage.removeItem('edad');

sessionStorage.setItem('sesion', 'abc123');
const sesion = sessionStorage.getItem('sesion');
console.log(sesion); // 'abc123'
```

## Uso con JSON

```js
const datos = {
    nombre: 'Maria',
    preferencias: { tema: 'oscuro', idioma: 'es' }
};

localStorage.setItem('configuracion', JSON.stringify(datos));

const config = JSON.parse(localStorage.getItem('configuracion'));
console.log(config.nombre); // 'Maria'
console.log(config.preferencias.tema); // 'oscuro'
```

[volver](../readme.md)
