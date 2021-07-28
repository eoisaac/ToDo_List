const inptTarefa = document.querySelector('#inptTarefa');
const botaoAdd = document.querySelector('#botaoAdd');
const listaTarefas = document.querySelector('#listaTarefas');


function criaTarefa(tarefaValue){
	//Cria <li> com a tarefa;
	const liElement = document.createElement('li');
	liElement.innerText = tarefaValue;
	listaTarefas.appendChild(liElement);

	//Cria botão para marcar a <li>
	const btnMarcar = document.createElement('button');
	btnMarcar.innerHTML = '✔'
	liElement.appendChild(btnMarcar);

	//Cria botão para apagar a <li>
	const btnApagar = document.createElement('button');
	btnApagar.innerHTML = 'X'
	liElement.appendChild(btnApagar);
}



botaoAdd.addEventListener('click', function(){
	if(inptTarefa.value == '') return alert('Insira a tarefa!');
	criaTarefa(inptTarefa.value);
});
