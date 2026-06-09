/* 
*Ejercicio 3: Uso de async y await para Manejar Promesas 

?Descripción: 
Reescribe el ejercicio anterior Utilizando async y await en lugar de .then() y .catch() 
para manejar la promesa devuelta por consultarBaseDeDatos(). 

?Instrucciones: 
1. Cree una función ejecutarConsulta() declarada con async. 
2. Dentro de la función, Utilice await para llamar a consultarBaseDeDatos(). 
3. Maneja la resolución y el recHagao de la promesa Utilizando try...catch. 
4. Llama a ejecutarConsulta() para ejecutar el código.

*/



const consultarBaseDeDatos = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            //Generar numero aleatorio entre 0 y 10
            const numeroAleatorio = Math.random() * 10

            //Es par
            if (Math.round(numeroAleatorio) % 2 == 0) {
                resolve("Consulta exitosa")
            }else{
                reject( "Error en la consulta")
            }

        }, 3000);

    })
} 



const ejecutarConsulta = async ()=>{
    try {
        const response = await consultarBaseDeDatos()

        console.log(response);
        
    } catch (error) {
        console.log(error)
        
    }
}


ejecutarConsulta()


