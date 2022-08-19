const fs = require('fs');
const colors = require('colors');
const escribir = async (numero,listar,hasta) => {
    let salida = '';
    let nombreArchivo = 'tabla-' + numero + '.txt';
    try {
        for (i = 1; i <= hasta; i++) {
            salida += `${numero}x${i} = ${numero * i}\n`;
        }

        fs.writeFileSync(nombreArchivo, salida);
        if(listar){
            console.log('================'.blue);
            console.log(salida.green.underline.red);
        }

        return nombreArchivo;

    } catch (error) {
        throw error;
    }

}



module.exports = {
    escribir
}