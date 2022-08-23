import { leerInput, inquirerMenu, pausa } from './helpers/inquirer.js';
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
            const lugar = await leerInput('Ciudad: ');
            await busquedas.ciudad(lugar);
            //console.log(lugar);

            // Buscar los lugares

            // Selecionar el lugar

            // Datos del clima

            // Mostar resultado

            console.log('\nInformacion de la ciudad\n'.blue);
            console.log('Ciudad: ',);
            console.log('Lat:',);
            console.log('Lng:',);
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