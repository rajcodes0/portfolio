 emailjs.init({
  publicKey: "JzzdFPsU-C3sKLPy2",
});

const form = document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .sendForm("service_ftg3uol", "template_b0i9q26", this)

      .then(
        function () {
          alert("Message has been sent successfully");
        },
        function (error) {
          alert("sorry Could not reach !!");
        }
      );
  });
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
