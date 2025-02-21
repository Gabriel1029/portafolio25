document.getElementById("contactForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    let form = event.target;
    let formData = new FormData(form);

    let response = await fetch("https://formspree.io/f/mwpvyjav", {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
    });

    let mensaje = document.getElementById("respuesta");

    if (response.ok) {
        mensaje.textContent = "¡Mensaje enviado con éxito!";
        mensaje.style.color = "green";
        form.reset();
    } else {
        mensaje.textContent = "Hubo un error al enviar.";
        mensaje.style.color = "red";
    }
});
