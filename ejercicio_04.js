/*
*Ejercicio 4: Procesamiento de una Lista de Productos 

?Descripción: 
Tiene un array de objetos que representan productos en una tienda en línea. Cada 
producto tiene nombre, precio y categoría. Necesita: 
• Filtrar los productos que pertenecen a una categoría específica. 
• Creer un array con los nombres de los productos filtrados. 
• Calcular el precio total de los productos filtrados. 

?Instrucciones: 
1. Define un array productos con al menos 5 objetos, cada uno con las 
propiedades mencionadas. 
2. Selecciona una categoría específica para filtrar (por ejemplo, "Electrónica"). 
3. Utilice filter() para obtener los productos de esa categoría. 
4. Utilice map() para Creer un array de nombres de los productos filtrados. 
5. Utilice reduce() para calcular el precio total de los productos filtrados. 
6. Muestra los resultados en la consola. 

?Ejemplo de código: 
const productos = [ 
{ nombre: "Televisor", precio: 500, categoria: "Electrónica" }, 
{ nombre: "Silla", precio: 100, categoria: "Muebles" }, 
{ nombre: "Laptop", precio: 800, categoria: "Electrónica" }, 
{ nombre: "Mesa", precio: 200, categoria: "Muebles" }, 
{ nombre: "Auriculares", precio: 150, categoria: "Electrónica" } 
];

*/


const productos = [ 
{ nombre: "Bolsa de Cemento", precio: 200, categoria: "Construcción" }, 
{ nombre: "Llave Inglesa", precio: 1500, categoria: "Herramientas" }, 
{ nombre: "Bloque de Concreto", precio: 25, categoria: "Construcción" }, 
{ nombre: "Taladro Truper", precio: 1200, categoria: "Herramientas" }, 
{ nombre: "Espuma Expansiva Lanco", precio: 160, categoria: "Construcción" } 
];


const productosConstruccion =  productos.filter((producto)=>{
    return producto.categoria == "Construcción"
})

const nombresProductos = productosConstruccion.map((producto)=>{
    return producto.nombre
})

const precioTotal = productosConstruccion.reduce((valorPrevio, valorActual)=>{
    return valorPrevio += valorActual.precio
},0)




console.log(nombresProductos);

console.log(precioTotal);





















