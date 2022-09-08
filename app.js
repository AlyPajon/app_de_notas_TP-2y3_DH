let tareas = require("./tareas.json")
let process = require("process")

let comando1 = process.argv[2]


switch (comando1) {
    case "listar":
        for (let i = 0; i < tareas.length; i++) {
            console.log(i+1,tareas[i]);
            
        }
        break;
    
    case undefined:
        console.log("Atencion - Tienes que pasar una accion.");
        break;
    
    case !"listar" && !undefined:
        console.log("No entiendo que quiere hacer");
        break;
}

if (comando1 === "listar") {
    for (let i = 0; i < tareas.length; i++) {
        console.log(i+1,tareas[i]);
        
    }
}else if (comando1 === undefined){

    return console.log("Atencion - Tienes que pasar una accion.");

}else{

    return console.log("No entiendo que quiere hacer");

}
