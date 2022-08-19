const helpers = require('./helpers/multiplicar2');

console.log(process.argv);

const argv = process.argv[2].split('=',2)[1];
console.log(argv);

helpers.escribir(argv).then(archivo => console.log(archivo,'creado'))
            .catch(msg => console.log('No se puede escribir el archivo'));