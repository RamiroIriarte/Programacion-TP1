// Seleccionamos el <ul> donde mostraremos los usuarios
const lista = document.getElementById('lista-usuarios');

// Usamos fetch para hacer la solicitud GET a la API
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la respuesta de la API');
    }
    return response.json(); // Convertimos la respuesta a JSON
  })
  .then(data => {
    // Recorremos el arreglo de usuarios y los mostramos
    data.forEach(usuario => {
      const li = document.createElement('li');
      li.textContent = `${usuario.name} (${usuario.email})`;
      lista.appendChild(li);
    });
  })
  .catch(error => {
    console.error('Hubo un problema:', error);
  });