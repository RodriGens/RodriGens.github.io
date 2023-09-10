const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
   // const DATO = document.getElementById('peso').valueAsNumber;
   if (DATO > 0){
    ERROR.style.display = 'none'
    let flujo = calcFlujo(DATO);
    let mantenimiento = flujo*1.5;
    FLU.innerHTML = flujo + ' cc/hr';
    MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
    FLU.style.display = 'block';
    MAN.style.display = 'block';
} else {
    ERROR.style.display = 'block';
    FLU.style.display = 'none';
    MAN.style.display = 'none';
}
})
function calcFlujo(peso){
    let resto = peso;
    let flujo = 0;
    if((resto>0)&&(resto<31))
         {if (resto<11){
        flujo=resto*100
        
                }
        else if(resto<21){
        flujo=(10*100)+((peso-10)*50)
                         }
             else{flujo=(10*100)+ (10*50)+((peso-20)*20)
    }
    }
    else{flujo=( (((resto * 4) + 7) / (resto + 90))*2000)
        return Math.round(flujo)}

    return Math.round(flujo/24);
}
