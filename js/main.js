
let ingreso = prompt("Selecciona el artículo a Comprar: \n 1- Instrumento \n 2- Medidor \n 3- Barredora \n 4- Cámara \n V - Para Vaciar Carro \n F - para finalizar");
let cantI=0, cantM= 0, cantB= 0, cantC = 0;
let sumI=0, sumM=0, sumB=0, sumC=0; 

 function producto(elemento, precio){
   this.elemento = elemento;
   this.precio = precio; 
 }

 const eleI = new producto(1, 5);
 const eleM = new producto(2, 8);
 const eleB = new producto(3, 35);
 const eleC = new producto(4, 25);

let res=0, suma=0;
 function sumar(I, M, B, C){
   let res = 0;
   return(res = parseInt(I) + parseInt(M) + parseInt(B) + parseInt(C));
 }

while ((ingreso != "F") && (ingreso != "f")) {
    switch (ingreso) {
        case "1":
            let depositoI = parseInt(prompt("Ingresa la catidad a comprar"));
            cantI = cantI + depositoI;
            sumI=  eleI.precio * cantI;
            console.log("Compraste " + cantI + " Instrumento/s por un valor de: " + sumI);
            break;
        case "2":
            let depositoM = parseInt(prompt("Ingresa la catidad a comprar"));
            cantM = cantM + depositoM;
            sumM=  eleM.precio * cantM;
            console.log("Compraste " + cantM + " Medidor/es por un valor de: " + sumM);
            break;
        case "3":
            let depositoB = parseInt(prompt("Ingresa la catidad a comprar"));
            cantB = cantB + depositoB;
            sumB =  eleB.precio * cantB;
            console.log("Compraste " + cantB + " Barredora/s por un valor de: " + sumB);
            break;
        case "4":
            let depositoC = parseInt(prompt("Ingresa la catidad a comprar"));
            cantC = cantC + depositoC;
            sumC =  eleC.precio * cantC;
            console.log("Compraste " + cantC + " Cámara/s por un valor de: " + sumC);
            break;
        case "V","v":
            sumI=sumB=sumC=sumM=0;
            cantI=cantM=cantB=cantC=0;
            break;
          default:
          console.log("opcion no valida");
          break;
      }
      ingreso = prompt("Selecciona el artículo a Comprar: \n 1- Instrumento \n 2- Medidor \n 3- Barredora \n 4- Cámara \n V- Para Vaciar Carro \n F- para finalizar");
    }
res=sumar(cantI,cantM,cantB,cantC);
suma=sumI+sumM+sumB+sumC;
if (res == 0){
 console.log("No compraste ningún producto")   
 alert("No compraste ningún producto");
 }
else
    {
    console.log("El Total de Productos Comprados es " + res + " por un Monto de USD: " + suma);
    if(cantI > 0 ) console.log("Compraste " + cantI+ " Instrumentos por un Monto de USD: " + sumI);
     else console.log("No Seleccionaste Instrumentos");
     if(cantM > 0 ) console.log("Compraste " + cantM+ " Medidores por un Monto de USD: " + sumM);
     else console.log("No Seleccionaste Medidores");
     if(cantB > 0 ) console.log("Compraste " + cantB+ " Barredoras por un Monto de USD: " + sumB);  
     else console.log("No Seleccionaste Barredoras");
     if(cantC > 0 ) console.log("Compraste " + cantC+ " Cámaras por un Monto de USD: " + sumC);
     else console.log("No Seleccionaste Cámaras");
     alert("El Total de Productos Comprados es " + res + " por un Monto de USD: " + suma);
    }

// for (const propiedad in ele){
//   console.log(propiedad + ":" + ele[propiedad]);
// }
