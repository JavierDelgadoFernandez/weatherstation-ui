# WeatherStation user interface
WeatherStation user interface using [Relay Modern](https://facebook.github.io/relay/).

## Install the packages
Install the javascript packages needed by the application:

```sh
npm install
```

## Run the development web server
Start the development web server:
```sh
npm start
```
Now, you can open ``http://localhost:8080/`` in a browser.

## Backend
The application requires the backend in order to provide the services. Follow the instructions of
[JavierDelgadoFernandez/weatherstation](https://github.com/javierdelgadofernandez/weatherstation) 

## GraphQL queries modification

If you modify the GraphQL query, you will have to recompile the files:

```sh
npm run relay
```
