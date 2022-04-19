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
  console.log(person);
}

prevRand = 1;
function rand(min = 0, max = 10) {
  time = Date.now();
  rand = (time / (prevRand + 1)) % max;
  if (rand < min) {
    rand += min;
  }
  prevRand = rand;
  return parseInt(rand);
}

function bin2dec(string) {
  let dec = 0;
  for (let i = 0; i < string.length; i++) {
    dec += string[i] * 2 ** (string.length - i - 1);
  }
  return dec;
}
