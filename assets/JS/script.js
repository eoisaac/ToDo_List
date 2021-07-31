const inptTask = document.querySelector('#inptTask');
const addButton = document.querySelector('#addButton');
const tasksList = document.querySelector('#tasksList');

//Cria botão para marcar a <li>
function checkTask(li) {
	const checkButton = document.createElement('button');
	checkButton.innerHTML = '✔';
	checkButton.setAttribute('class', 'main-button -classCheck');
	checkButton.setAttribute('title', 'Concluir tarefa');
	li.appendChild(checkButton);
}

//Cria botão para apagar a <li>
function clearTask(li) {
	const clearButton = document.createElement('button');
	clearButton.innerHTML = 'X';
	clearButton.setAttribute('class', 'main-button -classDelete');
	clearButton.setAttribute('title', 'Apagar tarefa');
	li.appendChild(clearButton);
}

//Limpa input e foca
function clearInput(){
	inptTask.value = '';
	inptTask.focus();
}

//Cria <li> com a tarefa;
function createTask(tarefaValue) {
	const liElement = document.createElement('li');
	liElement.setAttribute('style', 'text-decoration: none');
	liElement.innerText = tarefaValue;
	tasksList.appendChild(liElement);

	checkTask(liElement);
	clearTask(liElement);
	clearInput();
	//salvarListaTarefas();
}

//Apaga <li> ou add line through
document.addEventListener('click', function(event) {
	const btn = event.target;
  
	if (btn.classList.contains('-classDelete')) {
		btn.parentElement.remove();
		//salvarListaTarefas();
	}

	if (btn.classList.contains('-classCheck')){
		if(btn.parentElement.style.textDecoration == 'none'){
			btn.parentElement.style.textDecoration = 'line-through';
		}else{
			btn.parentElement.style.textDecoration = 'none';
		}
		//salvarListaTarefas();
	}
});

//Add ENTER event
inptTask.addEventListener('keypress', function(event){
	if (event.keyCode === 13){
		if(inptTask.value == '') return alert('Nenhuma tarefa foi inserida! \n Insira a tarefa!');
		createTask(inptTask.value);
	}
});

//Add mouse click event
addButton.addEventListener('click', function() {
	if(inptTask.value == '') return alert('Nenhuma tarefa foi inserida! \n Insira a tarefa!');
	createTask(inptTask.value);
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
// 		createTask(tarefa);
// 	}
// }
// addTarefasSalvas();