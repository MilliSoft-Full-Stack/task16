document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.querySelector('.inputsContainer input[type="text"]');
    const addButton = document.querySelector('.inputsContainer input[type="submit"]');
    const toDoContainer = document.querySelector('.toDoContainer');

    function addTask() {
        const inputValue = inputField.value.trim();

        if (inputValue === '') {
            alert("Please enter a task.");
            return;
        }

        const toDoDiv = document.createElement('div');
        toDoDiv.id = 'to-do';

        const taskParagraph = document.createElement('p');
        taskParagraph.textContent = inputValue;

        const deleteLink = document.createElement('a');
        deleteLink.href = '#';
        deleteLink.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

        deleteLink.addEventListener('click', function(event) {
            event.preventDefault();
            toDoContainer.removeChild(toDoDiv);
        });

        toDoDiv.appendChild(taskParagraph);
        toDoDiv.appendChild(deleteLink);
        toDoContainer.appendChild(toDoDiv);

        inputField.value = '';
    }

    addButton.addEventListener('click', function(event) {
        event.preventDefault();
        addTask();
    });

    inputField.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            addTask();
        }
    });
});
