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

const getEmpleado = (id, callback) => { 
    const empleado = empleados.find((e)=>{
        return e.id === id;
    });

    if(empleado){
        callback(null,empleado);
    }else {
        callback(`Empleado ${id} no existe`);
    }
};

const getSalario = (id, callback) => { 
    const salario = salarios.find((e)=>{
        return e.id === id;
    });

    if(salario){
        callback(null,salario);
    }else {
        callback(`${id}`);
    }
};


const id = 3;

getEmpleado(id, (err,empleado)=>{
    if(err){
        console.log('ERROR!');
        return console.error(err);
    }
    // console.log('empleado existe');
    // console.log(empleado);
    getSalario(id, (err,salario)=>{
        if(err){
            console.log(`El salario del empleado ${empleado.nombre} no existe`);
            return console.error(err);
        }
        console.log(`Salario  existe del empleado ${empleado.nombre} es ${salario.salario}`);
        //console.log(salario);
    });


});


// getSalario(id, (err,salario)=>{
//     if(err){
//         console.log('ERROR!');
//         return console.error(err);
//     }
//     console.log('Salario  existe');
//     console.log(salario);
// });