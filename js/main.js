"use strict";

let userNameInput = document.querySelector("#userName");
let userEmailInput = document.querySelector("#userEmail");
let userPasswordInput = document.querySelector("#userPassword");
let registerForm = document.querySelector("#registerForm");
let users = JSON.parse(localStorage.getItem("users")) || [];



function validateUserInput(input) {
  let regex = {
    userName: /^[A-Z][a-zA-Z]{2,}( [ ]*[a-zA-Z]*)*\s*$/,
    userEmail: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    userPassword: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
  };

  var isValid = regex[input.id].test(input.value);

  if (isValid) {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    input.nextElementSibling.classList.add("d-none");
    input.nextElementSibling.classList.remove("d-inline");
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    input.nextElementSibling.classList.remove("d-none");
    input.nextElementSibling.classList.add("d-inline");
  }
  return isValid;
}

function checkIsUserExist() {
  let userEmailValue = userEmailInput.value;

  if (users.length === 0) {
    return false;
  } else {
    // Check for duplicates
    let isDuplicate = users.some(
      (user) => user.email.toLowerCase() === userEmailValue.toLowerCase()
    );
    return isDuplicate;
  }
}

function saveUsersToLocalStorage() {
  localStorage.setItem("users", JSON.stringify(users));
}
function addNewUser() {
  // Add the new user to the array
  const newUser = {
    name: userNameInput.value,
    email: userEmailInput.value,
    password: userPasswordInput.value,
  };
  users.push(newUser);

  // Save the updated array to localStorage
  saveUsersToLocalStorage();
}
