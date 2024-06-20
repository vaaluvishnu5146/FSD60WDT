const taskName = document.getElementById("task");
const taskDescription = document.getElementById("description");
const completionDate = document.getElementById("date");
const submitButton = document.getElementById("taskSubmit");
const updateButton = document.getElementById("taskUpdate");
const taskContainer = document.getElementById("tasks-container");
const taskCountSpan = document.getElementById("taskCount");

function reRenderForm(data = {}, isNameReadOnly = false) {
  taskName.value = data.name;
  isNameReadOnly
    ? taskName.setAttribute("readonly", true)
    : taskName.removeAttribute("readonly");
  taskDescription.value = data.description;
  completionDate.value = data.completionDate;
}

submitButton.addEventListener("click", () => {
  if (!taskName.value || !taskDescription.value || !completionDate.value) {
    alert("Form is not complete");
  } else {
    try {
      const tasks = getLocalData("tasks") || [];
      const newTask = {
        name: taskName.value,
        description: taskDescription.value,
        completionDate: completionDate.value,
      };
      tasks.push(newTask);
      setLocalData("tasks", tasks);
      renderTaskCards(tasks);
      reRenderForm(
        {
          name: "",
          description: "",
          completionDate: "",
        },
        false
      );
    } catch (error) {
      console.log("Error saving new Task");
    }
  }
});

updateButton.addEventListener("click", () => {
  if (!taskName.value || !taskDescription.value || !completionDate.value) {
    alert("Form is not complete");
  } else {
    try {
      let tasks = getLocalData("tasks") || [];
      const updatedTask = {
        name: taskName.value,
        description: taskDescription.value,
        completionDate: completionDate.value,
      };
      tasks = tasks.filter((task) => task.name !== taskName.value);
      tasks.push(updatedTask);
      console.log(tasks);
      setLocalData("tasks", tasks);
      renderTaskCards(tasks);
      reRenderForm({
        name: "",
        description: "",
        completionDate: "",
      });
      showAddButton();
      hideButton("taskUpdate");
    } catch (error) {
      console.log("Error updating Task");
    }
  }
});

// Initial rendering of stored tasks in localStorage
renderTaskCards(getLocalData("tasks"));

function renderTaskCards(data = []) {
  const cards = [];
  data.forEach((_e) => {
    cards.push(createTaskCard(_e));
  });
  taskContainer.innerHTML = "";
  taskContainer.append(...cards);
  taskCountSpan.innerText = `(${cards.length})`;
}

function createTaskCard(data = {}) {
  const taskCardWrapper = document.createElement("div");
  taskCardWrapper.setAttribute("class", "task-card");
  taskCardWrapper.innerHTML = `<h3>${data.name}</h3>
            <p>${data.description}</p>
            <p>${data.completionDate}</p>
            <div>
              <button onclick="onUpdate('${data.name}')">Update</button>
              <button onclick="deleteTask('${data.name}')">Delete</button>
            </div>`;
  return taskCardWrapper;
}

function deleteTask(name = "") {
  let tasks = getLocalData("tasks");
  if (tasks.length > 0) {
    tasks = tasks.filter((task) => task.name !== name);
  }
  renderTaskCards(tasks);
  setLocalData("tasks", tasks);
}

function onUpdate(name = "") {
  let tasks = getLocalData("tasks");
  let taskToBeUpdated = tasks.find((task) => task.name === name);
  reRenderForm(taskToBeUpdated, true);
  hideButton("taskSubmit");
  showUpdateButton();
}

function getLocalData(key = "") {
  let data;
  try {
    data = JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.error("Error fetching local storage");
  }
  return data;
}

function setLocalData(key = "", value = "") {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error Storing data in local storage");
  }
}

function hideButton(id = "") {
  const element = document.getElementById(id);
  element.classList.add("hidden");
}

function showAddButton() {
  submitButton.classList.remove("hidden");
}

function showUpdateButton() {
  updateButton.classList.remove("hidden");
}
