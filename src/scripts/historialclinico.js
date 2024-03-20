import '@fortawesome/fontawesome-free/css/all.css';

const returnn = document.getElementById('return');

returnn.addEventListener('click', async () => {
    window.location.href = './pacientes.html';
});

const selectEstado = document.getElementById('estadu');
    const selectMunicipio = document.getElementById('municipio');
    
    async function cargarDatos() {
      try {
        const response = await fetch('https://raw.githubusercontent.com/martinciscap/json-estados-municipios-mexico/master/estados-municipios.json');
        const data = await response.json();
        
        // Obtener estados
        const estados = Object.keys(data);
        estados.forEach(estado => {
          const optionEstado = document.createElement('option');
          optionEstado.value = estado;
          optionEstado.textContent = estado;
          selectEstado.appendChild(optionEstado);
        });
        
        // Mostrar municipios al seleccionar un estado
        selectEstado.addEventListener('change', () => {
          const estadoSeleccionado = selectEstado.value;
          const municipios = data[estadoSeleccionado];
          
          // Limpiar select de municipios
          selectMunicipio.innerHTML = '';
          
          // Llenar select de municipios
          municipios.forEach(municipio => {
            const optionMunicipio = document.createElement('option');
            optionMunicipio.value = municipio;
            optionMunicipio.textContent = municipio;
            selectMunicipio.appendChild(optionMunicipio);
          });
        });
      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    }
    
    cargarDatos();