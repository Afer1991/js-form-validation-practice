const form = document.querySelector("form");
const email = document.getElementById("email");
const country = document.getElementById("country");
const zip = document.getElementById("zip");
const password = document.getElementById("password");

const emailSp = document.getElementById("email-sp");
const countrySp = document.getElementById("country-sp");
const zipSp = document.getElementById("zip-sp");
const pwSp = document.getElementById("pw-sp");

email.addEventListener("input", (e) => {
  if (email.validity.valid) {
    emailSp.innerHTML = "&nbsp";
    email.style.background = "#FFF";
    email.style.borderBottomColor = "#6EEB83";
  } else if (email.validity.valueMissing) {
    emailSp.textContent = "E-mail is required";
    email.style.background = "#fdd";
    email.style.borderBottomColor = "#FF312E";
  } else {
    emailSp.textContent = "Entered value needs to be an e-mail address";
    email.style.background = "#fdd";
    email.style.borderBottomColor = "#FF312E";
  };
});

country.addEventListener("input", (e) => {
  if (country.validity.valid) {
    countrySp.innerHTML = "&nbsp";
    country.style.background = "#FFF";
    country.style.borderBottomColor = "#6EEB83";
  } else {
    countrySp.textContent = "Country is required";
    country.style.background = "#fdd";
    country.style.borderBottomColor = "#FF312E";
  };
});

zip.addEventListener("input", (e) => {
  if (zip.validity.valid) {
    zipSp.innerHTML = "&nbsp";
    zip.style.background = "#FFF";
    zip.style.borderBottomColor = "#6EEB83";
  } else if (zip.validity.valueMissing) {
    zipSp.textContent = "Zip Code is required";
    zip.style.background = "#fdd";
    zip.style.borderBottomColor = "#FF312E";
  } else if (zip.validity.tooShort) {
    zipSp.textContent = "Zip Code must be at least 4 characters";
    zip.style.background = "#fdd";
    zip.style.borderBottomColor = "#FF312E";
  };
});

password.addEventListener("input", (e) => {
  if (password.validity.valid) {
    pwSp.innerHTML = "&nbsp";
    password.style.background = "#FFF";
    password.style.borderBottomColor = "#6EEB83";
  } else if (password.validity.valueMissing) {
    pwSp.textContent = "Password is required";
    password.style.background = "#fdd";
    password.style.borderBottomColor = "#FF312E";
  } else if (password.validity.tooShort) {
    pwSp.textContent = "Password must be between 8 and 15 characters";
    password.style.background = "#fdd";
    password.style.borderBottomColor = "#FF312E";
  };
});