function enviarWhatsApp() {
    let numero = document.getElementById('telefono').value.trim(); 

    if (!numero || !numero.startsWith('+52')) {
        alert("Por favor, ingresa un número de teléfono válido con código de país.");
        return;
    }

    let mensaje = document.getElementById('mensaje').value.trim();

    if (!mensaje) {
        alert("Por favor, escribe un mensaje antes de enviar.");
        return;
    }

    let mensajeCodificado = encodeURIComponent(mensaje);

    let url = `https://api.whatsapp.com/send?phone=${numero}&text=${mensajeCodificado}`;

    window.open(url, '_blank');
}
