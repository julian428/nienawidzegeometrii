const submit = (e) => {
  e.preventDefault();

  const answear = document.getElementById("answear");
  if (pitagoras(answear)) {
    window.alert("Prawidłowa odpowiedź!");
  } else {
    window.alert("Błędna odpowiedź.");
  }
};

const pitagoras = (equation) => {
  const [leftHand, rightHand] = answear.value
    .replace("a", 3)
    .replace("b", 4)
    .replace("c", 5)
    .split("=");
  return math.evaluate(leftHand) === math.evaluate(rightHand);
};

window.onload = () => {
  const ansForm = document.getElementById("answear_form");
  ansForm.addEventListener("submit", submit);
};
