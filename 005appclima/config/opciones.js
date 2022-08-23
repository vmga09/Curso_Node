import colors from 'colors';
const preguntas = [
    {
      type: 'list',
      name: 'opcion',
      message: 'Seleccione una opción',
      choices: [
        {
            value: 1,
            name:`${'1.'.blue} Buscar una ciudad`
        },
        {
            value: 2,
            name:`${'2.'.blue} Ver historial de busqueda` 
        },
        {
            value: 0,
            name:`${'3.'.blue} Salir`
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