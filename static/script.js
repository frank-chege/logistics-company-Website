 /*shows the menu*/
function show_menu(){
    //show the menu
    let cont = document.getElementsByClassName('cont')
    for (let x = 0; x < cont.length; x++){
        cont[x].style.display = 'flex';
    }
}

 /*closes the menu*/
 function close_menu(){
    //show the menu
    let cont = document.getElementsByClassName('cont')
    for (let x = 0; x < cont.length; x++){
        if (cont[x].style.display == 'flex'){
            cont[x].style.display = 'none';
        }
    }
}
/*changes the background colour of the nav bar when user scrolls */
function scroll_navbar(){
    //get the classes of the large and small width navigation bars
    let large_nav = document.getElementsByClassName('large')[0];
    let small_nav = document.getElementsByClassName('index_nav')[0];
    if (window.scrollY > 0){
        //change the background color
        large_nav.style.backgroundColor = '#333333';
        small_nav.style.backgroundColor = '#333333';
        //change the positioning of nav bar to make it fixed while scrolling
        large_nav.style.position = 'sticky';
        small_nav.style.position = 'sticky';
    }
    else {
        // Reset the background color when scrolling back up
        large_nav.style.backgroundColor = 'transparent';
        small_nav.style.backgroundColor = 'transparent';
        large_nav.style.position = 'absolute';
        small_nav.style.position = 'absolute';
}
}
//add the event listener
window.addEventListener("scroll",  scroll_navbar);

//slide in animation
document.addEventListener('DOMContentLoaded', (event) => {
    const elements = document.querySelectorAll('.info section, .info h2');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.style.visibility = 'visible'; // Make the element visible
          entry.target.classList.add('animate-on-scroll');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 }); // Trigger as soon as the element comes into view
  
    elements.forEach(element => {
      observer.observe(element);
    });
  });

//slideshow container
let slide_no = 0;
let slideInterval;

document.addEventListener('DOMContentLoaded', (event) => {
  auto_slides(); // Start the slideshow
  window.addEventListener('resize', () => {
    clearTimeout(slideInterval);
    auto_slides();
  });
});

function auto_slides() {
  var slides = document.getElementsByClassName('myslides');
  var slideToShow = calculateSlidesToShow(); // Function to determine the number of slides to show

  // Hide all slides and remove animation classes
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    slides[i].classList.remove('animate-on-scrollRight', 'animate-on-scrollLeft');
  }

  // Display the slides based on the current slide number and the number to show
  for (var i = 0; i < slideToShow; i++) {
    let currentSlideIndex = (slide_no + i) % slides.length;
    slides[currentSlideIndex].style.display = 'flex';
    slides[currentSlideIndex].classList.add('animate-on-scrollRight');
  }

  // Calculate the next set of slides to show
  setTimeout(() => {
    for (var i = 0; i < slideToShow; i++) {
      let currentSlideIndex = (slide_no + i) % slides.length;
      slides[currentSlideIndex].classList.remove('animate-on-scrollRight');
      slides[currentSlideIndex].classList.add('animate-on-scrollLeft');
    }

    setTimeout(() => {
      for (var i = 0; i < slideToShow; i++) {
        let currentSlideIndex = (slide_no + i) % slides.length;
        slides[currentSlideIndex].style.display = 'none';
        slides[currentSlideIndex].classList.remove('animate-on-scrollLeft');
      }

      slide_no = (slide_no + slideToShow) % slides.length;

      for (var i = 0; i < slideToShow; i++) {
        let currentSlideIndex = (slide_no + i) % slides.length;
        slides[currentSlideIndex].style.display = 'flex';
        slides[currentSlideIndex].classList.add('animate-on-scrollRight');
      }

      clearTimeout(slideInterval);
      slideInterval = setTimeout(auto_slides, 3500);

    }, 2000); // Duration of slide out animation

  }, 1000); // Duration before starting slide out
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
