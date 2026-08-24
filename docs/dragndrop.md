# DragNDrop

Interfaz que permite _arrastrar y soltar_ elementos dentro de una pagina web. Los usuarios pueden seleccionar un elemento arrastrable con el mouse, moverlo a una zona de destino y soltarlo para desencadenar una accion. Es util para interfaces interactivas como listas de tareas, galerias de imagenes y gestores de archivos.

## Eventos

| Evento | Descripcion |
|-|-|
| __dragstart__ | Se dispara cuando el usuario comienza a arrastrar un elemento |
| __dragend__ | Se dispara cuando el usuario termina de arrastrar un elemento |
| __dragenter__ | Se dispara cuando el elemento arrastrado entra en una zona valida |
| __dragover__ | Se dispara mientras el elemento se arrastra sobre una zona valida |
| __dragleave__ | Se dispara cuando el elemento arrastrado sale de una zona valida |
| __drop__ | Se dispara cuando el usuario suelta el elemento en una zona valida |

## Metodos de DataTransfer

| Metodo | Descripcion |
|-|-|
| __setData(`format`, `data`)__ | Establece los datos a arrastrar |
| __getData(`format`)__ | Obtiene los datos arrastrados |
| __clearData()__ | Elimina todos los datos arrastrados |
| __dropEffect__ | Efecto visual que se mostrara al soltar |
| __effectAllowed__ | Efecto permitido durante la operacion |

## Atributos

| Atributo | Descripcion |
|-|-|
| __draggable__ | Indica si el elemento se puede arrastrar |

## Implementacion

```js
const draggable = document.getElementById('draggable');
const dropzone = document.getElementById('dropzone');

draggable.setAttribute('draggable', 'true');
draggable.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', 'Datos arrastrados');
    e.dataTransfer.effectAllowed = 'move';
});
dropzone.addEventListener('dragenter', (e) => {
    e.preventDefault();
    dropzone.classList.add('over');
});
dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
});
dropzone.addEventListener('dragleave', () => {
    dropzone.classList.remove('over');
});
dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    console.log('Datos recibidos:', data);
    dropzone.classList.remove('over');
});
draggable.addEventListener('dragend', () => {
    dropzone.classList.remove('over');
});
```

[volver](../readme.md)