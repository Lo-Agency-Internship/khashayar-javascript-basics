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
