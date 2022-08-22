//const inquirer = require('inquirer');
import inquirer from 'inquirer';
import colors from 'colors';
import {preguntas,pausas} from '../config/opciones.js' 

//require('colors');



// const preguntas = [
//     {
//         type: 'list',
//         name: 'opcion',
//         messages:'¿Qué desea hacer?',
//         choices:['opt1', 'opt2','opt3','opt4']   
//     }
// ];


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

export  {
    inquirerMenu,
    pausa,
    leerInput,
}