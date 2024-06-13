const div = document.getElementById("estadosBrasil");

async function carregarDados() {
  const response = await fetch("./db/data.json");
  const data = await response.json();
  const estados = data.estados;


  estados.map((estado) => {
    let h3 = document.createElement("h3");
    h3.textContent = estado.nome;

    let descricao = document.createElement("p");
    descricao.textContent = estado.descricao;

    let clima = document.createElement("p");
    clima.textContent = estado.clima;

    let habitantes = document.createElement("p");
    habitantes.innerHTML = `Habitantes: ${estado.habitantes}`;

    let area = document.createElement("p");
    area.innerHTML = `Àrea: ${estado.area_km2} km²`;

    let bandeira = document.createElement("img");
    bandeira.setAttribute("src", estado.bandeira_url);
    bandeira.setAttribute("width", "100px");

    div.appendChild(h3);
    div.appendChild(bandeira);
    div.appendChild(descricao);
    div.appendChild(clima);
    div.appendChild(habitantes);
    div.appendChild(area);
  });
}
carregarDados();
