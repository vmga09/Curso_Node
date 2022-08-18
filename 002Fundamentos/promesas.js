const empleados = [
    {
       id: 1,
       nombre: 'Victor'
    },
    {
       id: 2,
       nombre: 'Benjamin'
    },
    {
       id: 3,
       nombre: 'Matilda'
    },
    {
       id: 4,
       nombre: 'Vicente'
    }
];

const salarios = [
   {
      id: 1,
      salario: 1000
   },
   {
      id: 2,
      salario: 500
   },
   {
      id: 3,
      salario: 600
   }
];



const getEmpleado = (id) => { 
   

    const promesa = new Promise((resolve, reject) => {
        const empleado = empleados.find((e)=>{
            return e.id === id;
        })?.nombre;

        if(empleado){
            resolve(empleado);
        }else{
            reject(`No existe información para el ${id}`);

        }




    });

    return promesa;
 
};

id = 10;

getEmpleado(id)
  .then((e) => {console.log(e)})
  .catch((e) => {console.log(e)});
