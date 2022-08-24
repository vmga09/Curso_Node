
import inquirer from 'inquirer';
import colors from 'colors';
import {preguntas,pausas} from '../config/opciones.js' 
import Choices from 'inquirer/lib/objects/choices.js';


const inquirerMenu = async () => {
    console.clear();
    console.log('==============================='.green);
    console.log('Seleccione opciones del Menu'.white);
    console.log('===============================\n'.green);

    const {opcion} = await inquirer.prompt(preguntas);
    return opcion;
}

const pausa = async () => {
    
    const {pausa} = await inquirer.prompt(pausas);
    return pausa;
}

const leerInput = async(message) =>{
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value){
                if(value.length ===0){
                    return 'Por favor ingrese un valor'
                }
                return true;
            }
          }
    ];
    
    const {desc} = await inquirer.prompt(question);
    return desc;
}

const listadoTareasBorrar = async(tareas =[]) =>{
    const choices = tareas.map((tarea,i)=> {
        const idx = `${i +1}. `.green;
        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc} `
        }

    })

    choices.unshift({
        value: '0',
        name:'0.'.green + 'Cancelar'
    });

    const preguntas = [
        {
        type: 'list',
        name : 'id',
        message: 'Borrar',
        choices
        }
    ]
    const {id} = await inquirer.prompt(preguntas);
    return id;
}

const listarLugares = async(lugares =[]) =>{
    const choices = lugares.map((lugar,i)=> {
        const idx = `${i +1}. `.green;
        return {
            value: lugar.id,
            name: `${idx} ${lugar.nombre} `
        }

    })

    choices.unshift({
        value: '0',
        name:'0.'.green + 'Cancelar'
    });

    const preguntas = [
        {
        type: 'list',
        name : 'id',
        message: 'Seleciones lugar:',
        choices
        }
    ]
    const {id} = await inquirer.prompt(preguntas);
    return id;
}

const confirmar = async (message)=>{

    const  question = [
    {
        type: 'confirm',
        name: 'ok',
        message 
    }
    ]
    const {ok} = await inquirer.prompt(question);
    return ok;
}

const mostrarListadoCheckList = async(tareas =[]) =>{
    const choices = tareas.map((tarea,i)=> {
        const idx = `${i +1}. `.green;
        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc} `,
            checked: (tarea.completadoEn) ? true : false 
        }

    })

 

    const pregunta = [
        {
        type: 'checkbox',
        name : 'ids',
        message: 'Seleccione',
        choices
        }
    ]
    const {ids} = await inquirer.prompt(pregunta);
    return ids;
}

export  {
    inquirerMenu,
    pausa,
    leerInput,
    listarLugares,
    confirmar,
    mostrarListadoCheckList
}