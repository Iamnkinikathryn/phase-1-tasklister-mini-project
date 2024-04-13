document.addEventListener("DOMContentLoaded", () => {
  // your code here
    const form = document.getElementById('create-task-form');
    const tasksList = document.getElementById('tasks-list');

    // Listen for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Stop the form from causing a page reload

        // Get the task description from the input
        const newTaskDescription = document.getElementById('new-task-description').value;

        if (newTaskDescription.trim() !== "") {
            // Create a new task item
            const newTask = document.createElement('li');
            newTask.textContent = newTaskDescription;

            // Optional: Adding a delete button to each task
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                tasksList.removeChild(newTask);
            });

            newTask.appendChild(deleteButton);

            // Optional: Adding a dropdown for priority
            const prioritySelect = document.createElement('select');
            prioritySelect.innerHTML = `
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            `;
            prioritySelect.addEventListener('change', () => {
                const selectedPriority = prioritySelect.value;
                switch (selectedPriority) {
                    case 'high':
                        newTask.style.color = 'red';
                        break;
                    case 'medium':
                        newTask.style.color = 'orange';
                        break;
                    case 'low':
                        newTask.style.color = 'green';
                        break;
                }
            });

            newTask.appendChild(prioritySelect);

            // Append the task to the list
            tasksList.appendChild(newTask);

            // Clear the input field
            document.getElementById('new-task-description').value = '';
        } else {
            alert('Please enter a task description.');
        }
    });
});


