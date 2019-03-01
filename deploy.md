#HOW TO DEPLOY TO HEROKU

## PREPARAR EXPRESS

1 - Instalar y configurar el modulo "dotenv".

- require('dotenv').config(); en la primera linea del servidor y de los seeds.
  2 - ASEGURAR que en el package.json en el script de start no esta nodemon!! solo "node ./bin/www"
  3 - ASEGURAR QUE TENEIS BIEN TODOS LOS MODULOS QUE ESTAIS USANDO EN EL PACKAGE.JSON DEL BACK.
  PARA PROBAR QUE ES ASÍ BORRAD LA CARPETA node_modules Y EJECUTAD UN "npm install". SI AL HACER ESTO
  NO OS SALE NINGUN ERROR AL EJECUTAR EL SERVIDOR. PODEIS SEGUIR.
  4 - En el fichero .env que teneis con las variables de entorno. Poner en las variables de entorno la URL de la BBDD mongo.
  4.1 - SUSTITUIR EN mongoose.connect(...) la url puesta a mano (la de localhost) por process.env.DB_URL. Para luego poder configurarla desde heroku.
  o como hayais nombrado la variable en vuestro .env
  5 - Si teneis login social con FB, Github, o otros. Comprobad en el panel de configuracion de la web social la url del callback no es localhost y si es
  la url de produción de heroku (este punto lo podeis hacer cuando tengais el deploy listo).
  5.1 - Si os hace falta, cread una variable de entorno en .env con la url local y configuradla con el dominio de producción en heroku.

## DEPLOY EN HEROKU

6 - Leer learning unit -> http://learn.ironhack.com/#/learning_unit/6520 (NO SIGAS SI NO HAS COMPLETADO ESTE PUNTO)
6.1 - Crear app en heroku (directamente en la web o en la linea de comandos)!!!!
6.2 - Bajar cliente terminal de heroku (heroku cli) para que en la terminal podamos ejecutar "heroku login" y poner nuestra cuenta de heroku.
6.3 - Ejecutar el comando para añadir el repositorio remoto de heroku en nuestro repo local.
6.4 - Comprobar que existe el remote "heroku" con el comando "git remote -v"
7 - Hacer PUSH del repositorio a heroku. git push heroku master
8 - MIRAR DESDE LA TERMINAL "heroku logs" (SUPERIMPORTANTE) SI HAY ERRORES
9 - BASE DE DATOS EN PRODUCCION
9.1 - CREAR LA BBDD DE PRODUCCIÓN en mongolab -> https://mlab.com/
9.2 - EN HEROKU EN LA PESTAÑA DE "SETTINGS" de vuestra aplicacion. HACED CLICK EN "Reveal Config Vars"
y poned el nombre de la variable que habeis usado para la configuración de la url de mongo y
pegais ahí la URL de conexión que os proporciona mongolab ("COPIADLA BIEN, prestad atencion al usuario y password")
9.3 - SI TENEIS SEEDS: Ejecutar los seeds con la url de producción para llenar la BBDD de prod. - para ello podeis ejecutarlos en local haciendo un export previo de la variable de entorno con la url de producción.
10 - Comprobar usanndo "heroku logs" en la raiz del proyecto que se haya deployado todo bien
y el servidor este corriendo.
11 - ENTRAR EN LA URL QUE OS PROPOCIONA HEROKU Y COMPROBAR QUE VAYA TODO

#TIPS ADICIONALES

1 - ATENCIÓN: Si estais usando uploads de imagenes, tened en cuenta que en producción en heroku se borran a los 30 minutos.
Para la demo es mejor usar URL fijas de internet (alias imagenes de google imagenes o cloudinary)
2 - Si queréis ver el log en tiempo real usar: "heroku logs --tail"
