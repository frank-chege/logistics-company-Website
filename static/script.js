/*shows the menu*/
function show_menu() {
  //show the menu
  let cont = document.getElementsByClassName("cont");
  for (let x = 0; x < cont.length; x++) {
    cont[x].style.display = "flex";
  }
}

/*closes the menu*/
function close_menu() {
  //show the menu
  let cont = document.getElementsByClassName("cont");
  for (let x = 0; x < cont.length; x++) {
    if (cont[x].style.display == "flex") {
      cont[x].style.display = "none";
    }
  }
}
/*changes the background colour of the nav bar when user scrolls */
function scroll_navbar() {
  //get the classes of the large and small width navigation bars
  let large_nav = document.getElementsByClassName("large")[0];
  let small_nav = document.getElementsByClassName("index_nav")[0];
  if (window.scrollY > 0) {
    //change the background color
    large_nav.style.backgroundColor = "#333333";
    small_nav.style.backgroundColor = "#333333";
    //change the positioning of nav bar to make it fixed while scrolling
    large_nav.style.position = "sticky";
    small_nav.style.position = "sticky";
  } else {
    // Reset the background color when scrolling back up
    large_nav.style.backgroundColor = "transparent";
    small_nav.style.backgroundColor = "transparent";
    large_nav.style.position = "absolute";
    small_nav.style.position = "absolute";
  }
}
//add the event listener
window.addEventListener("scroll", scroll_navbar);

//slide in animation
document.addEventListener("DOMContentLoaded", (event) => {
  const elements = document.querySelectorAll(".info section, .info h2");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.visibility = "visible"; // Make the element visible
          entry.target.classList.add("animate-on-scroll");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  ); // Trigger as soon as the element comes into view

  elements.forEach((element) => {
    observer.observe(element);
  });
});
//slideshow container
let slide_no = 0;
let slideInterval;

document.addEventListener("DOMContentLoaded", (event) => {
  auto_slides(); // Start the slideshow
  window.addEventListener("resize", () => {
    clearTimeout(slideInterval);
    auto_slides();
  });
});

function auto_slides() {
  var slides = document.getElementsByClassName("myslides");
  var slideToShow = calculateSlidesToShow(); // Function to determine the number of slides to show

  // Ensure previous slides finish their animation before hiding
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("animate-on-slideIn", "animate-on-scrollLeft");
    slides[i].style.display = "none"; // Hide all slides
  }

  // Display the slides and start the slide-in animation
  setTimeout(() => {
    for (var i = 0; i < slideToShow; i++) {
      let currentSlideIndex = (slide_no + i) % slides.length;
      slides[currentSlideIndex].style.display = "flex"; // Show the current slide
      slides[currentSlideIndex].classList.add("animate-on-slideIn"); // Start slide-in animation
    }
  }, 20); // Small delay to avoid flickering

  setTimeout(() => {
    // Start the slide-out animation
    for (var i = 0; i < slideToShow; i++) {
      let currentSlideIndex = (slide_no + i) % slides.length;
      slides[currentSlideIndex].classList.remove("animate-on-slideIn");
      slides[currentSlideIndex].classList.add("animate-on-scrollLeft"); // Slide out to the left
    }

    setTimeout(() => {
      // After the slide-out animation, hide the slides
      for (var i = 0; i < slideToShow; i++) {
        let currentSlideIndex = (slide_no + i) % slides.length;
        slides[currentSlideIndex].style.display = "none"; // Hide the slide after sliding out
        slides[currentSlideIndex].classList.remove("animate-on-scrollLeft"); // Reset class
      }

      slide_no = (slide_no + slideToShow) % slides.length; // Update slide index
      auto_slides(); // Continue the slideshow
    }, 1000); // Duration of slide-out animation
  }, 3000); // Time before starting slide-out
}

function calculateSlidesToShow() {
  var width = window.innerWidth;
  if (width < 600) {
    return 1; // Show 1 slide on small devices
  } else if (width >= 600 && width < 900) {
    return 2; // Show 2 slides on medium devices
  } else {
    return 3; // Show 3 slides on large devices
  }
}
//dropdown on tools page
document.querySelectorAll(".tools_list .toggle").forEach(function (toggle) {
  toggle.addEventListener("click", function () {
    var content = this.nextElementSibling;
    // Check if the current dropdown is open
    if (content.style.display === "block") {
      content.style.display = "none"; // Hide the dropdown
      this.textContent = "+"; // Change the sign to +
      this.classList.remove("active"); // Remove the active class
    } else {
      // Close all other open dropdowns
      document
        .querySelectorAll(".tools_list .dropdown_content")
        .forEach(function (otherContent) {
          otherContent.style.display = "none";
        });
      document
        .querySelectorAll(".tools_list .toggle")
        .forEach(function (otherToggle) {
          otherToggle.textContent = "+";
          otherToggle.classList.remove("active");
        });
      content.style.display = "block"; // Show the current dropdown
      this.textContent = "-"; // Change the sign to -
      this.classList.add("active"); // Add the active class
    }
  });
});
