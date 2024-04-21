function darkMode() {
    document.body.classList.add('dark-mode');
    document.querySelector('.container').classList.add('dark-mode');
    document.querySelector('nav').classList.add('dark-mode');
}

function lightMode() {
    document.body.classList.remove('dark-mode');
    document.querySelector('.container').classList.remove('dark-mode');
    document.querySelector('nav').classList.remove('dark-mode');
}

function sendForm(event){
    event.preventDefault();
    Swal.fire({
        title: "Registración exitosa",
        text: "Se registro correctamente.",
        icon: "success"
      });
    document.getElementById('nombre').value = "";
    document.getElementById('email').value = "";
    document.getElementById('telefono').value = "";
    document.getElementById('password').value = "";
}