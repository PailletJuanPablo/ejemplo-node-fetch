# API

- Conjunto de endpoints (ruta o URL) que EXPONE un servidor.
- Permitir a un sistema comunicarse con otros independientemente del CLIENTE
- Recibir peticiones HTTP (Métodos: GET, POST...), encabezados, url
- Devolver un JSON
- Arquitectura ClIENTE / SERVIDOR
- Servidor recibe petición de cliente y devuelve una respuesta

## Flujo de interacción con API

1. Petición del Cliente hacia el endpoint que expone el servidor
2. Validarla y Procesarla
3. Servidor envía respuesta en JSON
4. Cliente parsea respuesta en JSON para poder entenderla

--

Listado de productos desde API

1. Petición desde el cliente -> GET servidor.com/api/productos
2. Validar y procesar la petición
3. Devolver un array en JSON
4. Cliente parsea respuesta en JSON y posteriormente hace forEach para mostrar título de cada producto

--

## Arquitectura Cliente / Servidor

- Cliente: Realiza peticiones
- Servidor: Devuelve respuesta

## Node Fetch

- Node se convierta en cliente -> Realizar peticiones HTTP
  - Método: GET POST PUT PATCH DELETE
  - Ruta: URL hacia donde realizamos la petición. server.com?dato1=aas&dato2=adsad
  - Header: Datos adicionales que se envían en la petición
  - Body (cuerpo): POST PUT PATCH

1. Desde node vamos a realizar una petición hacia una URL
2. Servidor va a validar y procesar esta petición
3. Servidor devuelve datos en JSON a Node
4. Node parsea JSON

### Instalación

            npm i node-fetch@2

- nodeFetch = require('node-fetch')
- nodeFetch('url').then()
