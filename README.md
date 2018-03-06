# Front end Challenge - React
 Juan Manuel Ros
 ## Docker
 He dockerizado la aplicación como se pedia en el 'bonus point'. Para levantar la app introducir el comando `docker-compose up`
 Si no se tiene instalado docker y se quiere levantar la app a mano:
 

 - carpeta back: introducir el comando  `npm install` para instalar las dependencias y  `npm start` para levantar la aplicación
 - carpeta front: introducir el comando `npm install` para instalar las dependencias y `npm run dev` para levantar la aplicación

### Api
La api la he realizado con node.js y express con datos mockeados servidos en el endpoint `/phones`.
Además he usado cors para evitar problemas de interconexión entre el front y la api.
### Frontend app
Además de react/redux, he usado:

 -  redux-thunk: (en lugar de Axios) para hacer peticiones a la API
 - redux-logger: Middlware que facilita el debug de la store de Redux. La extensión de Chrome se puede descargar en https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=es
 - react-router: Sistema de enrutado de la aplicación
 - material-ui (version estable): como libreria de componentes que como me comentasteis, recomendabais utilizarla
 - SASS: Como preprocesador CSS.
 - Enzyme y Jest: Para test unitarios
 - Cypress: Para test e2e
 
 En el tema de estilos:
 - La aplicación es responsive siguiendo el patrón de diseño mobileFirst
 - He usado la nomenclatura BEM para dar nombre a las clases
 - Uso Flexbox para ordenar y colocar distintos elementos
	 - He incluido autoPrefixer por si se prueba la aplicación en un IE11 que los estilos se vean correctamente https://caniuse.com/#feat=flexbox

 
 #### Ejecutar test
 - Para ejecutar los test unitarios introducir el comando `npm test`. El resultado se verá por consola.
 - Para los de integración (e2e), ejecutar `npm run cypress`. Se abrirá una ventana nueva y hacer click en la opción de "Run all tests" situada en la parte derecha de la ventana. Se abrirá otra pantalla donde se verá como la app se somete a dichos tests

#### Extra
He añadido una opción nueva la cual sirve para cambiar el modo de como se representan los elementos en pantalla. Esta opción solo se verá en pantallas  con un ancho a partir de 992px (desktop)
