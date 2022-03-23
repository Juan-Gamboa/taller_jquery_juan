$(document).ready(()=>{
    $("#formNumero").submit((ev)=> {
        ev.preventDefault();
        var num = parseInt($("#numeroInput").val()); 
        if (num<0){
            if ( Number.isInteger(num)){
             alert("Debe ingresar números positivos");
            }else{
             alert("Debe ingresar números enteros positivos");
            }      
        }else{
             if(Number.isInteger(num)){
                 if(num % 2==0){
                     alert("El numero "+$("#numeroInput").val()+" es Par");
                 }else{
                     alert("El numero "+$("#numeroInput").val()+" es Impar");
                 }  
             }else {
                 alert("Debe ingresar números enteros");
              }
        } 
    });    
});
