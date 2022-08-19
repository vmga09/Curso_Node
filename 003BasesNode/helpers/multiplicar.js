const fs = require('fs');
const escribir = (numero) => {
    let salida = '';
    let nombreArchivo = 'tabla-'+numero+'.txt';
    return new Promise((resolve, reject) => {
        for(i=1; i <= 10 ; i++){
            salida += `${numero}x${i} = ${numero*i}\n`;
        }
       
            if(fs.writeFileSync(nombreArchivo,salida)){
                resolve(nombreArchivo);
            }else{
                reject('No se puede escribir ');
            }
    }
    )};


module.exports = {
    escribir
}