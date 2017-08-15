function TodoController() {

	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again
	var todoService = new TodoService()

	function getTodos() {
		todoService.getTodos(draw)
	}

	function draw(todos) {
		var todoElem = document.getElementById("list")
		var template = '<dl>'
		for (var i = 0; i < todos.length; i++) {
			var todo = todos[i];
			if (todo.taskStatus == true){
			template += `
			<div>
			<input type="checkbox" name="check" checked="checked" onchange="app.controllers.todoController.toggleTodoStatus('${todo._id}')"> ${todo.task}
			</div>
			<dd>Status complete? - ${todo.taskStatus}</dd>
			<button type="button" onclick="app.controllers.todoController.removeTodo('${todo._id}')">Delete</button>
			`
		}
		else{
			template += `
			<div>
			<input type="checkbox" name="check" onchange="app.controllers.todoController.toggleTodoStatus('${todo._id}')"> ${todo.task}
			</div>
			<dd>Status complete? - ${todo.taskStatus}</dd>
			<button type="button" onclick="app.controllers.todoController.removeTodo('${todo._id}')">Delete</button>
			`
		}

		}
		template += '</dl>'
		todoElem.innerHTML = template
	}

	this.addTodoFromForm = function (e) {
		e.preventDefault()
		var form = e.target.todoList.value
		var x=e.target
		var todo = {
			task: form
		}
		todoService.addTodo(todo, getTodos)
		x.reset();
	}

	this.toggleTodoStatus = function (todoId) {	
		todoService.toggleTodoStatus(todoId, getTodos)

	}

	this.removeTodo = function (todoId) {
		todoService.removeTodo(todoId, getTodos)
	}
	getTodos()
}
