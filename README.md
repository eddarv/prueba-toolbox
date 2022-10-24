# Prueba para Toolbox de React + Rest API (NodeJS)

En este ejemplo vemos como implementar una **App fullstack** usando [React](https://reactjs.org/) (frontend), [Express](https://expressjs.com/), [Node](https://nodejs.org/) (backend).

## Empezando

### 1. Descargar el repositorio e instalar las dependencias

Descarga el repositorio:

```
git clone git@github.com:eddarv/prueba-toolbox.git
```

Ingresa en la carpeta "frontend" desde la carpeta descargada e instala las dependencias del front-end:
```
cd frontend
npm install
```

Ingresa en la carpeta "backend" desde la carpeta descargada e instala las dependencias del back-end:
```
cd backend
npm install
```

### 2. Inicia el servidor

Dentro de la carpeta "backend" ejecutar (se ejecuta en el puerto 5000):

```
npm start
```

## 3. Despliega el front-end

Dentro de la carpeta "frontend" ejecutar (se ejecuta en el puerto 3000):

```
npm start
```

La aplicación está funcionando, ingresa a [`http://localhost:3000/`](http://localhost:3000/) en tu navegador para explorar la UI.

Dentro de la interfaz encontrarás dos secciones, la primera posee una lista con los datos de los archivos disponibles,  que puedes filtrar por nombre a través de un "Select".

En la sección azul se listan el total de archivos que existen en la API.



## Siguientes pasos

- Si quieres entender como funciona el código, cada archivo JS tiene sus respectivos comentarios.
- Si quieres hacer test del back-end, ingresa en la carpeta "backend" y ejecuta el siguiente comando:

```
npm test
```
