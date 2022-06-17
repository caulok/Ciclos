let numero = parseFloat(prompt(`Ingrese debajo un número\n\nEn la consola mostraremos resultados de multiplicaciones hasta que el número ingresado lo haga por si mismo`));

for (let i = 0; i <= numero; i++) {
    let multiplicacion = i*numero;

    console.log(`${numero} x ${i} = ${multiplicacion}`);
}