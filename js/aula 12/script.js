const card = document.getElementById("card");

async function buscarDados() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  return data;
}

async function render() {
  const dados = await buscarDados();
  const resultados = dados.results;

  resultados.map((result) => {
    const div = document.createElement("div");
    let gender;
    if (result.gender === "Male") {
      gender = "Masculino";
    } else {
      gender = "Feminino";
    }
    div.innerHTML = ` 
      <img width="100px" src="${result.image}" alt="" />
      <h3>${result.name}</h3>
      <p><strong> Gênero :</strong> ${gender} </p>
      <p><strong> Status :</strong>${
        result.status === "Alive" ? "Vivo" : "Morto"
      }</p>
      <p><strong> Espécie :</strong> ${
        result.species === "Alien" ? "Alienígina" : "Humano"
      }</p>
      <hr>`;

    card.appendChild(div);
  });

  //   resultados.map((result) => {

  //     let gender;
  //     if (result.gender === "Male") {
  //       gender = "Masculino";
  //     } else {
  //       gender = "Feminino";
  //     }

  //     const imagem = document.createElement("img");
  //     imagem.setAttribute("src", result.image);
  //     imagem.setAttribute("width", "100px");

  //     const titulo = document.createElement("h3");
  //     titulo.textContent = result.name;

  //     const genero = document.createElement("p");
  //     genero.innerHTML = `<strong> Gênero :</strong> ${gender}`;

  //     const status = document.createElement("p");
  //     status.innerHTML = `<strong> Status :</strong> ${
  //       result.status === "Alive" ? "Vivo" : "Morto"
  //     }`;

  //     const species = document.createElement("p");
  //     species.innerHTML = `<strong> Espécie :</strong> ${
  //       result.species === "Alien" ? "Alienígina" : "Humano"
  //     }`;

  //     card.appendChild(imagem);
  //     card.appendChild(titulo);
  //     card.appendChild(genero);
  //     card.appendChild(species);
  //     card.appendChild(status);
  //   });
}
render();
