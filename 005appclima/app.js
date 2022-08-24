import dotenv from 'dotenv';
dotenv.config({ path:'./env/.env' });
import { leerInput, inquirerMenu, pausa, listarLugares } from './helpers/inquirer.js';
import { Busqueda } from './models/busqueda.js';


const main = async()=>{
    const busquedas = new Busqueda();
    let opt ;

    
    do {
        // listar menu 
        opt = await inquirerMenu();
        switch (opt) {
            case 1:
            // Mostar mensajes 
            const termino = await leerInput('Ciudad: ');
            // Buscar los lugares
            const lugares = await busquedas.ciudad(termino);
            // Selecionar el lugar
            const id = await listarLugares(lugares);
            const lugarSel = lugares.find(l => l.id === id);
            //console.log({lugarSel});
            // Datos del clima

            // Mostar resultado

            console.log('\nInformacion de la ciudad\n'.blue);
            console.log('Ciudad: ',lugarSel.nombre);
            console.log('Lat:',lugarSel.lat);
            console.log('Lng:',lugarSel.lng);
            console.log('Temperatura:',);
            console.log('Mínima:',);
            console.log('Máxima:',);
            break;
            case 2:
            console.log('opcion 2')          
            break;
            default:
                break;
        }
        await pausa();
    }while (opt !== 0);

 

}


main();