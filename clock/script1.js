document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const needInput = document.getElementById('needInput');
    const dueDateInput = document.getElementById('dueDateInput');
    const startTimeInput = document.getElementById('startTimeInput');
    const repeatSelect = document.getElementById('repeatSelect');
    const importanceSelect = document.getElementById('importanceSelect');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');

    const editModal = document.getElementById('editModal');
    const closeModal = document.querySelector('.close');
    const editForm = document.getElementById('editForm');
    const editTaskInput = document.getElementById('editTaskInput');
    const editNeedInput = document.getElementById('editNeedInput');
    const editDueDateInput = document.getElementById('editDueDateInput');
    const editStartTimeInput = document.getElementById('editStartTimeInput');
    const editRepeatSelect = document.getElementById('editRepeatSelect');
    const editImportanceSelect = document.getElementById('editImportanceSelect');
    const editTaskIndex = document.getElementById('editTaskIndex');

    const confirmModal = document.getElementById('confirmModal');
    const closeConfirm = document.querySelector('.close-confirm');
    const confirmDelete = document.getElementById('confirmDelete');
    const cancelDelete = document.getElementById('cancelDelete');

    let deleteTaskElement;

    // Load tasks from local storage
    loadTasks();

    // Add a task
    addButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        const need = needInput.value.trim();
        const dueDate = dueDateInput.value;
        const startTime = startTimeInput.value;
        const repeat = repeatSelect.value;
        const importance = importanceSelect.value;

        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="task-info">
                    <span class="task-text">${taskText}</span>
                    <span class="task-importance" style="background-color: ${importance};"></span>
                    <span class="task-need">${need}</span>
                </div>
                <span class="task-due-date">${dueDate ? `Due: ${dueDate}` : ''}</span>
                <span class="task-start-time">${startTime ? `Start: ${startTime}` : ''}</span>
                <span class="task-repeat">${repeat ? `Repeat: ${repeat}` : ''}</span>
                <button class="edit-button">Edit</button>
                <button class="delete-button">Delete</button>
                <div class="subtasks"></div>
            `;
            taskList.appendChild(li);
            saveTasks();
            clearInputs();
        }
    });

    // Handle task interactions
    taskList.addEventListener('click', (e) => {
        const target = e.target;
        const li = target.parentElement;

        if (target.classList.contains('delete-button')) {
            deleteTaskElement = li;
            confirmModal.style.display = 'block';
        } else if (target.classList.contains('edit-button')) {
            // Populate form with current task data
            const taskText = li.querySelector('.task-text').textContent;
            const need = li.querySelector('.task-need').textContent;
            const dueDate = li.querySelector('.task-due-date').textContent.replace('Due: ', '');
            const startTime = li.querySelector('.task-start-time').textContent.replace('Start: ', '');
            const repeat = li.querySelector('.task-repeat').textContent.replace('Repeat: ', '');
            const importance = li.querySelector('.task-importance').style.backgroundColor;

            editTaskInput.value = taskText;
            editNeedInput.value = need;
            editDueDateInput.value = dueDate || '';
            editStartTimeInput.value = startTime || '';
            editRepeatSelect.value = repeat || '';
            editImportanceSelect.value = importance || 'white';
            editTaskIndex.value = Array.from(taskList.children).indexOf(li);

            // Show the modal
            editModal.style.display = 'block';
        }
    });

    // Save changes from the edit form
    editForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const index = parseInt(editTaskIndex.value);
        const taskText = editTaskInput.value.trim();
        const need = editNeedInput.value.trim();
        const dueDate = editDueDateInput.value;
        const startTime = editStartTimeInput.value;
        const repeat = editRepeatSelect.value;
        const importance = editImportanceSelect.value;

        const li = taskList.children[index];
        li.innerHTML = `
            <div class="task-info">
                <span class="task-text">${taskText}</span>
                <span class="task-importance" style="background-color: ${importance};"></span>
                <span class="task-need">${need}</span>
            </div>
            <span class="task-due-date">${dueDate ? `Due: ${dueDate}` : ''}</span>
            <span class="task-start-time">${startTime ? `Start: ${startTime}` : ''}</span>
            <span class="task-repeat">${repeat ? `Repeat: ${repeat}` : ''}</span>
            <button class="edit-button">Edit</button>
            <button class="delete-button">Delete</button>
            <div class="subtasks"></div>
        `;

        saveTasks();
        editModal.style.display = 'none';
    });

    // Close the edit modal
    closeModal.addEventListener('click', () => {
        editModal.style.display = 'none';
    });

    // Confirm deletion
    confirmDelete.addEventListener('click', () => {
        deleteTaskElement.remove();
        saveTasks();
        confirmModal.style.display = 'none';
    });

    // Cancel deletion
    cancelDelete.addEventListener('click', () => {
        confirmModal.style.display = 'none';
    });

    // Close the confirmation modal
    closeConfirm.addEventListener('click', () => {
        confirmModal.style.display = 'none';
    });

    // Save tasks to local storage
    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll('li').forEach((li, index) => {
            tasks.push({
                text: li.querySelector('.task-text').textContent,
                importance: li.querySelector('.task-importance').style.backgroundColor,
                need: li.querySelector('.task-need').textContent,
                dueDate: li.querySelector('.task-due-date').textContent.replace('Due: ', ''),
                startTime: li.querySelector('.task-start-time').textContent.replace('Start: ', ''),
                repeat: li.querySelector('.task-repeat').textContent.replace('Repeat: ', ''),
                completed: li.classList.contains('completed')
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Load tasks from local storage
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="task-info">
                    <span class="task-text">${task.text}</span>
                    <span class="task-importance" style="background-color: ${task.importance};"></span>
                    <span class="task-need">${task.need}</span>
                </div>
                <span class="task-due-date">${task.dueDate ? `Due: ${task.dueDate}` : ''}</span>
                <span class="task-start-time">${task.startTime ? `Start: ${task.startTime}` : ''}</span>
                <span class="task-repeat">${task.repeat ? `Repeat: ${task.repeat}` : ''}</span>
                <button class="edit-button">Edit</button>
                <button class="delete-button">Delete</button>
                <div class="subtasks"></div>
            `;
            if (task.completed) {
                li.classList.add('completed');
            }
            taskList.appendChild(li);
        });
    }

    // Clear input fields
    function clearInputs() {
        taskInput.value = '';
        needInput.value = '';
        dueDateInput.value = '';
        startTimeInput.value = '';
        repeatSelect.value = '';
        importanceSelect.value = 'white';
    }
});
