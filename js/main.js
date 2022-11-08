
const date = new Date();

document.getElementById("hor").innerHTML = " Selecciones los productos a comprar - " + date.toLocaleString();

const contenedor = document.querySelector(".contenedor"),
      btn = document.querySelector("#btn"),
      contenedor2= document.querySelector(".contenedor2"),
      stk = document.querySelector("#stk")
      ;

let productosarray = [];
let carritoc = [];

function getcar(){
    let cont = 0;
    for (let i = 1; i < 9; i++) {
        let getJson = localStorage.getItem("id" + (i))
        if(getJson){
            carritoc[cont] = JSON.parse(getJson);
            cont +=1;
        }
        }
    for (let i = 0; i < carritoc.length; i++) {
        let encontrada = productosarray.find(f => f.id === carritoc[i].id);
        if (encontrada)  encontrada.stock = encontrada.stock - carritoc[i].stock;
        }    
}

const dibujartarjetas = (arr) => {
    // función que genere la vista de los productos
    getcar();
    let html;
    for (const item of arr) {
      const { id, nombre, img, precio, descripcion, stock } = item;
       html = `
       <div class="card">
        <img class="card__image" src="../imagenes/productos/${img}" alt=${nombre.toUpperCase()}>
        <h3 class="card__title">${id} - ${nombre.toUpperCase()}</h3>
        <div class="card-content">
        
        </div>
        <p class="card__description">${descripcion}</p>
        <h3 id="con${id-1}"> Stock del Item ${id}: ${stock} </h3> 
        <button class="card__boton" id="${btn}" onclick="calcularcompra(${id})" >Comprar</button>
        <button class="card__boton" onclick="calculardevolucion(${id})" >Devolver</button>
       </div>`;
      contenedor.innerHTML += html;
    }
    Swal.fire;
    pintarcarrrito(carritoc);
  };

function pintarcarrrito(arr){
    let html = '';
    contenedor2.innerHTML = "";
    arr.forEach((articulo,index) => {
        html = `
        <div class="contenedor3">
        <span class="anchon">Articulo: ${articulo.nombre}</span>
        <span class="anchop">Precio: $${articulo.precio} c/u</span>
        <span class="anchos">Cant.: ${articulo.stock}</span>
        <button id=${index} class="botb">X</button>
        </div> `;
       contenedor2.innerHTML += html;
    });
    let botones = document.querySelectorAll(".botb");
    botones.forEach(boton => {
        boton.addEventListener("click",quitar);
    }) 
}

function quitar(e){
    const id = e.srcElement.id;
    if(localStorage.getItem("id" +carritoc[id].id)){
        localStorage.removeItem("id" + carritoc[id].id);
    document.getElementById("con" + (carritoc[id].id-1)).innerHTML = "Stock del Item " + carritoc[id].id +" : " + (parseInt(productosarray[carritoc[id].id-1].stock) + parseInt(carritoc[id].stock));
    carritoc.splice(id, 1);
    pintarcarrrito(carritoc);
    }
}

function calcularcompra(numero){
    let stockl=0;
    if (productosarray[numero-1].stock > 0 ){
        productosarray[numero-1].stock -=1;
        if ((carritoc.length) && (existe(carritoc, productosarray[numero-1].id) != -1)) {
            stockl = existe(carritoc, productosarray[numero-1].id).stock += 1;        
        }
        else {
            carritoc.push({id: productosarray[numero-1].id, nombre: productosarray[numero-1].nombre, stock: 1, precio: productosarray[numero-1].precio});
            localStorage.setItem("id" + productosarray[numero-1].id,  JSON.stringify({id: productosarray[numero-1].id, nombre: productosarray[numero-1].nombre, stock: 1, precio: productosarray[numero-1].precio}));  // guardo en el local storage          
            stockl = 1;
        }
        document.getElementById("con" + (numero-1)).innerHTML = "Stock del Item " + numero +" : " + productosarray[numero-1].stock;
        }
    else {
        stockl = existe(carritoc, productosarray[numero-1].id).stock;
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'La cantidad a comprar supera el stock',
            showConfirmButton: false,
            timer: 2000
          })     
    }    
    if(localStorage.getItem("id" + productosarray[numero-1].id)){
        localStorage.removeItem("id" + productosarray[numero-1].id);
        localStorage.setItem("id" + productosarray[numero-1].id , JSON.stringify({id: productosarray[numero-1].id, nombre: productosarray[numero-1].nombre, stock: stockl, precio: productosarray[numero-1].precio}));  // guardo en el local storage          
    }
    pintarcarrrito(carritoc);
    document.getElementById("tot").innerHTML = "";
}
  
function existe(arraycar, idelemento){
    return arraycar.find(ele => ele.id === idelemento) ?? -1;
}

  function calculardevolucion(numero){
    let stockl = 0;
    if((carritoc.length) && (existe(carritoc, productosarray[numero-1].id) != -1) && (existe(carritoc, productosarray[numero-1].id).stock > 0)) {
        productosarray[numero-1].stock +=1;
        stockl = existe(carritoc, productosarray[numero-1].id).stock -=1;
        if (!stockl) {
           let aux = carritoc.findIndex(id => id.id === productosarray[numero-1].id);
            if(aux != -1) { carritoc.splice(aux,1); }
            if(localStorage.getItem("id" + productosarray[numero-1].id)){
                localStorage.removeItem("id" + productosarray[numero-1].id);}
            document.getElementById("con" + (numero-1)).innerHTML = "Stock del Item " + numero +" : " + productosarray[numero-1].stock;            
        }
        else{
            document.getElementById("con" + (numero-1)).innerHTML = "Stock del Item " + numero +" : " + productosarray[numero-1].stock;
            if(localStorage.getItem("id" + productosarray[numero-1].id)){
               localStorage.removeItem("id" + productosarray[numero-1].id);
               localStorage.setItem("id" + productosarray[numero-1].id , JSON.stringify({id: productosarray[numero-1].id, nombre: productosarray[numero-1].nombre, stock: stockl, precio: productosarray[numero-1].precio}));  // guardo en el local storage          
            }

        }
    }
    pintarcarrrito(carritoc);
  }

document.getElementById("resu").onclick = function() {//borrado por boton y no automático para que se pueda ver el localstorage 
    let cant=0, monto=0;
    for (let i = 0; i < carritoc.length; i++) {
        cant = carritoc[i].stock + cant;
        monto = carritoc[i].precio * carritoc[i].stock + monto;
    }
    document.getElementById("tot").innerHTML = " Cantidad de elementos comprados: " + cant + " por un monto USD: "+ monto;
    localStorage.clear();    
    carritoc=[];
    pintarcarrrito(carritoc);
}

 const URL = "./datos/datos.json";
 const cargatarjetas = async (URL) => {
   const respuesta = await fetch(URL);
   productosarray = await respuesta.json();
  dibujartarjetas(productosarray);
 };

cargatarjetas(URL);

Swal.fire({
    position: 'top',
    icon: 'success',
    title: 'Bienvenidos a la pagina de compras de Dylon',
    showConfirmButton: false,
    timer: 2500
  })
 
