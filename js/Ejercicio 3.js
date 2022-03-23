$(document).ready(()=>{
    $("#formEdad").submit((ev)=> {
        ev.preventDefault();
        var nombre =$("#nombreInput").val();
        var edad = parseInt($("#edadInput").val()); 

        if (edad <18 && edad>0){
            alert("Hola" +" "+$("#nombreInput").val()+" "+ "tienes"+" "+$("#edadInput").val()+" "+"años"+" y eres menor de edad");
            }else if(edad >=18){
            alert("Hola" +" "+$("#nombreInput").val()+" "+ "tienes"+" "+$("#edadInput").val()+" "+"años"+" y eres mayor de edad");
            } else {
                alert("Hola" +" "+$("#nombreInput").val()+" "+ "por favor ingresa una edad valida");
            }
    });
});
