
// 1- Ingresá en el siguiente cuadro el código HTML y Javascript correspondiente para la creación de una página web que cumpla con los siguientes requisitos:

// Posea un script en javascript que utilice: 

// a)      bucles anidados y cálculos automáticos

// b)      genere las tablas de multiplicar del 9 al 11

// c)      muestre el resultado por pantalla en forma ordenada y descendente como el siguiente ejemplo:


for (let num = 11; num > 8; num--) {

    document.write("<center><h3><strong>La tabla del " + num + ":</strong></h3></center>")
    
    for (let i = 1; i < 10; i++) {
        
        document.write("<center>" + num + " x " + i + " = " + (num * i) + "<br></center>");
        
    }
    
}


