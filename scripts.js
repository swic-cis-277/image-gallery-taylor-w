const displayImg = document.querySelector("#display img");
const circleBtn = document.querySelector("#circle-btn");
const fsImages = document.querySelectorAll("#film-strip img");

fsImages.forEach(function (fsImg) {
  fsImg.addEventListener("click", function (event) {
    displayImg.src = event.target.src;
    displayImg.alt = event.target.alt;
  });
});

circleBtn.addEventListener("click", () => {
  if (document.getElementById("display")) {
    document.getElementById("display").id = "display-circle";
  } else {
    document.getElementById("display-circle").id = "display";
  }
});
