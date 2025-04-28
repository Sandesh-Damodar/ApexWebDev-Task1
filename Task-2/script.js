// Contact Form Script
const form = document.getElementById('contactForm');
const confirmationMessage = document.getElementById('confirmationMessage');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Basic form validation
  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields before submitting.");
    return;
  }

  // Email validation using regex
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  const formData = { name, email, message };
  localStorage.setItem('contactFormData', JSON.stringify(formData)); // Save form data in localStorage

  // Show confirmation message and hide the form
  confirmationMessage.classList.remove('hide');
  form.reset();  // Reset the form fields

  form.classList.add('hide');  // Hide the form
  setTimeout(() => {
    confirmationMessage.classList.add('hide');  // Hide the confirmation message after 5 seconds
    form.classList.remove('hide');  // Show the form again
  }, 5000);
});

// To-Do List Script
const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const todoList = document.getElementById('todoList');

// Function to add a task to the list
addTaskBtn.addEventListener('click', function() {
  const task = taskInput.value.trim();
  
  if (task !== "") {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${task}</span>
      <button class="delete">Delete</button>
    `;
    todoList.appendChild(li);
    
    taskInput.value = ""; // Clear the input field

    // Mark task as completed on click
    li.querySelector('span').addEventListener('click', function() {
      li.classList.toggle('completed');
    });

    // Delete task on button click
    li.querySelector('.delete').addEventListener('click', function() {
      li.remove();
    });
  } else {
    alert("Please enter a task.");
  }
});
