
const date = new Date();

let ingreso = prompt(date.toLocaleString()  + " Selecciona el artículo a Comprar: \n 1- Instrumento \n 2- Medidor \n 3- Barredora \n 4- Cámara \n V - Para Vaciar Carro \n F - Finaliza compra");
let cantI=0, cantM= 0, cantB= 0, cantC = 0;
let sumI=0, sumM=0, sumB=0, sumC=0; 

 function producto(elemento, precio){
   this.elemento = elemento;
   this.precio = precio; 
 }

 const productosarray = [
    { id: 1, nombre: "Instrumental", precio: 5, stock: 20  },
    { id: 2, nombre: "Medidor", precio: 8, stock: 20 },
    { id: 3, nombre: "Barredora", precio: 35, stock: 10 },
    { id: 4, nombre: "Camara", precio: 25, stock: 10 },
    { id: 5, nombre: "Alarma", precio: 35, stock: 10 },
    { id: 6, nombre: "Sensor", precio: 12, stock: 10 },
    { id: 7, nombre: "Sirena", precio: 20, stock: 10 },
  ];

 const carrito = [];

 const eleI = new producto(1, 5);
 const eleM = new producto(2, 8);
 const eleB = new producto(3, 35);
 const eleC = new producto(4, 25);

let res=0, suma=0;
 function sumar(I, M, B, C){
   let res = 0;
   return(res = parseInt(I) + parseInt(M) + parseInt(B) + parseInt(C));
 }
 
 function buscarElemento(arr, filtro) {
     const encontrada = arr.find((f) => {
         return f.elemento === filtro;
     })
     return encontrada;
 }
 
 function restarStock(arr, filtro, cantidad) {
     let encontrada = arr.find((f) => {
         return f.elemento === filtro;
     })
     if (encontrada) encontrada.stock -= cantidad;
 }

 function sumarStock(arr, filtro, cantidad) {
    let encontrada = arr.find((f) => {
        return f.elemento === filtro;
    })
    if (encontrada) encontrada.stock += cantidad;
}

function sumarCompra(arr, filtro, cantidad) {
    let encontrada = arr.find((f) => {
        return f.elemento === filtro;
    })
    if (encontrada) encontrada.cantidad += cantidad;
}

/* if (localStorage.getItem('carrito')){
    carrito=JSON.parse(localStorage.getItem(carrito));
 } else {
    carrito = [];
 }
 */ 
