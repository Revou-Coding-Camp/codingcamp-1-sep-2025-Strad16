const taskList = document.getElementById("taskList");

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const dateInput = document.getElementById("dateInput");
  const taskValue = taskInput.value.trim();
  const dateValue = dateInput.value;

  // 🔹 Validasi input
  if (taskValue === "") {
    alert("Please enter a task.");
    return;
  }
  if (!dateValue) {
    alert("Please select a due date.");
    return;
  }

  if (taskList.querySelector("td") && taskList.querySelector("td").colSpan === 4) {
    taskList.innerHTML = "";
  }

  const row = document.createElement("tr");

  const taskCell = document.createElement("td");
  taskCell.textContent = taskValue;

  const dateCell = document.createElement("td");
  dateCell.textContent = dateValue;

  const statusCell = document.createElement("td");
  statusCell.textContent = "Pending";
  statusCell.classList.add("status");

  const actionCell = document.createElement("td");

  // Tombol Done
  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Done";
  doneBtn.className = "action-btn done-btn";
  doneBtn.onclick = () => {
    statusCell.textContent = "Done";
    statusCell.style.color = "#2ea043";
  };

  // Tombol Delete
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.className = "action-btn del-btn";
  delBtn.onclick = () => row.remove();

  actionCell.appendChild(doneBtn);
  actionCell.appendChild(delBtn);

  row.appendChild(taskCell);
  row.appendChild(dateCell);
  row.appendChild(statusCell);
  row.appendChild(actionCell);

  taskList.appendChild(row);

  taskInput.value = "";
  dateInput.value = "";
}

function filterTasks() {
  const filter = document.getElementById("filterSelect").value;
  const rows = taskList.querySelectorAll("tr");

  rows.forEach(row => {
    const status = row.querySelector(".status")?.textContent.toLowerCase();

    if (!status) return; // skip row "No task found"

    if (filter === "all") {
      row.style.display = "";
    } else if (filter === status) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
}

function deleteAllTasks() {
  taskList.innerHTML = "<tr><td colspan='4'>No task found</td></tr>";
}
