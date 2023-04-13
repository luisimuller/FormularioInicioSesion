$(document).ready(function() {
    $("#basic-form").validate(
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
                    required: "Se requiere nombre de usuario",
                    minlength: "El nombre de usuario debe tener al menos 3 letras"
                },
                email: {
                    email: "El email no tiene el formato requerido"
                },
                clave: {
                    required: "Ingrese su contraseña",
                    minlength: "La contraseña debe contener al menos 7 caracteres"
                }
                
           }
        }
    )
  });

  