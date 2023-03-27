let botonCrearElemento = document.getElementById("buttonA");
let botonCal = document.getElementById("button");
let  volver = document.getElementById("volver");

//Funcion que crea los elementos para calcular
botonCrearElemento.addEventListener("click", () => {
    let cantidadInteg = document.getElementById("cantidad").value;
    cantidadInteg = parseInt(cantidadInteg);
    let contenedorResultados = document.querySelector(".contenedor__input");

    for (let i = 1; i <= cantidadInteg; i++) {

        let descripcion = document.createElement("LABEL");
        descripcion.innerHTML = `Integrante ${i}`;
        descripcion.classList.add("text-light");
        let entrada = document.createElement("INPUT");
        entrada.setAttribute("type", "number");
        entrada.classList.add(`input${i}`);
        entrada.classList.add("input");        
        entrada.setAttribute("id",`${i}`);
        contenedorResultados.appendChild(descripcion);
        contenedorResultados.appendChild(entrada);

    }
    
    let contenedorINput = document.querySelector(".contenedor__input");
    contenedorINput.classList.remove("d-none");
    let contPrincip = document.querySelector(".contenedorPrincipal");
    contPrincip.classList.add("d-none");        
    let contResul = document.querySelector(".resul");
    contResul.classList.remove("d-none");
    botonCal.classList.remove("d-none");
    let tituloInicio = document.querySelector(".tituloPrincipal");
    tituloInicio.classList.add("d-none");
});

botonCal.addEventListener("click", () => {
    let contenedorINput = document.querySelector(".contenedor__input");
    let cantidadInteg = document.getElementById("cantidad").value;
    let reultadoContenedor = document.querySelector(".resul");
    let suma = 0;
    let arreglo = [];

    for (let i = 1; i <= cantidadInteg; i++) {
        let campo = document.getElementById(`${i}`).value;
        campo = parseInt(campo);
        arreglo.push(campo);
    }
    
    for(let i =0; i<arreglo.length;i++){                
        suma =  suma + arreglo[i];
    }

    for(let i =0; i<arreglo.length;i++){
        let integ = document.createElement("H2");
        integ.classList.add("h2");
        let res = (suma / arreglo.length) - arreglo[i];
        
        reultadoContenedor.appendChild(integ);        
        
        if (Math.round(res) < 0) {
            integ.innerHTML = `<b style = "margin-buttom: 10px">Integrante ${i+1}</b> <br> Deben darle = <b style = "color:#0b9612">$${(Math.round(res)) * (-1)}</b> <hr>`;
        } else {
            integ.innerHTML = `<b style = "margin-buttom: 10px">Integrante ${i+1}</b> <br> Debe poner = <b style= "color:#bd0000">$${(Math.round(res))}</b> <hr>`;
        }
    }

    let total = document.createElement("H1");
    reultadoContenedor.appendChild(total);

    total.innerHTML = `Total = $${suma}<br><br>`    

    botonCal.classList.add("d-none");
    volver.classList.remove("d-none");
    contenedorINput.classList.add("d-none");
    return cantidadInteg
});    



