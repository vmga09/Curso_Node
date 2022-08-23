import colors from 'colors';
import { Tarea } from "./tarea.js";

class Tareas {
    _listado = {};

    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach(key =>{
           const tarea = this._listado[key];
           listado.push(tarea);
        });
        return listado;
    }

    constructor (){
        this._listado = {};
    }

    borrarTarea(id = ''){
        if (this._listado[id]){
            delete this._listado[id];
        }

    }



    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    cargarTareas(tareas = []){
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        }) 
    }

    listadoCompleto(){
        /* // Mi solución
        for (let i = 0; i <= this.listadoArr.length -1; i++) {
            if(this.listadoArr[i].completadoEn === null){
                console.log(colors.red( `${i+1} .- ` )+`${this.listadoArr[i].desc} :: `+'Pendiente'.red);
            } else {
                console.log(colors.green( `${i+1} .- ` )+`${this.listadoArr[i].desc} :: `+'Completada'.green);
            }
        } */

        this.listadoArr.forEach((tarea,i)=>{
            const idx = `${i +1}`.green;
            const { desc , completadoEn } = tarea;
            const estado = ( completadoEn)
                            ? 'Completada'.green
                            : 'Pendiente'.red;

            console.log(`${idx} ${ desc } :: ${estado}`);
        })

    } 

    listarPendientesCompletadas(completadas = true){
        let contador = 0;
        this.listadoArr.forEach((tarea,i)=>{
            const { desc , completadoEn } = tarea;
            const estado = ( completadoEn)
                    ? 'Completada'.green
                    : 'Pendiente'.red;
        if(completadas){
            if(completadoEn){
                contador += 1;
                console.log(`${contador.toString().green} ${ desc } :: ${completadoEn.green}`);
            }
        }else {
            if(!completadoEn){
                contador += 1;
                console.log(`${contador.toString().red} ${ desc } :: ${estado}`);
            }
        }

        })


    }

    toggleCompletadas(ids = []){
        ids.forEach(id => {
            const tarea = this._listado[id];
            if(!tarea.completadoEn){
                tarea.completadoEn = new Date().toISOString()
            }

        });

        this.listadoArr.forEach((tarea)=>{
            if(!ids.includes(tarea.id)){
                this._listado[tarea.id].completadoEn = null;
            }


        })

    }
}

export {
    Tareas
}