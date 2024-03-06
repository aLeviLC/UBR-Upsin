import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { auth } from "./src/scripts/firebase"

document.getElementById('iniciarSesion').addEventListener('click', async (e) => {

  const correoUsuario = document.getElementById('correoUsuario').value;
  const passUsuario = document.getElementById('passUsuario').value;

  try {
    const credentials = await signInWithEmailAndPassword(auth, correoUsuario, passUsuario);
    window.location.href = './src/pages/pacientes.html';
    console.log(credentials);
  } catch (error) {
    Toastify({
      text: "Usuario o Contraseña invalidos!",
      close: true,
      duration: 3000,
      gravity: "top",
      position: "right",
      style: { 
          display: "flex", 
          justifyContent: "space-between", 
          background: "#cb4335", 
          borderRadius: "10px", 
          width: "25rem" 
      },
    }).showToast();
    console.log(error);
  }
  
});

document.querySelector('.forget-pass').addEventListener('click', (e) => {
  document.querySelector('.scrim').classList.remove('is-hidden');
});

document.querySelector('.close').addEventListener('click', (e) => {
  document.querySelector('.scrim').classList.add('is-hidden');
});

document.querySelector('.scrim').addEventListener('click', (e) => {
  document.querySelector('.scrim').classList.add('is-hidden');
});
