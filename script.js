const div = document.getElementById("input-div");

let tag = document.createElement("input");
let btn = document.createElement("button");
btn.innerText = "Submit";
btn.addEventListener("click", btnClick);
div.appendChild(tag);
div.appendChild(btn);

function btnClick() {
  console.log(document.querySelector("input").value);
  alert(document.querySelector("input").value);
}
