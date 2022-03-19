$(document).ready(()=>{
    $("#formCuenta").submit((ev)=> {
        ev.preventDefault();
        var cantnum = $("#palabraInput").toArray()
        for (i = 0; i < cantnum.length; i++) {
            alert(cantnum[i].innerHTML);
            }
        alert("La palabra" +" "+$("#palabraInput").val()+" "+ "tiene"+" "+i+" "+"caracteres");
    });
})