/*

*Ejercicio 5: Gestión de Tareas Pendientes 

?Descripción: 
Desarrolla una pequeña aplicación que gestione una lista de tareas. Cada tarea tiene 
una descripción y un estado de completado. Implementa funcionalidades para 
agregar tareas, marcarlas como completadas y listar las tareas pendientes y 
completadas. 

?Instrucciones: 
1. Cree un array tareas para almacenar las tareas. 
2. Define funciones para: 
    o Agregar una tarea: Agrega un objeto al array con descripcion y 
    completada (inicialmente false). 
    o Marcar una tarea como completada: Cambia el estado de 
    completada a true para una tarea específica. 
    o Listar tareas pendientes: Muestra las tareas que no están 
    completadas. 
    o Listar tareas completadas: Muestra las tareas que están 
    completadas. 
3. Agrega algunas tareas Utilizando la función de agregar. 
4. Marca algunas tareas como completadas. 
5. Lista las tareas pendientes y completadas. 


?Ejemplo de uso de funciones: 
 *Agregar tareas 
    agregarTarea("Comprar leche"); 
    agregarTarea("Llamar al médico"); 
    agregarTarea("Estudiar JavaScript"); 
 *Marcar tareas como completadas 
    marcarTareaComoCompletada("Comprar leche"); 
 *Listar tareas 
    listarTareasPendientes(); 
    listarTareasCompletadas();
*/



const tareas = [
    {
        descripcion: "Comprar pasta de dientes",
        completada: true
    },
    {
        descripcion: "Hacer ejercicio",
        completada: false
    },
]




const agregarTarea = (descripcion)=>{
    try {
        tareas.push(
            {
                descripcion: descripcion,
                completada: false
            }
        )

        console.log(`La tarea "${descripcion}" ha sido agregada`);
        
    } catch (error) {
        console.log(error);
        
    }

}


const marcarTareaComoCompletada = (descTareaCompletada)=>{
    
    const indice = tareas.findIndex((tarea)=>{
       return tarea.descripcion === descTareaCompletada
    })
    
    if (indice >= 0) {
        tareas[indice].completada = true    
    }

}   


const listarTareasPendientes = ()=>{
    const tareasPendientes = tareas.filter((tarea)=>{
        return !tarea.completada
    })

    if (tareasPendientes.length >0 ) {
        console.log('\nTAREAS PENDIENTES');
            
        tareasPendientes.forEach( (tarea) => {
            console.log(` - ${tarea.descripcion}`);    
        });        
    }
}

const listarTareasCompletadas = ()=>{
    const tareasPendientes = tareas.filter((tarea)=>{
        return tarea.completada
    })

    if (tareasPendientes.length >0 ) {
        console.log('\nTAREAS COMPLETADAS');
            
        tareasPendientes.forEach( (tarea) => {
            console.log(` - ${tarea.descripcion}`);    
        });        
    }
}




//*Agregar tareas 
    agregarTarea("Comprar leche"); 
    agregarTarea("Llamar al médico"); 
    agregarTarea("Estudiar JavaScript"); 

//*Marcar tareas como completadas 
    marcarTareaComoCompletada("Comprar leche"); 

//*Listar tareas 
    listarTareasPendientes(); 
    listarTareasCompletadas();

    












