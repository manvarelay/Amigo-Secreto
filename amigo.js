let amigos = [];

document.getElementById('botonAgregar').addEventListener('click', function() {
  const campoNombre = document.getElementById('campoNombre');
  const nombre = campoNombre.value.trim();

  if (nombre === "") {
    alert("Ingresa un nombre válido.");
    return;
  }
// que nos e repitan nombres
  if (amigos.includes(nombre)) {
    alert("Este nombre ya ha sido agregado.");
    return;
  }

  amigos.push(nombre);
  campoNombre.value = "";
  MostrarAmigos();
});

function MostrarAmigos() {
  const ListaAmigos = document.getElementById('ListaAmigos');
  ListaAmigos.innerHTML = "";

  amigos.forEach(amigo => {
    const li = document.createElement('li');
    li.textContent = amigo;
    ListaAmigos.appendChild(li);
  });
}

document.getElementById('botonSortear').addEventListener('click', function() {
  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  }

  const sorteo = Math.floor(Math.random() * amigos.length);
  document.getElementById('amigoSecreto').textContent = amigos[sorteo];
});
