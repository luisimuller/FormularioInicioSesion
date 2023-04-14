

//VALIDACIÓN DE FORMULARIO UTILIZANDO JQUERY
$(document).ready(function() {
    $("#primer-form").validate(
        {
            rules: {
                nombre: {
                    required: true,
                    minlength: 3,
                },
                email: {
                    required: true,
                    email: true
                   
                },
                clave: {
                   required: true,
                   minlength: 7
                }
           },
           messages: {
                nombre: {
                    required: "El nombre de usuario debe contener al menos 3 letras",
                    minlength: "El nombre de usuario debe contener al menos 3 letras"
                },
                email: {
                    required: "Debe ingresar su correo electrónico",
                    email: "El email no tiene el formato requerido"
                    
                },
                clave: {
                    required: "Ingrese su contraseña",
                    minlength: "La contraseña debe contener al menos 7 caracteres"
                }
                
           }
        }
    )

    $("#segundo-form").validate(
        {
            rules: {
                usuarioRegistro: {
                    required:  true,
                    minlength: 3,
                },
                emailRegistro: {
                    required: true,
                    email: true
                   
                },
                claveRegistro: {
                   required: true,
                   minlength: 7
                },
                claveConfirm: {
                    required: true,
                    minlength: 7
                 }

           },
           messages: {
                usuarioRegistro: {
                    required: "El nombre de usuario debe contener al menos 3 letras",
                    minlength: "El nombre de usuario debe tener al menos 3 letras"
                },
                emailRegistro: {
                    required: "Ingrese su correo electrónico",
                    email: "El email no tiene el formato requerido"
                },
                claveRegistro: {
                    required: "Ingrese su contraseña",
                    minlength: "La contraseña debe contener al menos 7 caracteres"
                },
                claveConfirm: {
                    required: "Confirme la contraseña ingresada",
                    minlength: "La contraseña debe contener al menos 7 caracteres"

                }
                
           }
        }
    )

  });


// Código para obtener pdf

function genPDF(){
    var doc= new jsPDF();
    let Usuario=document.getElementById("usuarioRegistro").value;
    let correoElectronico=document.getElementById("emailRegistro").value;
    let clave=document.getElementById("claveRegistro").value;
    let ConfirmacionDeClave=document.getElementById("claveConfirm").value;

    doc.text("Usuario: "+ Usuario,10,20);
    doc.text("Email: "+ correoElectronico,10,30);
    doc.text("Contraseña: "+ clave,10,40);
    doc.text("Confirmación de contraseña: "+ConfirmacionDeClave,10,50);
    doc.save("Midocumento.pdf")
}









// enviar ingreso

// function enviarConsulta(event) {
//     event.preventDefault();
//       const ingreso = document.getElementById('primer-form');
//       ingreso.submit();
//     }
  





//   Reseteo de los valores del formulario de ingreso

//   document.addEventListener('DOMContentLoaded', function(){
//     let formularioIngreso = document.getElementById('primer-form');
//     formularioIngreso.addEventListener('submit', function() {
//     formularioIngreso.reset();
//     });
//   });

//  Reseteo de los valores del formulario de Registro

//  document.addEventListener('DOMContentLoaded', function(){
//     let formularioRegistro = document.getElementById('segundo-form');
//     formularioRegistro.addEventListener('submit', function() {
//         formularioRegistro.reset();
//     });
//   });






//   function CapturarDatosIngreso()
//   {
//       var nombre = document.getElementById('nombre').value;
//       var email = document.getElementById('email').value;
//         if(nombre.lenght>3){
//             alert("Bienvenido"+" "+nombre+" "+"te estabamos esperando!")
//         }

      
//     }

  