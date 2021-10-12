const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");
const select = document.querySelector("#formulario select");
const textarea = document.querySelector("#formulario textarea");




const expresiones = {
    card: /^\d{6,16}$/,
    cvc: /^.{3}$/,
    amount: /^[0-9\.]{1,6}$/,
    firstname: /^[a-zA-ZÀ-ÿ\s]{1,30}$/,
    lastname: /^[a-zA-ZÀ-ÿ\s]{1,30}$/,
    city: /^[a-zA-ZÀ-ÿ\s]{1,30}$/,
    postalcode: /^[0-9]{4,7}$/,
    mensaje: /^[a-zA-ZÀ-ÿ0-9_.+-]{1,200}$/,

}

setTimeout(() => {
  document.getElementById("alerta").style.display= "none"
 
 
}, 6000);


const completo= {
  $card: false,
  $cvc: false,
  $amount: false,
  $firstname: false,
  $lastname: false,
  $city: false,
  $postalcode: false,
  $master: false,
  $select: false,
  $textarea: false,

}

for (let i=0;i<inputs.length;i++){
  if(inputs[i].value === ""){
    inputs[i].classList.add("input-error")
    inputs[i].classList.remove("input-valido")
  }else{
    inputs[i].classList.add("input-valido")
    inputs[i].classList.remove("input-error")
  }
}


