
const YARDA = 1.09361;
var metro = prompt('Introduzca los metros a convertir:','');
var result = YARDA*metro;
var conver = result.toFixed(2);


document.write("<header><h1>Los Metros convertidos fueron: " + metro + " metros </h1><hr /><br/></header>");
document.write("<header><h1>La conversión de Metros a Pulgadas es: " + conver + "</h1><hr /><br/></header>");