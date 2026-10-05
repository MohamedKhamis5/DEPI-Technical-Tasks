var box = document.getElementById("box");
  var addBtn = document.getElementById("addBtn");
  var editing = null;  
  function addTask() {
    var text = box.value.trim();
    if (text == "") return;
    if (editing) {
      editing.querySelector("span").textContent = text;
      editing.classList.remove("editing");
      editing = null;
      addBtn.textContent = "+";
    } else {
      var task = document.createElement("div");
      task.className = "task";
      task.innerHTML =
        '<input type="checkbox" onchange="this.parentElement.classList.toggle(\'done\')">' +
        '<span></span>' +
        '<button class="edit" onclick="editTask(this.parentElement)">✎</button>' +
        '<button class="del" onclick="deleteTask(this.parentElement)">🗑</button>';
      task.querySelector("span").textContent = text;
      document.getElementById("list").appendChild(task);
    }
    box.value = "";
  }
  function editTask(task) {
    if (editing) editing.classList.remove("editing");
    editing = task;
    task.classList.add("editing");
    box.value = task.querySelector("span").textContent;   
    addBtn.textContent = "✓";
    box.focus();
  }
  function deleteTask(task) {
    if (task == editing) {
      editing = null;
      box.value = "";
      addBtn.textContent = "+";
    }
    task.remove();
  };