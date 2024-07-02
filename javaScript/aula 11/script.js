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
    habitantes.innerHTML = `<strong>Habitantes:</strong> ${estado.habitantes}`;

    let area = document.createElement("p");
    area.innerHTML = `<strong>Àrea:</strong> ${estado.area_km2} km²`;

    let bandeira = document.createElement("img");
    bandeira.setAttribute("src", estado.bandeira_url);
    bandeira.setAttribute("width", "100px");

    let imgMapa = document.createElement('img')
    imgMapa.setAttribute('src',estado.mapa_url)
    imgMapa.setAttribute('width','100px')
    imgMapa.setAttribute('alt',`Imagem do mapa do estado ${estado.nome}`)

    let linha = document.createElement('hr')

    
    div.appendChild(h3);
    div.appendChild(bandeira);
    div.appendChild(descricao);
    div.appendChild(clima);
    div.appendChild(imgMapa)
    div.appendChild(habitantes);
    div.appendChild(area);
    div.appendChild(linha)
  });
}
carregarDados();
