console.log('Inicio de Programa...');

setTimeout(()=>{
    console.log('Primer Timeout');
}, 2000);


setTimeout(()=>{
    console.log('Segundo Timeout');
}, 0);


setTimeout(()=>{
    console.log('Tercero Timeout');
}, 0);

console.log('Fin de Programa...');