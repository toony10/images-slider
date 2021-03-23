// Get Slider Items | Array.from [ES6 Feature].
let sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

// Get Number Of Slides
let sliedCount = sliderImages.length;

// Set Current Slide
let currentSlide = 1;

// Slide Number Element
let slideNumberElement = document.getElementById("slide-number");

// Previous and Next Buttons
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");

// Handel Click on privious and Next Button
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Creat The Main Ul Element
let paginationElement = document.createElement("ul");

// Set Id On Created Element
paginationElement.setAttribute("id", "pagination-ul");

// Get Pagination Items | Array.from [ES6 Feature].
let PaginationBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

// Create List Items Based On Slides Count
for (let i = 1; i <= sliedCount; i++) {
  // Creat The li
  let paginationItme = document.createElement("li");
  // Set Custom Attribud
  paginationItme.setAttribute("data-index", i);
  // Set Item content
  paginationItme.appendChild(document.createTextNode(i));
  // Append Item To The main Ul List
  paginationElement.appendChild(paginationItme);
}

// Add The Created Ul Elemant To The Page
document.getElementById("indicators").appendChild(paginationElement);

// Get the New Created Ul
let paginationCreatedUl = document.getElementById("pagination-ul");

// Get pagination Items | Array.from [ES6 Feature].
let paginationsBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

//Loop Through All Bullets Item
for (let i = 0; i < paginationsBullets.length; i++) {
  paginationsBullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    theChecker();
  };
}

// Trigger The Checker Function
theChecker();

// Next Slide Function
function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide++;
    theChecker();
  }
}

// previous Slide Function
function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide--;
    theChecker();
  }
}

// Creat The Checker Function
function theChecker() {
  // set the slide Number
  slideNumberElement.textContent = "#" + currentSlide + " of " + sliedCount;

  // Remove All Active Classes
  removeِAllActive();

  sliderImages[currentSlide - 1].classList.add("active");
  // Set Active Class On Current pagination Item
  paginationCreatedUl.children[currentSlide - 1].classList.add("active");

  // Check if Current Slide is First
  if (currentSlide == 1) {
    // Add The Disabled Class On The Previous Button
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }

  // Check if Current Slide is the Last
  if (currentSlide == sliedCount) {
    // Add The Disabled Class On The Next Button
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}

// Remove All Active Classes From Imges And Pagination Bullets

function removeِAllActive() {
  // Loop Through Images
  sliderImages.forEach(function (img) {
    img.classList.remove("active");
  });
  // Loop Through Pagination Bulletspa
  paginationsBullets.forEach(function (bullets) {
    bullets.classList.remove("active");
  });
}
