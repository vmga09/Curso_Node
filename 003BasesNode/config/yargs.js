const argv = require('yargs')
            .option('b',{
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe:'Número requerido para realizar la operación'
            })
            .option('l',{
                alias: 'listar',
                type: 'boolean',
                demandOption: false,
                default:false,
                describe:'Despliega en pantalla las operaciones'
            })
            .option('h',{
                alias: 'hasta',
                type: 'number',
                demandOption: true,
                describe:'Número requerido para indicar hasta que número'
            })
            .check((argv,options) =>{
                if(isNaN(argv.b)){
                    throw 'La base tiene que ser un número'
                }
                return true;
            })
            .check((argv,options) =>{
                if(isNaN(argv.h) || argv.h <1){
                    throw 'Opción -h es obligatorio un numero O DEBE SER MAYOR A 1'
                }
                return true;
            })
            .argv;

module.exports = argv;
