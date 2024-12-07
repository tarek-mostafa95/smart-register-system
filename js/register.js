registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    if (
      !validateUserInput(userNameInput) &&
      !validateUserInput(userEmailInput) &&
      !validateUserInput(userPasswordInput)
    ) {
      e.stopPropagation();
  
      Swal.fire({
        icon: "error",
        text: "Please Enter a Valid Data!",
      });
  
      return;
    }
  
    //check if exist in the array
    let isUserExist = checkIsUserExist();
    if (isUserExist) {
      Swal.fire({
        icon: "error",
        text: "This User Is Already signed up please login!",
      });
    } else {
      addNewUser();
      Swal.fire({
        icon: "success",
        text: "This user signed up successfully!",
      });
  
      setTimeout(function () {
        window.location.href = "index.html";
      }, 1000);
    }
  });