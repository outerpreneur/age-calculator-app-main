const dayInput = document.querySelector(".day");
const monthInput = document.querySelector(".month");
const yearInput = document.querySelector(".year");

const dayOutput = document.querySelector(".day-output");
const monthOutput = document.querySelector(".month-output");
const yearOutput = document.querySelector(".year-output");

const form = document.querySelector("form");

const date = new Date();

let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() {
  const inputs = document.querySelectorAll("input");
  let validator = true;
  inputs.forEach((i) => {
    const parent = i.parentElement;
    if (!i.value) {
      i.style.borderColor = "red";
      parent.querySelector("span").innerText = "This field text is required";
      validator = false;
    } else if (monthInput.value > 12) {
      monthInput.style.borderColor = "red";
      monthInput.parentElement.querySelector("span").innerText =
        "Must be a valid month";
      validator = false;
    } else if (dayInput.value > 31) {
      dayInput.style.borderColor = "red";
      dayInput.parentElement.querySelector("span").innerText =
        "Must be a valid day";
      validator = false;
    } else {
      i.style.borderColor = "black";
      parent.querySelector("small").innerText = "This field text is required";
      validator = true;
    }
  });
  return validator;
}

function handleSubmit(e) {
  e.preventDefault();
  alert("hello fucker");
  // console.log(dayInput.value);
  // if (validate()) {
  //   if (dayInput.value > day) {
  //     day = day + months[month - 1];
  //     month = month - 1;
  //   }
  //   if (monthInput.value > month) {
  //     month = month + 12;
  //     year = year - 1;
  //   }

  //   const d = day - dayInput.value;
  //   const m = month - monthInput.value;
  //   const y = year - yearInput.value;

  //   dayOutput.innerHTML = d;
  //   monthOutput.innerHTML = m;
  //   yearOutput.innerHTML = y;
  // }
}

form.addEventListener("submit", () => {
  alert("yep");
});
