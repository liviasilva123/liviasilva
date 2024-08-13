/* Variáveis globais e para manipulação do DOM (Document Objet Model) */
var container = document.querySelector(".container");
var todasAtividades = [];

function inserirAtividade() {
  var inputText = document.querySelector("#inputText");

  if(inputText.value == ""){
    alert("Campo vazio! Preencha alguma atividade.");
  }else{
    /* Cadastro da Atividade */
    container.innerHTML = "";

    var atividade = document.createElement("div");
    atividade.classList.add("atividade");

    var input = document.createElement("input");
    input.type = "checkbox";
    input.addEventListener("change",atualizarstatus);

    var p = document.createElement("p");
    p.innerHTML = inputText.value;

    var btn = document.createElement("button");
    btn.innerHTML = "Remover";
    btn.addEventListener("click", removerAtividade);

    atividade.appendChild(input);
    atividade.appendChild(p);
    atividade.appendChild(btn);

    inputText.value = "";

    todasAtividades.push(atividade);
    for(i = 0; i < todasAtividades.length; i++){
      container.appendChild(todasAtividades[i]);
    }
  }
}

function removerAtividade(event){
  console.log(event.target.parentElement);

  var index = todasAtividades.indexOf(event.target.parentElement);

  console.log("Index: ", index);

  todasAtividades.splice(index,1)
  
  container.innerHTML=""
  for(i=0;i<todasAtividades.length;i++){
    container.appendChild(todasAtividades[i]);
  }
}

function atualizarstatus(event){
var elempai=event.target.parentElement;
  if(event.target.cheked==true){
    console.log("Input marcado");
   elempai.style.opacity="50%;"
elempai.style.opacity="50%";
elempai.children[1].style.textDecoration="line-through"
  }else{
    console.log(" Input Desmarcado");
    elempai.children[1].style.opacity="100%"
     elempai.children[1].style.textDecoration="";
  }
}