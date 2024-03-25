const menu = document.querySelector(".btn-group-vertical");

menu.classList.remove("btn-group-vertical");
menu.classList.add("btn-group-horizontal");

document.querySelector(".jumbotron").style = "text-align:right";
document.querySelector("a.btn.btn-primary.btn-lg").classList.add("btn-success");

const columns = document.querySelectorAll(".col-lg-3");
columns[0].style = "order: 2";
columns[1].style = "order: 4";
columns[2].style = "order: 3";
columns[3].style = "order: 1";

columns[0].querySelector(".btn").classList.add("btn-success");

document.querySelector(".list-group-item.active").classList.remove("active");

const list = document.querySelector(".list-group");

const element1 = document.createElement("li");
element1.classList.add("list-group-item", "active");
element1.textContent = "Quarto item";
list.appendChild(element1);

const element2 = document.createElement("li");
element2.classList.add("list-group-item");
element2.textContent = "Quinto item";
list.appendChild(element2);
