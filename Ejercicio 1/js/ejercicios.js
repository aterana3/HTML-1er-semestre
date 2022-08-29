class Ejercicios1 {
    venta() {
        let costo = document.getElementById("costo").value;
        costo = parseFloat(costo);
        let descuento = document.getElementById("descuento").value;
        descuento = parseFloat(descuento);
        let respuesta = document.getElementById("respuesta")
        let iva = document.getElementById("iva").checked;
        let valorDesc = 0,subTotal = 0,valorIva=0,total=0;
        const impuesto = 0.12;
        valorDesc = costo*(descuento/100);
        subTotal = costo-valorDesc;
        if(iva) {
            valorIva  = subTotal*impuesto
        }
        total=subTotal+valorIva
        respuesta.textContent=`Costo:${costo.toString()}\nDescuento:${valorDesc.toString()}\nSubtotal:${subTotal.toString()}\nIva:${valorIva.toFixed(2)}\nTotal:${total.toString()}.` 
    }
    mayor() {
        let numero1 = document.getElementById("numero1").value;
        numero1 = parseInt(numero1);
        let numero2 = document.getElementById("numero2").value;
        numero2 = parseInt(numero2);
        let respuesta = document.getElementById("respuesta")
        let numeroMayor = 0;
        if(numero1 > numero2) {
            numeroMayor = numero1;
        } else {
            numeroMayor = numero2;
        }
        respuesta.textContent=`El numero mayor es: ${numeroMayor}.`
    }
    semana() {
        let dia = document.getElementById("dia").value;
        dia = parseInt(dia);
        let respuesta = document.getElementById("respuesta")
        let diaSemana = "";
        switch(dia) {
            case 1:
                diaSemana = "Lunes"
                break
            case 2:
                diaSemana = "Martes"
                break
            case 3:
                diaSemana = "Miercoles"
                break
            case 4:
                diaSemana = "Jueves"
                break   
            case 5:
                diaSemana = "Viernes"
                break                
            case 6:
                diaSemana = "Sabado"
                break
            case 7:
                diaSemana = "Domingo"
                break
            default:
                diaSemana = "Error"
                break
        }
        if(diaSemana != "Error") {
            respuesta.textContent=`El día de la semana es: ${diaSemana}.`
        } else {
            respuesta.textContent='El día de la semana es invalido.'
        }
    }
    bisiesto() {
        let anio = document.getElementById("anio").value;
        anio = parseInt(anio);
        let respuesta = document.getElementById("respuesta")
        if((anio%4==0) && (anio%100 !=0 || anio%400==0)) {
            respuesta.textContent=`El año ${anio} es bisiesto.`
        } else {
            respuesta.textContent=`El año ${anio} no es bisiesto.`
        }
    }
    presentar() {
        let numero1 = document.getElementById("numero1").value;
        numero1 = parseInt(numero1);
        let numero2 = document.getElementById("numero2").value;
        numero2 = parseInt(numero2);
        let respuesta = document.getElementById("respuesta")
        respuesta.textContent = "";
        for(let i=numero1+1;i<=numero2;i++) {
            respuesta.textContent += `${i.toString()}\n`;
        }
    }
    sumarPares() {
        let numero1 = document.getElementById("numero1").value;
        numero1 = parseInt(numero1);
        let numero2 = document.getElementById("numero2").value;
        numero2 = parseInt(numero2);
        let respuesta = document.getElementById("respuesta")
        let total = 0;
        for(let i=numero1;i<=numero2;i++) {
           if(i % 2== 0) {
            total = total + i;
           }
        }
        respuesta.textContent = `La suma de los numeros pares es de: ${total}`;
    }
    sumarContar() {
        let numero1 = document.getElementById("numero1").value;
        numero1 = parseInt(numero1);
        let numero2 = document.getElementById("numero2").value;
        numero2 = parseInt(numero2);
        let respuesta = document.getElementById("respuesta")
        let total = 0,contar = 0;
        for(let i=numero1;i<=numero2;i++) {
            total = total + i;
            contar += 1;
        }
        respuesta.textContent = `Se ha sumado un total de: ${contar} veces.\nEl total de la suma es: ${total}`;
    }
    divisores() {
        let numero = document.getElementById("divisor").value; 
        numero = parseInt(numero);
        let respuesta = document.getElementById("respuesta")
        respuesta.textContent = `Los siguientes números son divisores de: ${numero}\n`;
        let i = 1;
        while(i < numero) {
            if(numero % i == 0) {
                respuesta.textContent += `${i.toString()} \n`
            }
            i += 1
        }
    }
    perfecto() {
        let numero = document.getElementById("perfecto").value;
        numero = parseInt(numero);
        let respuesta = document.getElementById("respuesta")
        let i = 2,perfecto=0;
        while(i <= numero) {
            if(numero % i == 0) {
                perfecto = perfecto + (numero/i)
            }
            i += 1
        }
        if (perfecto == numero) {
            respuesta.textContent = `El numero ${numero} es perfecto.`
        } else {
            respuesta.textContent = `El numero ${numero} no es perfecto.`
        }
    }
}
let instance = new Ejercicios1();
