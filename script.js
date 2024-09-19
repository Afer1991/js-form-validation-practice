const form = document.querySelector("form");
const email = document.getElementById("email");

const emailSp = document.querySelector("span:nth-of-type(1)");

email.addEventListener("input", (e) => {
  if (email.validity.valid) {
    emailSp.innerHTML = "&nbsp";
    email.style.borderBottomColor = "#6EEB83";
  } else {
    emailSp.textContent = "Entered value needs to be an e-mail address";
    email.style.borderBottomColor = "#FF312E";
  };
});