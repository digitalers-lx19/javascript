# History

Interfaz que permite manipular el _historial de navegacion_ del navegador, es decir, las URLs visitadas por el usuario. Facilita la navegación hacia adelante y hacia atrás, así como modificar la URL sin recargar la página, manteniendo una experiencia de navegación fluida en aplicaciones web.

## Metodos

| Metodo | Descripcion |
|-|-|
| __pushState(`state`, `title`, `url`)__ | Agrega una nueva entrada al historial |
| __replaceState(`state`, `title`, `url`)__ | Reemplaza la entrada actual del historial |
| __back()__ | Navega hacia atras en el historial |
| __forward()__ | Navega hacia adelante en el historial |
| __go(`delta`)__ | Navega un numero especifico de entradas |

## Propiedades

| Propiedad | Descripcion |
|-|-|
| __length__ | Devuelve la cantidad de entradas en el historial |
| __state__ | Devuelve el estado de la entrada actual del historial |

## Eventos

| Evento | Descripcion |
|-|-|
| __popstate__ | Se dispara cuando cambia la entrada activa del historial |

## Implementacion

```js
const state = { page: 1, filter: 'recientes' };
const title = 'Pagina 1';
const url = '?page=1&filter=recientes';

history.pushState(state, title, url);

window.addEventListener('popstate', function(event) {
    console.log('Estado anterior:', event.state);
});
```

[volver](../readme.md)
