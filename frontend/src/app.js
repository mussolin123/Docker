const root = document.getElementById("root");

async function loadTasks() {
  const res = await fetch("http://localhost:3000/tasks");
  const tasks = await res.json();
  root.innerHTML = `
    <h1>Lista de Tarefas</h1>
    <form id="form">
      <input type="text" placeholder="Nova tarefa" id="title">
      <button type="submit">Adicionar</button>
    </form>
    <ul>
      ${tasks.map(t => `
        <li>
          ${t.title} 
          <button onclick="deleteTask('${t._id}')">Remover</button>
        </li>
      `).join('')}
    </ul>
  `;
  document.getElementById('form').onsubmit = async (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title })
    });
    loadTasks();
  };
}

async function deleteTask(id) {
  await fetch(`http://localhost:3000/tasks/${id}`, {
    method: "DELETE"
  });
  loadTasks();
}

loadTasks();
