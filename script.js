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
}
