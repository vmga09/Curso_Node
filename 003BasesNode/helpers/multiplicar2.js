const fs = require('fs');
const escribir = async (numero) => {
    let salida = '';
    let nombreArchivo = 'tabla-' + numero + '.txt';
    try {
        for (i = 1; i <= 10; i++) {
            salida += `${numero}x${i} = ${numero * i}\n`;
        }

        fs.writeFileSync(nombreArchivo, salida);
        return nombreArchivo;

    } catch (error) {
        throw error;
    }

}



module.exports = {
    escribir
}