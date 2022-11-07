const btnFetch = document.getElementById('fetchTodos');
const btnAdd = document.getElementById('addTodo');
const f1 = document.getElementById('f1');
const title=f1.title;
const content=f1.content;

const todos = [];

let todosDiv = document.getElementById('todos');

btnFetch.addEventListener('click', () =>
  fetch('./api/todos')
    .then(response => response.json())
    .then(data => data.forEach((todo) => listTodos(todo))),
);

btnAdd.addEventListener('click', () =>
    fetch('./api/todos', {    
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            title: title.value,
            content: content.value
        })
    })
    .then(response => response.json())
    .then(data => { 
        listTodos(data)
    }),
);


listTodos = (todo) => { 
    todos.push(todo);
    todosDiv.innerHTML += `
        <p class="todo">
            <b>${todo.title}</b> ${todo.content}
        </p>
        <hr>
    `;
}
