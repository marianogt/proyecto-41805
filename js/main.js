
let ingreso = prompt("Selecciona el artículo a Comprar: \n 1- Instrumento \n 2- Medidor \n 3- Barredora \n 4- Cámara \n 5- X para finalizar");
let cantI=0, cantM= 0, cantB= 0, cantC = 0;

while (ingreso != "X") {
    switch (ingreso) {
        case "1":
          cantI++;  
          console.log("Selccionaste Instrumento");
          break;
        case "2":
            cantM++;  
            console.log("Selccionaste Medidor");
            break;
        case "3":
            cantB++;  
            console.log("Selccionaste Barredora");
            break;
        case "4":
            cantC++;  
            console.log("Selccionaste Cámara");
            break;
        case "X" :
          console.log("Finalizar");
          break;
    
        default:
          console.log("opcion no valida");
          break;
      }
      ingreso = prompt("Selecciona el artículo a Comprar: \n 1- Instrumento \n 2- Medidor \n 3- Barredora \n 4- Cámara \n 5- X para finalizar");
    }
 if ((parseInt(cantI+cantM+cantB+cantC)) == 0) console.log("No seleccionaste ningún producto")   
 else
    {
    console.log("El Total Seleccionado Es " + parseInt(cantI+cantM+cantB+cantC));
    if(cantI > 0 ) console.log("Seleccionaste " + cantI+ " Instrumentos");
     else console.log("No Seleccionaste Instrumentos");
     if(cantM > 0 ) console.log("Seleccionaste " + cantM+ " Medidores");
     else console.log("No Seleccionaste Medidores");
     if(cantB > 0 ) console.log("Seleccionaste " + cantB+ " Barredoras");  
     else console.log("No Seleccionaste Barredoras");
     if(cantC > 0 ) console.log("Seleccionaste " + cantC+ " Cámaras");
     else console.log("No Seleccionaste Cámaras");
    }
