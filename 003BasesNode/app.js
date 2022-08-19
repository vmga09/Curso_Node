const helpers = require('./helpers/multiplicar2');
const argv = require('./config/yargs');



//console.log(argv)
//console.log(process.argv);
// const argv = process.argv[2].split('=',2)[1];

helpers.escribir(argv.b,argv.l,argv.h).then(archivo => console.log(archivo,'creado'))
            .catch(msg => console.log('No se puede escribir el archivo'));