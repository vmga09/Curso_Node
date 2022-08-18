const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder:'Regeneracion',
    getNombre(){
        return ` ${this.nombre} ${this.apellido} ${ this.poder}`;
    }
};

console.log(deadpool.getNombre());

const {nombre,apellido,poder}  = deadpool;

console.log(nombre,apellido,poder);


function imprime({nombre,apellido,poder}){
    console.log(nombre,apellido,poder);
}

const heores = ['deadpool', 'Superman','Batman'];

const [,,h3] = heores;

console.log(h3);


imprime(deadpool);