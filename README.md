# Cenco-Shopping
Pequeña aplicación que incluye carrito de compras. Esta se está desarrollando con lenguajes NodeJS utilizando Express para el backend, ReactJS en el Frontend y los registros se están guardando en una base de datos MongoDB.

## Instalación
Para instalar la aplicación (luego de clonar el repositorio) debes instalar las dependencias utilizando el manejador de paquetes de nodejs [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) con el siguiente comando:

```bash
npm install
```

Luego, asegúrate de tener iniciado el servicio de MongoDB.
Aplicación aún no terminada al 100%, pero puedes correrla usando el siguiente comando:
```bash
npm run dev
```

Una vez realizado el comando la aplicación podrá ser accedida de manera local y por defecto en el puerto 3000, (dicho puerto puede cambiarse en el archivo index.js).
```bash
http://localhost:3000/
```

## Rest API
- Para obtener el listado de todos los productos, se debe realizar una petición mediante método GET al siguiente endpoint.
```bash
/api/products
```
- Para agregar un producto nuevo, se debe enviar una petición mediante método POST al siguiente endpoint.
```bash
/api/products
```
El cuerpo de la petición debe tener la siguiente estructura en formato JSON:
```bash
{
    "code": "TS1B",
    "name": "Polera Blanca",
    "price": "4990",
    "discount": "490"
}
```

- Para modificar un producto ya existente, se debe enviar una petición mediante método PUT indicando el ID del producto al siguiente endpoint.
```bash
/api/products/{id}
```
El cuerpo de la petición debe tener la siguiente estructura en formato JSON:
```bash
{
    "code": "TS1B",
    "name": "Polera Blanca",
    "price": "4990",
    "discount": "490"
}
```

- Para eliminar un producto existente, se debe enviar una petición mediante método DELETE indicando el ID del producto al siguiente endpoint.
```bash
/api/products/{id}
```