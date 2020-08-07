//path es un recurso de node que nos permite saber donde estamos dentro de las carpetas o donde nos estamos
//moviendo en el proyecto ya sea local o en la nube
const path = require('path');

//requerimos el archivo para trabajar con html, este archivo viene con la dependencia que instalamos de 
//html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

/**
 * Modulos que vamos a exportar donde viene cada configuracion de lo que va a suceder.
 * module.exports es un objeto donde vive la configuracion.
 */
module.exports = {
    //definimos nuetro punto de entrada: Aqui vive elc codigo incial yde aqui parte al desarrollo
    entry: './src/index.js',

    //definimos el output: donde se enviar el proyecto estructurado y compilado lista para produccion
    output: {
        //definimos un objeto  que nos permite decir el path (hacia donde lo voy a poner el proyecto exportado)
        //__dirname -> donde se encuentre la carpeta alli vas a poner una nueva carpeta (dist)
        path: path.resolve(__dirname, 'dist'),
        //especificamos elnombre del archivo que vamos a generar. El compilado de todo lo que tiene nuestro proyecto en JS
        //se va a llamar main.js cuando este listo para produccion
        filename: 'main.js',
    },

    //definimos las extensiones que va a utilizar el proyecto
    resolve: {
        //pasamos un arreglo de las extensiones que se va a utilizar
        extensions: ['.js'], //solo utilizaremos en este caso archivos JS
    },

    //Definimos un modulos con las reglas necesarias que vas a tener el proyecto.
}