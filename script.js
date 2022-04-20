let sex;
function radioChecked() {
  var radios = document.getElementsByName("sex");

  for (const radio of radios) {
    if (radio.checked) sex = radio.value;
  }
}
function btnClick() {
  const name = document.getElementById("name");
  const lastname = document.getElementById("lastname");
  const age = document.getElementById("age");
  radioChecked();
  alert(name.value + " " + lastname.value + " " + age.value + " " + sex);
  let numA = prompt("Please enter a numbre,A");
  let a = numA;
  let numB = prompt("Please enter a numbre,B");
  let b = numB;
  alert("A =" + a + " " + "B =" + b);
  b = numA;
  a = numB;
  alert("A =" + a + " " + "B =" + b);
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

function sumOfTwo(num1, num2) {
  if (num1 === num2) return 3 * (num1 + num2);
  else return num1 + num2;
}

function absoluteDif(num) {
  if (num > 19) return 3 * (num - 19);
  else return Math.abs(19 - num);
}

function Lo(string) {
  if (string == "Lo") return string;
  else return string + " " + "Lo";
}
