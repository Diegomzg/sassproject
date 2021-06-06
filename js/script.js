'use strict'

window.addEventListener('load', function(){
    console.log("DOM cargado!!");

    var form = document.querySelector("#form");

    form.addEventListener('submit', function(){
        console.log("Evento submit capturado");

        var name = document.getElementById ("name").value;
        var email = document.querySelector("#email").value;
        var password = document.querySelector ("#password").value;

    
    })
});
