import axios from 'axios';


class Busqueda {
    historial = ['Talca','Paris','Londres'];
    constructor() {
        // Si la db existe

    }

    get paramsMapbox(){
        return {
            'limit':5,
            'language':'es',
            'access_token':process.env.MAPBOX
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
}

export {
    Busqueda
        }