document.addEventListener('DOMContentLoaded', () => {
    renderTasks();
  
    document.getElementById('add-task-btn').addEventListener('click', () => {
      editingTaskId = null;
      document.getElementById('task-form').reset();
      document.getElementById('modal-title').innerText = 'Nueva Tarea';
      document.getElementById('task-modal').classList.remove('hidden');
    });
  
    document.getElementById('task-form').addEventListener('submit', addOrUpdateTask);
  
    document.getElementById('cancel-btn').addEventListener('click', () => {
      document.getElementById('task-modal').classList.add('hidden');
    });
  
    document.getElementById('login-btn').addEventListener('click', () => {
      const user = prompt('Usuario:');
      const pass = prompt('Contraseña:');
      if (loginUser(user, pass)) {
        alert('Sesión iniciada');
        tasks = loadTasks();
        renderTasks();
      } else {
        alert('Credenciales incorrectas');
      }
    });
  
    document.getElementById('register-btn').addEventListener('click', () => {
      const user = prompt('Nuevo usuario:');
      const pass = prompt('Nueva contraseña:');
      if (registerUser(user, pass)) {
        alert('Usuario registrado');
      } else {
        alert('Nombre de usuario ya existe');
      }
    });
  
    document.getElementById('logout-btn').addEventListener('click', () => {
      logoutUser();
      tasks = loadTasks();
      renderTasks();
      alert('Sesión cerrada');
    });
  });
  