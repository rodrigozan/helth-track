var form = document.querySelector('form');

var imc=0;
var resultado = document.getElementById('resultado');
  

form.addEventListener('submit',function(event){
var altura =parseInt(form.altura.value);
var peso = parseInt(form.peso.value);
// Data
var data = new Date();
var dia     = data.getDate();
var mes     = data.getMonth();
var ano    = data.getFullYear(); 
/* Data Formatada */
var str_data = dia + '/' + (mes+1) + '/' + ano;
// Hora
var hora    = data.getHours();
var min     = data.getMinutes();
var seg     = data.getSeconds();
var str_hora = hora + ':' + min + ':' + seg;
var diaHora = `dia ${str_data}, às ${str_hora}`
imc=(peso/Math.pow((altura/100),2)).toFixed(2);
if(imc <16){
 resultado.innerHTML="Data: "+diaHora+"<br>Peso atual: <span class='fw-bold'>"+peso+"kg</span><br>Baixo peso muito grave: <span class='fw-bold'>"+imc+" kg/m²</span>";
  }else if(imc >=16 && imc <=16.99){
    resultado.innerHTML="Data: "+diaHora+"<br>Peso atual: <span class='fw-bold'>"+peso+"kg</span><br>Baixo peso grave: <span class='fw-bold text-danger'>"+imc+" kg/m²</span>";
  }else if(imc >=17.00 && imc<=18.49){
    resultado.innerHTML="Data: "+diaHora+"<br>Peso atual: <span class='fw-bold'>"+peso+"kg</span><br>Baixo peso: <span class='fw-bold text-danger'>"+imc+" kg/m²</span>";
  }else if(imc >=18.50 && imc <=24.99){
    resultado.innerHTML="Data: "+diaHora+"<br>Peso atual: <span class='fw-bold'>"+peso+"kg</span><br>Peso normal: <span class='fw-bold text-danger'>"+imc+" kg/m²</span>";
  }else if(imc >=25.00 && imc <=29.99){
    resultado.innerHTML="Data: "+diaHora+"<br>Peso atual: <span class='fw-bold'>"+peso+"kg</span><br>Sobrepeso: <span class='fw-bold text-danger'>"+imc+" kg/m²</span>";
  }else if(imc >=30 && imc <=34.99){
    resultado.innerHTML="Data: "+diaHora+"<br>Peso atual: <span class='fw-bold'>"+peso+"kg</span><br>Obesidade grau I:  <span class='fw-bold text-danger'>"+imc+" kg/m²</span>";
  }else if(imc >=35.00 && imc <=39.99){
    resultado.innerHTML="Data: "+diaHora+"<br>Peso atual: <span class='fw-bold'>"+peso+"kg</span><br>Obesidade grau II: <span class='fw-bold text-danger'>"+imc+" kg/m²</span>";
  }else if(imc >=40.00){
    resultado.innerHTML="Obesidade grau III: (obesidade mórbida) <span class='fw-bold text-danger'>"+imc+" kg/m²</span>";
  }
 event.preventDefault(); 
});

function SomenteNumero(e){
var tecla=(window.event)?event.keyCode:e.which;
if((tecla>47 && tecla<58)) return true;
else{
if (tecla==8 || tecla==0) return true;
else  return false;
}
}