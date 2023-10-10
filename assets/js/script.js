document.getElementById("btn__registrarse").addEventListener("click", register);
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__forgotten_password").addEventListener("click", contraseñaOlvidada);
window.addEventListener("resize", anchoPage);

//Declaracion de variables
var contenedor_login_register = document.querySelector(".contenedor__login-register")
var formulario_login = document.querySelector(".formulario__login")
var formulario_register = document.querySelector(".formulario__register")
var caja_trasera_login = document.querySelector(".caja__trasera-login")
var caja_trasera_register = document.querySelector(".caja__trasera-register")


function anchoPage(){
    if(window.innerWidth > 850){
        caja_trasera_login.style.display = "block";
        caja_trasera_register.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0"
    }
}

anchoPage();
/*Pasar a formulario iniciar sesión*/
function iniciarSesion(){
    if(window.innerWidth > 850){
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "10px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    } else{
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
    }
    
}

function contraseñaOlvidada(){
    document.getElementsByClassName("formulario_recupero").style.display = "block";
}

/*Pasar a formulario register*/
function register(){

    if(window.innerWidth > 850){
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    } else{
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";
    }
    
}