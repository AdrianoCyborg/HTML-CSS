//Nota do segundo bimestre

document.getElementById("button").onclick=function(){
    x=document.getElementById("input").value;
    result=((17.25-x)/2)+0.1;
    y=result.toFixed(2);

    if (y>0 && y<10) {
        document.getElementById("resultado").innerHTML = "Você precisa de " + y;
    }
    else {
        document.getElementById("resultado").innerHTML = "Número Inválido";
    }

}

//Fim da função da nota do segundo bimestre