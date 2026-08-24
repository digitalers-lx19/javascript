# Geolocation

Interfaz que permite obtener la _ubicacion geografica_ del usuario a traves del navegador. Utiliza GPS, redes WiFi, señales de telefonía y otras fuentes para determinar la posicion del dispositivo. Es comunmente usada en aplicaciones de mapas, comercios cercanos y servicios basados en ubicacion.

## Metodos

| Metodo | Descripcion |
|-|-|
| __getCurrentPosition(`success`, `error`, `options`)__ | Obtiene la posicion actual |
| __watchPosition(`success`, `error`, `options`)__ | Monitorea cambios de posicion |
| __clearWatch(`id`)__ | Detiene el monitoreo de posicion |

## Propiedades

| Propiedad | Descripcion |
|-|-|
| __coords.latitude__ | Latitud en grados decimales |
| __coords.longitude__ | Longitud en grados decimales |
| __coords.accuracy__ | Precision en metros |
| __coords.altitude__ | Altitud en metros |
| __coords.heading__ | Direccion en grados |
| __coords.speed__ | Velocidad en metros por segundo |

## Implementacion

```js
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        function(position) {
            console.log('Latitud:', position.coords.latitude);
            console.log('Longitud:', position.coords.longitude);
            console.log('Precision:', position.coords.accuracy, 'metros');
        },
        function(error) {
            console.error('Error de geolocalizacion:', error.message);
        },
        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }
    );
}
```

## Monitoreo de posicion

```js
const watchId = navigator.geolocation.watchPosition(
    function(position) {
        console.log('Posicion actualizada:', {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        });
    },
    function(error) {
        console.error('Error:', error.message);
    }
);

navigator.geolocation.clearWatch(watchId);
```

[volver](../readme.md)
