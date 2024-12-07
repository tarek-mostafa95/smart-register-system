let loginForm = document.querySelector("#loginForm");


loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    var enteredEmail = userEmailInput.value.trim();
    var enteredPassword = userPasswordInput.value;

    const user = users.find(u => u.email.toLowerCase() === enteredEmail.toLowerCase());


    if (!user) {
        Swal.fire({
            icon: "error",
            text: "Email not found. Please check and try again!",
          });
        return;
    }



    if (user.password !== enteredPassword) {
        Swal.fire({
            icon: "error",
            text: "Password is incorrect. Please try again!",
          });
        return;
    }

    Swal.fire({
        icon: "success",
        text: "Logged In Successfully!",
      });  

      localStorage.setItem("loggedInUser", JSON.stringify(user));
     setTimeout(function () {
        window.location.href = "home.html";
      }, 1000);

  });