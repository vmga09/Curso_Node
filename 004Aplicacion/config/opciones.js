import colors from 'colors';
const preguntas = [
    {
      type: 'list',
      name: 'opcion',
      message: 'Seleccione una opción',
      choices: [
        {
            value:'1',
            name:`${'1.'.blue} Crear tarea`
        },
        {
            value:'2',
            name:`${'2.'.blue} Listar tareas` 
        },
        {
            value:'3',
            name:`${'3.'.blue} Listar tareas completadas`
        },
        {
            value:'4',
            name:`${'4.'.blue} Listar tareas pendientes`
        },
        {
            value:'5',
            name:`${'5.'.blue} Completar tarea(s)`
        },
        {
            value:'6',
            name:`${'6.'.blue} Eliminar tarea(s)`
        },
        {
            value:'0',
            name:`${'0.'.blue} Salir`
        }
      ],
    },
  ];

  const pausas = [
    {
      type: 'input',
      name: 'pausa',
      message: 'Presiones ENTER para continuar'
    },
  ];

  export  {
    preguntas,
    pausas
}