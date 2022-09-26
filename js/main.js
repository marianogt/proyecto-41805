let ingreso = prompt("Selecciona el artículo a Comprar: \n 1- Instrumento \n 2- Medidor \n 3- Barredora \n 4- Cámara \n 5- X para finalizar");

switch (ingreso) {
    case "1":
      console.log("Selccionaste Instrumento");
  
    break;
    case "2":
      console.log("Selccionaste Medidor");
  
      break;
    case "3":
      console.log("Selccionaste Barredora");
  
      break;
    case "4":
      console.log("Selccionaste Cámara");
  
      break;
    case "x" :
      console.log("Finalizar");
      break;
      
    case "X" :
        console.log("Finalizar");
        break;
    
    default:
      console.log("opcion no valida");
      break;
  }
  