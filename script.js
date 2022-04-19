info();
function info() {
  const name = prompt("please enter your name:");
  const lastname = prompt("please enter your lastname:");
  const age = prompt("please enter your age:");
  const gender = prompt("please enter your gender:");
  const person = `  Name: ${name}
  Lastname: ${lastname}
  Sex: ${gender}
  Age: ${age}`;
  alert(person);
  let root = document.getElementById("root");
  root.append(person);
}
