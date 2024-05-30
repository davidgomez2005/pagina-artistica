function toggleMenu() {
    var menu = document.getElementById("main-menu");
    menu.classList.toggle("show");
}

document.getElementById("contenedorform").addEventListener("submit", function(event) {
    event.preventDefault(); 

   
    var nombre = document.getElementById("Nombre").value;
    var apellidos = document.getElementById("Apellidos").value;
    var documento = document.getElementById("documento").value;
    var correo = document.getElementById("gmail").value;
    var celular = document.getElementById("celular").value;
    var fecha = document.getElementById("it").value;

    console.log("Nombre:", nombre);
    console.log("Apellidos:", apellidos);
    console.log("Documento:", documento);
    console.log("Correo:", correo);
    console.log("Celular:", celular);
    console.log("Fecha de la Exposición:", fecha);
});