//constructor de elementos para el carrito
 class elecarrito{
    constructor(elemento, precio, cantidad){
        this.elemento = elemento;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

function buscarencarrito(elecarrito){
    let elefound = carrito.find((carrito)=>{
        return carrito.elemento === elecarrito.elemento;
    })
if(elefound){
    elefound.cantidad = elefound.cantidad + elecarrito.cantidad;
    document.getElementById('ins').innerText="Elemento encontrado " + elefound.elemento + " se compro " + elefound.cantidad;
    console.log(elefound.cantidad);
}
else{
//   document.querySelector('ins').innerText="Elemento NO encontrado";
  document.getElementById('ins').innerText="Elemento NO encontrado ";
  return carrito.push(elecarrito);
}
}

function guardarenCarrito(elecarrito){
    return carrito.push(elecarrito);
}

document.getElementById("bor").onclick = function() {//borrado por boton y no automático para que se pueda ver el localstorage 
	localStorage.clear();    
}

/* function cargarcarro(){
    carrito.elemento = l.getItem("key");
}

localStorage.getItem(array.forEach(element => {
    carrito.push(element.elemento    
});
);
 */
while ((ingreso != "F") && (ingreso != "f")) {
    switch (ingreso) {
            case "1":
                let depositoI = parseInt(prompt("Ingresa la catidad a comprar"));
                if ((cantI + depositoI) > productosarray[0].stock ){//Si la compra supera el stock aviso
                    alert("Cantidad requerida supera el stock");
                    break;
                }  
                cantI = cantI + depositoI;
                sumI=  eleI.precio * cantI;
                console.log("Compraste " + cantI + " Instrumento/s por un valor de: " + sumI);
                let newelemento1 = new elecarrito("Instrumento",eleI.precio,cantI);
                if(buscarElemento(carrito, newelemento1.elemento)) // si el elemento ya se compró agrego cantidad
                {
                   sumarCompra(carrito, 'Instrumento', depositoI);
                }
                else{
                    carrito.push(newelemento1); // primera compra
                }
//                restarStock(carrito, 'Instrumento', depositoI);
                localStorage.setItem("Instrumento", JSON.stringify(newelemento1));  // guardo en el local storage          
                break;
            case "2":
                let depositoM = parseInt(prompt("Ingresa la catidad a comprar"));
                if ((cantM + depositoM) > productosarray[1].stock ){//Si la compra supera el stock aviso
                    alert("Cantidad requerida supera el stock");
                    break;
                }  
                cantM = cantM + depositoM;
                sumM=  eleM.precio * cantM;
                console.log("Compraste " + cantM + " Medidor/es por un valor de: " + sumM);
                let newelemento2 = new elecarrito("Medidor",eleM.precio,cantM);
                if(buscarElemento(carrito, newelemento2.elemento)) // si el elemento ya se compró agrego cantidad
                {
                    sumarCompra(carrito, 'Medidor', depositoM);
                }
                else{
                    carrito.push(newelemento2); // primera compra
                }
        //                restarStock(carrito, 'Medidor', depositoM);
                localStorage.setItem("Medidor", JSON.stringify(newelemento2));  // guardo en el local storage          
                break;
        case "3":
                let depositoB = parseInt(prompt("Ingresa la catidad a comprar"));
                if ((cantB + depositoB) > productosarray[2].stock ){//Si la compra supera el stock aviso
                    alert("Cantidad requerida supera el stock");
                    break;
                }  
                cantB = cantB + depositoB;
                sumB =  eleB.precio * cantB;
                console.log("Compraste " + cantB + " Barredora/s por un valor de: " + sumB);
                let newelemento3 = new elecarrito("Barredora",eleB.precio,cantB);
                if(buscarElemento(carrito, newelemento3.elemento)) // si el elemento ya se compró agrego cantidad
                {
                    sumarCompra(carrito, 'Barredora', depositoB);
                }
                else{
                    carrito.push(newelemento3); // primera compra
                }
        //                restarStock(carrito, 'Barredora', depositoB);
                localStorage.setItem("Barredora", JSON.stringify(newelemento3));  // guardo en el local storage          
                break;
        case "4":
                let depositoC = parseInt(prompt("Ingresa la catidad a comprar"));
                if ((cantC + depositoC) > productosarray[3].stock ){//Si la compra supera el stock aviso
                    alert("Cantidad requerida supera el stock");
                    break;
                }  
                cantC = cantC + depositoC;
                sumC =  eleC.precio * cantC;
                console.log("Compraste " + cantC + " Cámara/s por un valor de: " + sumC);
                let newelemento4 = new elecarrito("Camara",eleC.precio,cantC);
                if(buscarElemento(carrito, newelemento4.elemento)) // si el elemento ya se compró agrego cantidad
                {
                sumarCompra(carrito, 'Camara', depositoC);
                }
                else{
                    carrito.push(newelemento4); // primera compra
                }
    //                restarStock(carrito, 'Camara', depositoI);
                localStorage.setItem("Camara", JSON.stringify(newelemento4));  // guardo en el local storage          
                break;
        case "V","v":
            sumI=sumB=sumC=sumM=0;
            cantI=cantM=cantB=cantC=0;
            while(carrito.length > 0){ 
                carrito.pop()}; 
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
    if(cantI > 0 ){ 
  //      carrito.push(["Instrumentos", cantI, sumI]); 
        console.log("Compraste " + cantI+ " Instrumentos por un Monto de USD: " + sumI);
    }
     else console.log("No Seleccionaste Instrumentos");
    if(cantM > 0 ){ 
        console.log("Compraste " + cantM+ " Medidores por un Monto de USD: " + sumM);
    } 
     else console.log("No Seleccionaste Medidores");
    if(cantB > 0 ){ 
        console.log("Compraste " + cantB+ " Barredoras por un Monto de USD: " + sumB);  
    }
     else console.log("No Seleccionaste Barredoras");
    if(cantC > 0 ){
        console.log("Compraste " + cantC+ " Cámaras por un Monto de USD: " + sumC);
    }
     else console.log("No Seleccionaste Cámaras");
     alert("El Total de Productos Comprados es " + res + " por un Monto de USD: " + suma);
     console.log(carrito);
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
        document.getElementById('con').innerText= "Su compra fue exitosa, en " + cuotas + " cuotas por un monto total de USD " + suma;
        // console.log("Su compra fue exitosa, en " + cuotas + " cuotas por un monto total de USD " + suma);
        alert("Su compra fue exitosa, en " + cuotas + " cuotas por un monto total de USD " + suma);
    }
    else 
        {
         if(formapago==1) {
            document.getElementById('con').innerText= "Su compra fue exitosa, en efectivo por un monto de USD " + suma;
            // console.log("Su compra fue exitosa, en efectivo por un monto de USD " + suma);
            alert("Su compra fue exitosa, en efectivo por un monto de USD " + suma);
         }
         else{
            document.getElementById('con').innerText= "Su compra fue exitosa, con tarjeta de debito un monto de USD " + suma;
            // console.log("1Su compra fue exitosa, con tarjeta de debito un monto de USD " + suma);
            alert("Su compra fue exitosa, con tarjeta de debito un monto de USD " + suma);
         }
        }
    // localStorage.clear();    
}   

// for (const propiedad in ele){
//   console.log(propiedad + ":" + ele[propiedad]);
// }
