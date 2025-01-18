const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/siluet.jpg") {
    myImage.setAttribute("src", "images/les.jpg");
  } else {
    myImage.setAttribute("src", "images/siluet.jpg");
  }
});
// Personalized welcome message code

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.innerHTML = "Руководство. Получатель: " + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.innerHTML = "Руководство. Получатель: " + storedName;
}

myButton.onclick = function () {
  setUserName();
};
