import axios from 'axios';


class Busqueda {
    historial = ['Talca','Paris','Londres'];
    constructor() {
        // Si la db existe

    }

    async ciudad(lugar = ''){
        
        //Petición http

       try {
        const resp =  await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/Santiago.json?limit=5&language=es&access_token=pk.eyJ1IjoiY3JpczdpYW5iYWNrIiwiYSI6ImNreWdndHJvcDBkdGYybm5zb216dWR6Y3AifQ.glT8w9hgQxLBh2laVu5JCg');
        console.log(resp.data.features);
        return []; // retorna los lugares
       } catch (error) {
         
        return console.log(error.response.status, error.response.statusText);
       }



    }
}

export {
    Busqueda
        }