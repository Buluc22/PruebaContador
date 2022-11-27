
//Si no existen elementos (items) en el session storage (indefinidos), se inicializan en 0.
var pre = sessionStorage.getItem('pre');
if (pre == undefined) {
    sessionStorage.setItem('pre', 0); 
    var pre = sessionStorage.getItem('pre');
}

var pri = sessionStorage.getItem('pri');
if (pri == undefined) {
    sessionStorage.setItem('pri', 0);
    var pri = sessionStorage.getItem('pri');
}

var sec = sessionStorage.getItem('sec');
if (sec == undefined) {
    sessionStorage.setItem('sec', 0);
    var sec = sessionStorage.getItem('sec');
}

var bach = sessionStorage.getItem('bach');
if (bach == undefined) {
    sessionStorage.setItem('bach', 0);
    var bach = sessionStorage.getItem('bach');
}

/* var per = sessionStorage.getItem('per');
if (per == undefined) {
    sessionStorage.setItem('per', 0);
    var per = sessionStorage.getItem('per');
} */


//InnerHTML para mostrar el contador en el documento
preescolar.innerHTML=pre;
primaria.innerHTML=pri;
secundaria.innerHTML=sec;
bachillerato.innerHTML=bach;
//personal.innerHTML=per;

//Fecha
var date = new Date();
fecha.innerHTML = date.toLocaleDateString();


function add(barra){
       /*
            198501 - preescolar
            198502 - primaria
            198503 - secundaria
            198504 - bachillerato
            198505 - personal
          */
         
            let nivel = sumarNivel(barra);

           
            if (nivel == "Invalido") {
                alert("Datos no válidos");
            }
}

function remove(barra){
    /*
         198501 - preescolar
         198502 - primaria
         198503 - secundaria
         198504 - bachillerato
         198505 - personal
         */

         if (confirm("¿Desea quitar un elemento del contador?") == true) {
            let nivel = quitarNivel(barra);

        
            if (nivel == "Invalido") {
                alert("Datos no válidos");
            } 
         }
      
        
}
        
            
         
         
function sumarNivel(barra)
{
    let nivel = "";
    switch (barra) {  
        case 198501:
            nivel = "Preescolar";
            let pre = sessionStorage.getItem('pre');
            pre = parseInt(pre); //Lo convertimos a entero porque le da amnsiedad y solo concatena.
            pre=pre+1;
            sessionStorage.setItem('pre', pre);
            preescolar.innerHTML = pre;  //Se actualiza el número (contador) en el documento html
            break;
        case 198502:
            nivel = "Primaria";
            let pri = sessionStorage.getItem('pri');
            pri = parseInt(pri);
            pri=pri+1;
            sessionStorage.setItem('pri', pri);
            primaria.innerHTML = pri;
            break;
        case 198503:
            nivel = "Secundaria";
            let sec = sessionStorage.getItem('sec');
            sec = parseInt(sec);
            sec = sec + 1;
            sessionStorage.setItem('sec', sec);
            secundaria.innerHTML = sec; 
            break;
        case 198504:
            nivel = "Bachillerato";
            let bach = sessionStorage.getItem('bach');
            bach = parseInt(bach);
            bach = bach + 1;
            sessionStorage.setItem('bach', bach);
            bachillerato.innerHTML = bach;
            break;
       /*  case 198505:
            nivel = "Personal";
            let per = sessionStorage.getItem('per');
            per = parseInt(per);
            per = per + 1;
            sessionStorage.setItem('per', per);
            personal.innerHTML = per; 
            break; */
        default:
            nivel = "Invalido";
            break;
    }

    return nivel;
}


function quitarNivel(barra)
{
    let nivel = "";
    switch (barra) {  
        case 198501:
            nivel = "Preescolar";
            let pre = sessionStorage.getItem('pre');
            pre = parseInt(pre); //Lo convertimos a entero porque le da amnsiedad y solo concatena.
            pre=pre-1;
            sessionStorage.setItem('pre', pre);
            preescolar.innerHTML = pre;  //Se actualiza el número (contador) en el documento html
            break;
        case 198502:
            nivel = "Primaria";
            let pri = sessionStorage.getItem('pri');
            pri = parseInt(pri);
            pri=pri-1;
            sessionStorage.setItem('pri', pri);
            primaria.innerHTML = pri;
            break;
        case 198503:
            nivel = "Secundaria";
            let sec = sessionStorage.getItem('sec');
            sec = parseInt(sec);
            sec = sec - 1;
            sessionStorage.setItem('sec', sec);
            secundaria.innerHTML = sec; 
            break;
        case 198504:
            nivel = "Bachillerato";
            let bach = sessionStorage.getItem('bach');
            bach = parseInt(bach);
            bach = bach - 1;
            sessionStorage.setItem('bach', bach);
            bachillerato.innerHTML = bach;
            break;
       /*  case 198505:
            nivel = "Personal";
            let per = sessionStorage.getItem('per');
            per = parseInt(per);
            per = per - 1;
            sessionStorage.setItem('per', per);
            personal.innerHTML = per; 
            break; */
        default:
            nivel = "Invalido";
            break;
    }

    return nivel;
}