const validar = (e) => {
 switch (e.target.name) {
   case "card":
if(expresiones.card.test(e.target.value)){
  document.getElementById("card").classList.remove("input-error")
  document.getElementById("card").classList.add("input-valido")
  document.getElementById("pcard").innerHTML= ""
  completo.$card = true
}else{
  document.getElementById("card").classList.add("input-error")
  document.getElementById("card").classList.remove("input-valido")
  document.getElementById("pcard").innerHTML= "Campo invalido, esta vacio o no contiene el rango de 6 a 16 numeros de su tarjeta."
  completo.$card = false
}
   break;

   case "cvc":
    if(expresiones.cvc.test(e.target.value)){
      document.getElementById("cvc").classList.remove("input-error")
      document.getElementById("cvc").classList.add("input-valido")
      document.getElementById("pcvc").innerHTML= ""
    completo.$cvc = true;
    }else{
      document.getElementById("cvc").classList.add("input-error")
      document.getElementById("cvc").classList.remove("input-valido")
      document.getElementById("pcvc").innerHTML= "Campo invalido, esta vacio o no contiene los 3 numeros del reverso de su tarjeta."
      completo.$cvc = false;
    }
       break;

       case "amount":
        if(expresiones.amount.test(e.target.value)){
          document.getElementById("amount").classList.remove("input-error")
          document.getElementById("amount").classList.add("input-valido")
          document.getElementById("pamount").innerHTML= ""
          completo.$amount = true;
        }else{
          document.getElementById("amount").classList.add("input-error")
          document.getElementById("amount").classList.remove("input-valido")
          document.getElementById("pamount").innerHTML= "Campo invalido (esta vacio, no contiene un valor monetario o excede los 6 digitos)."
          completo.$amount = false;
        }
           break;

           case "firstname":
            if(expresiones.firstname.test(e.target.value)){
              document.getElementById("firstname").classList.remove("input-error")
              document.getElementById("firstname").classList.add("input-valido")
              document.getElementById("pfirstname").innerHTML= ""
              completo.$firstname = true;
            }else{
              document.getElementById("firstname").classList.add("input-error")
              document.getElementById("firstname").classList.remove("input-valido")
              document.getElementById("pfirstname").innerHTML= "Campo invalido, esta vacio o no cumple con las caracteristicas de un nombre."
              completo.$firstname = false;
            }

               break;

               case "lastname":
                if(expresiones.lastname.test(e.target.value)){
                  document.getElementById("lastname").classList.remove("input-error")
                  document.getElementById("lastname").classList.add("input-valido")
                  document.getElementById("plastname").innerHTML= ""
                  completo.$lastname = true;
                }else{
                  document.getElementById("lastname").classList.add("input-error")
                  document.getElementById("lastname").classList.remove("input-valido")
                  document.getElementById("plastname").innerHTML= "Campo invalido, esta vacio o no cumple con las caracteristicas de un apellido."
                  completo.$lastname = false;
                }
                   break;

                   case "city":
                if(expresiones.city.test(e.target.value)){
                  document.getElementById("city").classList.remove("input-error")
                  document.getElementById("city").classList.add("input-valido")
                  document.getElementById("pcity").innerHTML= ""
                  completo.$city = true;
                }else{
                  document.getElementById("city").classList.add("input-error")
                  document.getElementById("city").classList.remove("input-valido")
                  document.getElementById("pcity").innerHTML= "Campo invalido, esta vacio o no agrego una ciudad."
                  completo.$city = false;
                }
                   break;
    
                   case "postalcode":
                    if(expresiones.postalcode.test(e.target.value)){
                      document.getElementById("postalcode").classList.remove("input-error")
                      document.getElementById("postalcode").classList.add("input-valido")
                      document.getElementById("ppostalcode").innerHTML= ""
                      completo.$postalcode = true;
                    }else{
                      document.getElementById("postalcode").classList.add("input-error")
                      document.getElementById("postalcode").classList.remove("input-valido")
                      document.getElementById("ppostalcode").innerHTML= "Campo invalido, esta vacio o no agrego un codigo postal correcto ( de 4 a 7 digitos)."
                      completo.$postalcode = false;
                    }
                       break;
    
                       case "master":
                      if (inputs[7].checked == true || inputs[8].checked == true || inputs[9].checked == true || inputs[10].checked == true ){
                        document.getElementById("pmaster").innerHTML = ""
                        document.getElementById("radios").classList.remove("input-error")
                        document.getElementById("radios").classList.add("input-valido")
                        completo.$master = true;
                      }else{
                        document.getElementById("pmaster").innerHTML = "Uno de los campos debe ser seleccionado"
                        document.getElementById("radios").classList.remove("input-valido")
                        document.getElementById("radios").classList.add("input-error")
                        completo.$master = false;
                      }
                       break;

 }

if (select.value !== "Pick a state" ){
document.getElementById("pselect").innerHTML= ""
document.getElementById("Select").classList.remove("input-error")
                  document.getElementById("Select").classList.add("input-valido")
completo.$select = true;
}else{document.getElementById("pselect").innerHTML= "Debe seleccionar un elemento."
document.getElementById("Select").classList.add("input-error")
                  document.getElementById("Select").classList.remove("input-valido")
completo.$select = false;
}

if(expresiones.mensaje.test(textarea.value)){
                  document.getElementById("mensaje").classList.remove("input-error")
                  document.getElementById("mensaje").classList.add("input-valido")
                  document.getElementById("pmensaje").innerHTML = ""
                  completo.$textarea = true;
                }else{
                  document.getElementById("mensaje").classList.add("input-error")
                  document.getElementById("mensaje").classList.remove("input-valido")
                  document.getElementById("pmensaje").innerHTML = "Debe agregar un texto."
                  completo.$textarea = false;
                }
                  
             
                

}





textarea.addEventListener("change", validar);
textarea.addEventListener("keyup", validar);
textarea.addEventListener("blur", validar)

select.addEventListener("change", validar);

inputs.forEach((input) =>{
  input.addEventListener("change", validar);
  input.addEventListener("keyup", validar);
  input.addEventListener("blur", validar)
})

formulario.addEventListener ("submit", (e) => {
  e.preventDefault();
if(  completo.$card == true && completo.$cvc == true && completo.$amount == true && completo.$firstname == true && completo.$lastname == true && completo.$city == true && completo.$postalcode == true && completo.$master == true && completo.$select == true && completo.$textarea == true){
  e.target.submit();
}

});

