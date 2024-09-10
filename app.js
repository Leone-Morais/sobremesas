function pesquisar(){

    let section = document.getElementById("resultados-pesquisa");

let resultados = "";

let campoPesquisa = document.getElementById ("campo-pesquisa").value; 

if (campoPesquisa == ""){
    section.innerHTML = "<p>Nenhuma receita encontrada!</p>"
    return
};

campoPesquisa = campoPesquisa.toLowerCase();
let titulo ="";
let descricao ="";

for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
        resultados += `;
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
                    <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
        `;
    };
};

if(!resultados){
    resultados = "<p>Nenhuma receita encontrada!</p>";
}

section.innerHTML = resultados
};