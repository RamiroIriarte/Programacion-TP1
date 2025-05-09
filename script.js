function buscarUniversidades() {
  const input = document.getElementById("countryInput");
  const country = input.value.trim();
  const resultsList = document.getElementById("results");
  resultsList.innerHTML = "";

  if (country === "") {
    alert("Por favor, escribe un país.");
    return;
  }

  const apiUrl =`http://universities.hipolabs.com/search?country=${encodeURIComponent(country)}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.length === 0) {
        resultsList.innerHTML = "<li>No se encontraron universidades para ese país.</li>";
        return;
      }

      data.forEach(universidad => {
        const li = document.createElement("li");
        li.innerHTML = `
          <strong class="destacado">${universidad.name}</strong><br>
          <a href="${universidad.web_pages[0]}" class="enlace" target="_blank">${universidad.web_pages[0]}</a>
        `;
        resultsList.appendChild(li);
      });
    })
    .catch(error => {
      console.error("Error al obtener universidades:", error);
      resultsList.innerHTML = "<li>Ocurrió un error al consultar la API.</li>";
    });
}