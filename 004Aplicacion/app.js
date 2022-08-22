//require('colors');
import colors from 'colors';

//const { inquirerMenu } = require('./helpers/inquirer');
import {inquirerMenu, pausa, leerInput} from './helpers/inquirer.js';
import { saveFile,loadFile } from './helpers/saveFile.js';
import { Tarea } from './models/tarea.js';
import { Tareas } from './models/tareas.js';


//const {mostrarMenu, pausa} = require('./helpers/mensajes');


const main = async() => {

    let opt = '';
    const tareas = new Tareas();
    const tareasDB = loadFile();
    await pausa();
    if(tareasDB) {
        tareas.cargarTareas(tareasDB);
    } 


    do {
        // listar menu 
        opt = await inquirerMenu()
        switch (opt) {
            case '1':
            const desc = await leerInput('Descripción: ');
            tareas.crearTarea(desc);   
            break;
            case '2':
            console.log(tareas.listadoArr);           
            break;
     
            default:
                break;
        }
        //saveFile(tareas.listadoArr);

        // console.log(opt);
        await pausa();
        //const tareas = new Tareas();
        //const tarea = new Tarea('Comprar comida');
        //console.log(tareas);
        //await pausa();
    }while (opt !== '0');

}

main();