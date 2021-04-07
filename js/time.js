let currentZone = localStorage.getItem("zone");
let mex = col = bra = arg = 0;
let dstMex = true;

if(currentZone == null){
    currentZone = "mex";
}

// Función de reloj
function startTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('mex').innerHTML = (h + mex) + ":" + m;
    document.getElementById('col').innerHTML = (h + col) + ":" + m;
    document.getElementById('bra').innerHTML = (h + bra) + ":" + m;
    document.getElementById('arg').innerHTML = (h + arg) + ":" + m;
    let t = setTimeout(startTime, 500);
}

// Agregar 0 a los números de 1 dígito
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

// Establecer la zona local y ajustar las horas internacionales
function setZone(zone = "mex"){
    let actual = document.getElementsByClassName("current");
    actual[0].classList.remove("current");
    document.getElementById(zone).classList.add("current");
    if(zone == "mex"){
        mex = 0;
        col = 1;
        bra = 3;
        arg = 3;
        if(dstMex == true){
            col -= 1;
            bra -= 1;
            arg -= 1;
        }
        localStorage.setItem("zone", "mex");
    }
    if(zone == "col"){
        mex = -1;
        col = 0;
        bra = 2;
        arg = 2;
        if(dstMex == true){
            mex += 1;
        }
        localStorage.setItem("zone", "col");
    }
    if(zone == "bra"){
        mex = -3;
        col = -2;
        bra = 0;
        arg = 0;
        if(dstMex == true){
            mex += 1;
        }
        localStorage.setItem("zone", "bra");
    }
    if(zone == "arg"){
        mex = -3;
        col = -2;
        bra = 0;
        arg = 0;
        if(dstMex == true){
            mex += 1;
        }
        localStorage.setItem("zone", "arg");
    }
    if(dstMex == true){
        document.getElementById("mxVerano").innerHTML = "Horario de verano";
    }
}

// Inicializar la hora local
setZone(currentZone);