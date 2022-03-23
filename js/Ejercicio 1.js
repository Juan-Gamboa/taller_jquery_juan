$(document).ready(()=>{
    $("#formCuenta").submit((ev)=> {
        ev.preventDefault();
        var cantnum =$.trim($("#palabraInput").val());
        var resnum = cantnum.split("");
        alert("La palabra" +" "+$("#palabraInput").val()+" "+ "tiene"+" "+resnum.length+" "+"caracteres");
    });
});