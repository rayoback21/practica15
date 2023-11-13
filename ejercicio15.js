//empresa Busca Conductor
let adulto= 25;
let conductor=true;
function empresa(adulto,conductor) {
    let edad = prompt("Ingrese su Edad: ");
    let Licencia=confirm("Tiene Licencia"); 
    if (edad>= adulto && Licencia===conductor) {
        return "Apto";
    } else {
        return "No Apto";
    }
}
let resultado = empresa(adulto,conductor);
console.log(resultado);

//instituto Sudamericano
let promedio=8.5;
let ingresos=600;

function ingresoBeca(promedio,ingresos) {
    let Nota = prompt("Ingrese su Nota: ");
    let fondos=prompt("Ingrese sus Ingresos: "); 
    if (Nota>= promedio && fondos>=ingresos) {
        return 'Aprobadp'
    } else {
        return 'Reprobado'
    }
}
let beca = ingresoBeca(promedio,ingresos);
console.log(beca);

//Apodos
let apodoDefecto="Anonymus";
function sobreNombre(Rayoback) {
    let apodo=prompt("Ingrese su Apodo: ");
    if (apodo==="") {
        return rayobackDefecto;
    } else {
        return apodo;
    }
}

let respuesta= sobreNombre(rayobackDefectoDefecto);
console.log("Tu Sobre Nombre es: "+respuesta);