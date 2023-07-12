document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    const mensajeRegistro = document.getElementById("mensajeRegistro");
    mensajeRegistro.textContent = "Usuario registrado";
  });
  