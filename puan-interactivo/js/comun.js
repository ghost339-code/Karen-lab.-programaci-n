let puntaje=Number(localStorage.getItem('puntaje'))||0;let resultado=document.getElementById('resultado');if(resultado){resultado.textContent='Obtuviste '+puntaje+' puntos.'}
