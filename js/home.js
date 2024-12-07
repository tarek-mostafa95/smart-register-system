
const user = JSON.parse(localStorage.getItem("loggedInUser"));
  if (user) {
    let welcomeMessage = document.querySelector(".name-welcome");
    welcomeMessage.innerHTML = `<h1> Welcome ${user.name} </h1>`;
  } else {
    window.location.href = "index.html";
  }


  let logoutBtn = document.querySelector(".logout-btn"); 

  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
  });