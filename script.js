const inptTarefa = document.querySelector('#inptTarefa');
const botaoAdd = document.querySelector('#botaoAdd');
const listaTarefas = document.querySelector('#listaTarefas');

//Cria botão para marcar a <li>
function addBotaoMarcar(li){
	const btnMarcar = document.createElement('button');
	btnMarcar.innerHTML = '✔';
	btnMarcar.setAttribute('id', 'idMarcar');
	btnMarcar.setAttribute('class', 'classMarcar');
	btnMarcar.setAttribute('title', 'Concluir tarefa');
	li.appendChild(btnMarcar);
}

//Cria botão para apagar a <li>
function addBotaoApagar(li){
	const btnApagar = document.createElement('button');
	btnApagar.innerHTML = 'X';
	btnApagar.setAttribute('id', 'idApagar');
	btnApagar.setAttribute('class', 'classApagar');
	btnApagar.setAttribute('title', 'Apagar tarefa');
	li.appendChild(btnApagar);
}

function criaTarefa(tarefaValue){
	//Cria <li> com a tarefa;
	const liElement = document.createElement('li');
	liElement.innerText = tarefaValue;
	listaTarefas.appendChild(liElement);
	addBotaoMarcar(liElement);
	addBotaoApagar(liElement);
}



botaoAdd.addEventListener('click', function(){
	if(inptTarefa.value == '') return alert('Insira a tarefa!');
	criaTarefa(inptTarefa.value);
});
