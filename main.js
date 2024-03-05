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
    alert("Usuario o contraseña incorrectos!");
  }
  
});
