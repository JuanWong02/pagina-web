function validar() {
    let nombre, email, tema, mensaje;
    nombre = document.getElementById("nombre").value;
    email = document.getElementById("email").value;
    tema = document.getElementById("tema").selectedIndex;
    mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || email === "" || tema > 0 || mensaje === "") {
        alert("Todos los campos son obligatorios");
    }
    else if (tema.length === 0 || tema == null) {
        alert("Selecciona Una opción");
        tema.focus();
    }
    else if (mensaje.length === 0 || mensaje === null ) {
        alert("Escribe un mensaje");
    }
}
