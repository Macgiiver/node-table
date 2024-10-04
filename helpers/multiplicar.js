/* jshint esversion: 6 */

const fs = require('fs');
const { argv } = require('process');
const colors = require('colors');

const crearArchivo = (base = 5, listar = false, hasta = 10) => {
    return new Promise((resolve) => {
        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            // Aplicar los colores deseados
            const baseColor = base.toString().green; // Base en verde
            const multiplierColor = 'x'.blue; // 'x' en azul
            const numberColor = i.toString().yellow; // Número en amarillo
            const equalColor = '='.white; // '=' en blanco
            const resultColor = (base * i).toString().green; // Resultado en verde

            salida += `${base} x ${i} = ${base * i}\n`;

            consola += `${baseColor} ${multiplierColor} ${numberColor} ${equalColor} ${resultColor}\n`;
        }

        if (listar) {
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        resolve(`tabla-${base}.txt`);
    });
};

module.exports = {
    crearArchivo
};