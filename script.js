const inptTarefa = document.querySelector('#inptTarefa');
const botaoAdd = document.querySelector('#botaoAdd');
const listaTarefas = document.querySelector('#listaTarefas');

//Cria botão para marcar a <li>
function addBotaoMarcar(li) {
	const btnMarcar = document.createElement('button');
	btnMarcar.innerHTML = '✔';
	btnMarcar.setAttribute('class', 'main-button -classMarcar');
	btnMarcar.setAttribute('title', 'Concluir tarefa');
	li.appendChild(btnMarcar);
}

//Cria botão para apagar a <li>
function addBotaoApagar(li) {
	const btnApagar = document.createElement('button');
	btnApagar.innerHTML = 'X';
	btnApagar.setAttribute('class', 'main-button -classApagar');
	btnApagar.setAttribute('title', 'Apagar tarefa');
	li.appendChild(btnApagar);
}

//Limpa input e foca
function limpaInput(){
	inptTarefa.value = '';
	inptTarefa.focus();
}

//Cria <li> com a tarefa;
function criaTarefa(tarefaValue) {
	const liElement = document.createElement('li');
	liElement.setAttribute('style', 'text-decoration: none');
	liElement.innerText = tarefaValue;
	listaTarefas.appendChild(liElement);

	addBotaoMarcar(liElement);
	addBotaoApagar(liElement);
	limpaInput();
	//salvarListaTarefas();
}

//Apaga <li> ou add line through
document.addEventListener('click', function(event) {
	const btn = event.target;
  
	if (btn.classList.contains('-classApagar')) {
		btn.parentElement.remove();
		//salvarListaTarefas();
	}

	if (btn.classList.contains('-classMarcar')){
		if(btn.parentElement.style.textDecoration == 'none'){
			btn.parentElement.style.textDecoration = 'line-through';
		}else{
			btn.parentElement.style.textDecoration = 'none';
		}
		//salvarListaTarefas();
	}
});

//Add ENTER event
inptTarefa.addEventListener('keypress', function(event){
	if (event.keyCode === 13){
		if(inptTarefa.value == '') return alert('Nenhuma tarefa foi inserida! \n Insira a tarefa!');
		criaTarefa(inptTarefa.value);
	}
});

//Add mouse click event
botaoAdd.addEventListener('click', function() {
	if(inptTarefa.value == '') return alert('Nenhuma tarefa foi inserida! \n Insira a tarefa!');
	criaTarefa(inptTarefa.value);
});

/*Salvar tarefas em JSON: */
// function salvarListaTarefas(){
// 	// pegando todos os li  que estão dentro da minha <ul class="listaTarefas">
// 	const liTarefas = listaTarefas.querySelectorAll('li');
// 	const arrayTarefas = [];

// 	for(let tarefa of liTarefas){
// 		let tarefaTexto = tarefa.innerText;
// 		tarefaTexto = tarefaTexto.replace('✔X', '').trim();
// 		arrayTarefas.push(tarefaTexto);
// 	}

// 	const tarefasJSON = JSON.stringify(arrayTarefas); //COnvertendo array em JSON(em string)
// 	localStorage.setItem('tarefas', tarefasJSON); 
// }

// function addTarefasSalvas(){
// 	const tarefas = localStorage.getItem('tarefas');
// 	const listaTarefas = JSON.parse(tarefas);

// 	for(let tarefa of listaTarefas){
// 		criaTarefa(tarefa);
// 	}
// }
// addTarefasSalvas();