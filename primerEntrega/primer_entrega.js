let acum=0, cont=0, prom;

for(let i=0; i<3; i++){
    nota= parseInt(prompt(`Ingrese la nota del trimestre ${i+1}`));
    if(nota>0 && nota<=10){
        acum = acum + nota;
        cont = cont+1;
    }
    else{
        alert(`Ingrese un numero entre el 1 y el 10`);
        break;
    }
}
prom=acum/cont;
if(cont==3){
    alert(`El promedio anual es ${prom}`)
}