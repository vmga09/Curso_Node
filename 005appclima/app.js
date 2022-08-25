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
            if (id === '0')continue;
            const lugarSel = lugares.find(l => l.id === id);
            busquedas.agregarHistorial(lugarSel.nombre);
            // Datos del clima
            const clima = await busquedas.clima(lugarSel.lat,lugarSel.lng);
            // Mostar resultado
            console.clear();
            console.log('\nInformacion de la ciudad\n'.blue);
            console.log('Ciudad: ',lugarSel.nombre.green);
            console.log('Lat:',lugarSel.lat);
            console.log('Lng:',lugarSel.lng);
            console.log('Decripción:',clima.desc.green);
            console.log('Temperatura:',clima.temp);
            console.log('Mínima:',clima.min);
            console.log('Máxima:',clima.max);
            break;
            case 2:
            
            busquedas.historialCapitalizado.forEach((lugar,i)=>{
            const idx = `${i +1}.`.green
            console.log(`${idx} ${lugar}`);
            })        
            break;
            default:
                break;
        }
        await pausa();
    }while (opt !== 0);

 

}


main();