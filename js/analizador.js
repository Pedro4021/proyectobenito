var expresion= document.getElementById("expresion");
var resultado= document.getElementById("resultado");
var array = expresion.innerHTML.split(/\s+/);

for (var i in array) {
    if (/^[a-z]$/.test(array[i])) {
        resultado.innerHTML = resultado.innerHTML + array[i] + " es una constante\n";
    } else if (/^[1-9]|[0-9]$/.test(array[i])) {
        resultado.innerHTML = resultado.innerHTML + array[i] + " es un numero\n";
    } else if (/^[bin][0-1]+$/.test(array[i])) {
        resultado.innerHTML = resultado.innerHTML + array[i] + " Binario\n";
    }	else if (/^[*]$/.test(array[i])) {
        resultado.innerHTML = resultado.innerHTML + array[i] + " es una multiplicacion\n";
    } else if (/^[+]$/.test(array[i])) {
        resultado.innerHTML = resultado.innerHTML + array[i] + " es una Suma\n";
    } else if (/^[-]$/.test(array[i])) {
        resultado.innerHTML = resultado.innerHTML + array[i] + " es una Resta\n";
    } else if (/^[/]$/.test(array[i])) {
        resultado.innerHTML = resultado.innerHTML + array[i] + " es una Division\n";
    } else if (/^[=]$/.test(array[i])) {
        resultado.innerHTML = resultado.innerHTML + array[i] + " es una Asignacion\n";
    } else if (/^[(]$/.test(array[i])) {
        resultado.innerHTML = resultado.innerHTML + array[i] + " es un parentesis de apertura\n";
    } else if (/^[)]$/.test(array[i])) {
        resultado.innerHTML = resultado.innerHTML + array[i] + " es un parentesis de cierre\n";
    } 
    else if (/(for|while|if|true|false|else|case|break)/.test(array[i])) {
        resultado.innerHTML = resultado.innerHTML + array[i] + " es una palabra reservada\n";
    }





}