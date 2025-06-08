document.addEventListener("DOMContentLoaded", function () {
  // Contact form handling
  const contactForm = document.querySelector("form");

  if (contactForm && contactForm.id !== "authForm") {
    const sendButton = contactForm.querySelector("button[type='submit']");
    const resetButton = contactForm.querySelector("button[type='reset']");

    sendButton.addEventListener("click", function (event) {
      const name = contactForm.querySelector("#name").value.trim();
      const email = contactForm.querySelector("#email").value.trim();
      const message = contactForm.querySelector("#message").value.trim();

      if (!name || !email || !message) {
        event.preventDefault();
        alert("Please fill out all fields before sending.");
      } else {
        alert("Your message has been sent. Thank you!");
      }
    });

    resetButton.addEventListener("click", function (event) {
      const confirmReset = confirm("Are you sure you want to clear the form?");
      if (!confirmReset) {
        event.preventDefault();
      }
    });
  }

  // Login form handling
  const loginForm = document.querySelector("#authForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const username = loginForm.querySelector("#username").value.trim();
      const password = loginForm.querySelector("#password").value.trim();
      const errorElem = loginForm.querySelector("#error");

      if (!username || !password) {
        errorElem.textContent = "Please enter both username and password.";
      } else {
        errorElem.textContent = "";
        alert("Login successful! Redirecting...");
        loginForm.reset();
        // Redirect after alert
        window.location.href = "home.html";
      }
    });
  }
});