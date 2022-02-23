let pricetotal=0;

window.onload = function() {
  getCheckedValues();
}
window.onload= function price() {//funcion, para calcular el precio
  
  const recalculateText = document.querySelector(".recalculate-text");
  const checkboxContainer = document.querySelector("#checkbox-container");
  let total = 0;
  
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  
  checkboxContainer.addEventListener('change', e => {
    if (e.target.tagName == "INPUT") {
      const floatValue = parseFloat(e.target.value);
      if (e.target.checked) {
        total += floatValue;
      } else {
        total -= floatValue;
      }
    }
  
    recalculateText.innerHTML = formatter.format(total);
    pricetotal=recalculateText.innerHTML = formatter.format(total);;
  
  });
 
  
  };//Final de funcion

function cargar(){
  
  document.getElementById('add').addEventListener('click',send,false);
}
function send(){//funcion, para input enviar
      let hasError = false;
        if(!document.querySelector('input[class="datos"]:checked') && !document.querySelector('input[class="datos"]:checked')){//validar que sea selecionado al menos un combo o product
             hasError = true;
            alert('Debe seleccionar un combo o producto, para continuar')
    
      } else{
              function getCheckedValues() {//funcion para, agregar los combos y productos a un array
              return Array.from(document.getElementsByClassName('datos'))
             .filter((checkbox) => checkbox.checked)
             .map((checkbox) => checkbox.name);
              }
               const resultEl = document.getElementById('result');
              resultEl.innerHTML =  getCheckedValues();
              const mensaje = document.getElementById('msj');
              mensaje.innerHTML = "<span>" + "El total a pagar por el combo seleccionado y productos es:" + pricetotal + "</span>";
  }
  
};

  if(window.addEventListener){
    window.addEventListener("load", cargar, false);
    }
    else if(window.attachEvent){
    window.attachEvent("onload", cargar);
    }

 
  
  
           
        