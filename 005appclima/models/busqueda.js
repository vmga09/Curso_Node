import fs from 'fs';
import axios from 'axios';


class Busqueda {
    historial = [];
    dbPath = './db/database.json';
    constructor() {
        // Si la db existe
        this.leerDB();

    }

    get historialCapitalizado(){
        return this.historial.map(lugar => {
            let palabras = lugar.split(' ');
            palabras = palabras.map(p=> p[0].toUpperCase() + p.substring(1));
            return palabras.join(' ');
        })
    }

    get paramsMapbox(){
        return {
            'limit':5,
            'language':'es',
            'access_token':process.env.MAPBOX
        }
    }

    get paramsWeather(){
        return {
            'appid':process.env.OWEATHER,
            'units':'metric',
            'lang':'es'
        }
    }

    async ciudad(lugar = ''){
        
        
       try {
        //Petición http

        const instance = axios.create ({
            baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
            params: this.paramsMapbox
        });

        const resp = await instance.get();
        return resp.data.features.map( lugar => ({
            id: lugar.id,
            nombre: lugar.place_name,
            lng: lugar.center[0],
            lat: lugar.center[1],
        }));

       } catch (error) {
         
        return console.log(error.response.status, error.response.statusText);
       }



    }


    async clima(lat,lon){
        
        
        try {
         //Petición http
 
         const instance = axios.create ({
             baseURL: `https://api.openweathermap.org/data/2.5/weather`,
             params: {
                lat:lat,
                lon:lon,
                appid: process.env.OWEATHER,
                units:'metric',
                lang:'es'
             }



         });
 
         const resp = await instance.get();
       
         const { weather, main} = resp.data;
         return {
            desc: weather[0].description,
            min:  main.temp_min,
            max: main.temp_max,
            temp:main.temp
         }   
    //    // console.log(resp.data);
    //     console.log(resp.data.weather[0].description);
    //     console.log(resp.data.main.temp);
    //     console.log(resp.data.main.temp_min);
    //     console.log(resp.data.main.temp_max);

 
        } catch (error) {
          
        //  return console.log(error.response.status, error.response.statusText);
        }
 
 
 
     }

     agregarHistorial(lugar = ''){

        //Prevenir duplicidad

        if(this.historial.includes(lugar.toLocaleLowerCase())){
            return;
        }
        this.historial.unshift(lugar.toLocaleLowerCase());
        this.guardarDB();

     }

     // Grabar en DB
     guardarDB(){

        const payload = {
            historial: this.historial
        };

        fs.writeFileSync(this.dbPath, JSON.stringify(payload));

     }

     leerDB(){
        if(!fs.existsSync(this.dbPath)){
            return null;
        }
        const info = fs.readFileSync(this.dbPath, {encoding:'utf-8'});
         
        const data = JSON.parse(info);
        this.historial = data.historial
        return this.historial;
    }

     

    
}

export {
    Busqueda
        }