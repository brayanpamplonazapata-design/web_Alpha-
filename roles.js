
const formulario = document.getElementById("formRoles");

formulario.addEventListener("submit", function(e) {
    e.preventDefault(); // Evita que el formulario se recargue

    const rol = document.querySelector('input[name="rol"]:checked');

    if (!rol) {
        alert("Selecciona un rol");
    } else if (rol.value === "administrador") {
        window.location.href = "login_admin.html";
    } 
    else if (rol.value === "docente") {
        window.location.href = "login_docente.html";
    } 
    else if (rol.value === "estudiante") {
        window.location.href = "login_estudiante.html";
    }
    else ("nada");
});