const inptTarefa = document.querySelector('#inptTarefa');
const botaoAdd = document.querySelector('#botaoAdd');
const listaTarefas = document.querySelector('#listaTarefas');

//Cria botão para marcar a <li>
function addBotaoMarcar(li) {
	const btnMarcar = document.createElement('button');
	btnMarcar.innerHTML = '✔';
	btnMarcar.setAttribute('class', 'classMarcar');
	btnMarcar.setAttribute('title', 'Concluir tarefa');
	li.appendChild(btnMarcar);
}

//Cria botão para apagar a <li>
function addBotaoApagar(li) {
	const btnApagar = document.createElement('button');
	btnApagar.innerHTML = 'X';
	btnApagar.setAttribute('class', 'classApagar');
	btnApagar.setAttribute('title', 'Apagar tarefa');
	li.appendChild(btnApagar);
}

function limpaInput(){
	inptTarefa.value = '';
	inptTarefa.focus();
}

function criaTarefa(tarefaValue) {
	//Cria <li> com a tarefa;
	const liElement = document.createElement('li');
	liElement.setAttribute('style', 'text-decoration: none');
	liElement.innerText = tarefaValue;
	listaTarefas.appendChild(liElement);

	addBotaoMarcar(liElement);
	addBotaoApagar(liElement);
	limpaInput();
}

document.addEventListener('click', function(e) {
	const btn = e.target;
  
	if (btn.classList.contains('classApagar')) {
		btn.parentElement.remove();
	}

	if (btn.classList.contains('classMarcar')){
		if(btn.parentElement.style.textDecoration == 'none'){
			btn.parentElement.style.textDecoration = 'line-through';
		}else{
			btn.parentElement.style.textDecoration = 'none';
		}
	}
});

botaoAdd.addEventListener('click', function() {
	if(inptTarefa.value == '') return alert('Nenhuma tarefa foi inserida! \n Insira a tarefa!');
	criaTarefa(inptTarefa.value);
});
