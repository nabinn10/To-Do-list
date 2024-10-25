document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the task value
    const taskValue = document.getElementById('new-task').value;
    if (taskValue === '') return;
  
    // Create a new task element
    const taskItem = document.createElement('li');
    taskItem.textContent = taskValue;
  
    // Create a button to mark the task as complete
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.onclick = function() {
      taskItem.classList.toggle('completed');
    };
  
    // Add the button to the task item
    taskItem.appendChild(completeButton);
  
    // Add the task item to the list
    document.getElementById('tasks-list').appendChild(taskItem);
  
    // Clear the input
    document.getElementById('new-task').value = '';
  });
  