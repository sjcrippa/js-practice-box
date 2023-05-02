/* // Variables
let valor = 10;
console.log(typeof(valor));
let texto = 'El valor definido es: ' + valor;
console.log(typeof texto);
const valor2 = 50;
console.log(valor2);

// Arrays
const productos = [
    {id: 1, nombre: 'Coca Cola', precio:600},
    {id: 2, nombre: 'Pepsi', precio:580},
    {id: 3, nombre: 'Manaos', precio:350},
];
console.log(productos);
console.log(typeof productos);

// Objetos
const cocaCola = {
    id: 1,
    nombre: 'Coca Cola',
    precio: 600
};
console.log(cocaCola);

// Clases
class Producto {
    constructor(id, nombre, precio, calorias) {
        this.idProducto = id;
        this.nombreProducto = nombre;
        this.precioProducto = precio;
        this.caloriasProducto = calorias;
    }
    leyEtiquetado() {
        if(this.caloriasProducto < 150){
            return 'Producto con bajas calorias'
        } if((this.caloriasProducto >= 150) && (this.caloriasProducto <= 300)) {
            return 'Producto con medianas calorias'
        } else {
            return '[ATENCION] Producto con altas categorias!'
        }
    }
} // y luego creamos una nueva instancia
const producto1 = new Producto(1, 'Coca Cola', 750, 300);
const producto2 = new Producto(2, 'Big Mac', 2800, 1500);
console.log(producto1.nombreProducto);
console.log(producto1.leyEtiquetado());
console.log(producto2.nombreProducto);
console.log(producto2.leyEtiquetado());
 */

// FUNCIONES

const productos = [
    {id: 1, nombre: 'Coca Cola', precio:600},
    {id: 2, nombre: 'Pepsi', precio:580},
    {id: 3, nombre: 'Manaos', precio:350}
];
// FUNCION TRADICIONAL
// element se llama la variable de iteracion, puede tener cualquier nombre
/* function buscarProducto(nombre) {
    let producto = 0;
    productos.forEach(element => {
        if (element.nombre == nombre) {
            producto = element;
        }
    });
    return producto;
} */
// FUNCION FLECHA
const buscarProducto = (nombre) => {
    return productos.find(element => element.nombre == nombre); 
    //some devuelve true o false nada mas
    //find campara c/u de los elementos hasta encontrar uno que coincida y asi devovlerlo.
}

let producto = buscarProducto('Coca Cola');
console.log(producto);

// EJEMPLO MANZANAS

const contarManzanas = () => {
    return 7;
}

/* let manzanas = contarManzanas;  */// de esta manera, por no declarar la funcion con sus parentecis, el log devuelve la funcion entera.
let manzanas = contarManzanas();
console.log(manzanas);