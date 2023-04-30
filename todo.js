let itemNo = 0;
document.body.onload = function () {
  document.getElementById("clearALL").style.visibility = "hidden";
};
document.getElementById("input-btn").addEventListener("click", function () {
  document.getElementById("clearALL").style.visibility = "visible";
  itemNo++;
  const inputValue = document.getElementById("input-value").value;
  const mainContainer = document.getElementById("main-container");
  const contentContainer = document.getElementById("content-container");
  const tableContainer = document.createElement("tr");
  tableContainer.innerHTML = `
  <th scope="row">${itemNo}</th>
  <td>${inputValue}</td>
  <td><button class="btn btn-danger delete-btn">Delete</button>
  <button class="btn btn-success done-btn">Done</button>
  </td>
  `;
  tableContainer.style.backgroundColor = "cornflowerblue";
  contentContainer.appendChild(tableContainer);
  document.getElementById("input-value").value = "";
  document.getElementById("input-value").focus();
  const deleteBtn = document.getElementsByClassName("delete-btn");
  for (const button of deleteBtn) {
    button.addEventListener("click", function (event) {
      event.target.parentNode.parentNode.style.display = "none";
    });
  }
  const doneBtn = document.getElementsByClassName("done-btn");
  for (const done of doneBtn) {
    done.addEventListener("click", function (e) {
      e.target.parentNode.parentNode.style.backgroundColor = "yellow";
      e.target.parentNode.parentNode.style.fontStyle = "bold";
      e.target.parentNode.parentNode.style.textDecorationLine = "line-through";
    });
  }
  document.getElementById("clearALL").addEventListener("click", function () {
    contentContainer.innerHTML = "";
    document.getElementById("clearALL").style.visibility = "hidden";
  });
});
