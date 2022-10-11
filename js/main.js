
const date = new Date();

let ingreso = prompt(date.toLocaleString()  + " Selecciona el artículo a Comprar: \n 1- Instrumento \n 2- Medidor \n 3- Barredora \n 4- Cámara \n V - Para Vaciar Carro \n F - Finaliza compra");
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
      ingreso = prompt("Selecciona el artículo a Comprar: \n 1- Instrumento \n 2- Medidor \n 3- Barredora \n 4- Cámara \n V- Para Vaciar Carro \n F- Finaliza compra");
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
let formapago=0, cuotas=0;
if(suma>0) {
    while (formapago==0 && formapago !=1 && formapago !=2 && formapago !=3){
        formapago = prompt("Como quiere abonar? \n 1- Efectivo \n 2- Tarjeta de Debito  \n 3- Tarjeta de Credito");
    }
    if (formapago== 3){
        while (cuotas==0 && cuotas !=1 && cuotas !=2 && cuotas !=3){
        cuotas= prompt("Encuantas cuotas? \n 1- 3 Cuotas \n 2- 6 Cuotas  \n 3- 12 Cuotas");
        }
        console.log("Su compra fue exitosa, en " + cuotas + " cuotas por un monto total de USD " + suma);
        alert("Su compra fue exitosa, en " + cuotas + " cuotas por un monto total de USD " + suma);
    }
    else 
        {
         if(formapago==1) {
            console.log("Su compra fue exitosa, en efectivo por un monto de USD " + suma);
            alert("Su compra fue exitosa, en efectivo por un monto de USD " + suma);
         }
         else{
            console.log("Su compra fue exitosa, con tarjeta de debito un monto de USD " + suma);
            alert("Su compra fue exitosa, con tarjeta de debito un monto de USD " + suma);
         }
        }
}   

// for (const propiedad in ele){
//   console.log(propiedad + ":" + ele[propiedad]);
// }
