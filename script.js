const task = document.querySelector("#task");
const list = document.querySelector(".list");
function addTask() {
  if (task.value.trim() === "") {
    alert("Add a task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = task.value;
    list.appendChild(li);
    li.classList.toggle("unchecked");
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  task.value = "";
  saveData();
}
list.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
function saveData() {
  localStorage.setItem("data", list.innerHTML);
}
function displayData() {
  list.innerHTML = localStorage.getItem("data");
}
displayData();
