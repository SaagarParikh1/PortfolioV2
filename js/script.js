        // Custom Cursor
        const cursor = document.querySelector('.cursor');

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = `${e.pageX}px`;
            cursor.style.top = `${e.pageY}px`;
        });

        document.querySelectorAll('a').forEach(link => {
            link.addEventListener('mouseenter', () => cursor.classList.add('hover'));
            link.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
        });

        // Smooth Scroll
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                target.scrollIntoView({ behavior: 'smooth' });
            });
        });

         // Scroll to top functionality
         function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        window.addEventListener('scroll', function() {
            const button = document.querySelector('.back-to-top');
            if (window.scrollY > 150) {
                button.classList.add('show');
            } else {
                button.classList.remove('show');
            }
        });
        // Function to highlight the navbar based on the scroll position
        window.addEventListener('scroll', function() {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.fixed-left nav a');
            
            let currentSection = "";
    
            // Loop through sections to find the one currently in view
            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 100; // Adjust the offset for better visibility
                const sectionBottom = sectionTop + section.offsetHeight;
                
                if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                    currentSection = section.getAttribute("id");
                }
            });
    
            // Remove the highlight class from all navbar links
            navLinks.forEach((link) => {
                link.classList.remove("highlight");
            });
    
            // Add the highlight class to the current section's navbar link
            if (currentSection) {
                const currentLink = document.querySelector(`.fixed-left nav a[href="#${currentSection}"]`);
                if (currentLink) {
                    currentLink.classList.add("highlight");
                }
            }
        });

        window.addEventListener('scroll', function() {
            const welcomePage = document.getElementById('welcome-page');
            const scrollPosition = window.scrollY;

            if (scrollPosition > 50) { // Adjust this value to change when the welcome page starts to fade
                welcomePage.style.opacity = 0;
                welcomePage.style.transform = 'translateY(-100%)';
                setTimeout(() => {
                welcomePage.style.display = 'none';
                }, 500);
            }
            });
            
        window.addEventListener('scroll', function() {
            const welcomePage = document.getElementById('welcome-page');
            const arrowDown = document.querySelector('.arrow-down');
            const scrollPosition = window.scrollY;

            if (scrollPosition > 50) {
                welcomePage.style.opacity = 0;
                welcomePage.style.transform = 'translateY(-100%)';
                arrowDown.style.opacity = '0'; // Fade out the arrow
                setTimeout(() => {
                welcomePage.style.display = 'none';
                }, 500);
            }
            });

        document.addEventListener('DOMContentLoaded', function() {
            const arrow = document.querySelector('.arrow-down');
            setTimeout(() => {
                arrow.style.opacity = '1';
            }, 1700);
            });
            

// Global variables
let currentCategory = 'all';
const itemsPerPage = 4;

function filterGallery(category) {
    currentCategory = category;
    const items = document.querySelectorAll('.gallery-item');
    let visibleCount = 0;

    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = visibleCount < itemsPerPage ? 'block' : 'none';
            item.classList.toggle('hidden', visibleCount >= itemsPerPage);
            visibleCount++;
        } else {
            item.style.display = 'none';
            item.classList.add('hidden');
        }
    });

    updateShowMoreButton();
}

function toggleDetails(button) {
    const details = button.previousElementSibling;
    details.classList.toggle("hidden");
    button.textContent = details.classList.contains("hidden") ? "+" : "-";
}

function showMore() {
    const hiddenItems = document.querySelectorAll('.gallery-item.hidden');
    
    hiddenItems.forEach((item, index) => {
        if (index < itemsPerPage && (currentCategory === 'all' || item.classList.contains(currentCategory))) {
            item.classList.remove('hidden');
            item.style.display = 'block';
        }
    });

    updateShowMoreButton();
}

function showLess() {
    const visibleItems = document.querySelectorAll('.gallery-item:not(.hidden)');
    
    visibleItems.forEach((item, index) => {
        if (index >= itemsPerPage) {
            item.classList.add('hidden');
            item.style.display = 'none';
        }
    });

    updateShowMoreButton();
}

function updateShowMoreButton() {
    const showMoreBtn = document.getElementById('showMoreBtn');
    const showLessBtn = document.getElementById('showLessBtn');
    const hiddenItems = document.querySelectorAll('.gallery-item.hidden');
    const visibleItems = document.querySelectorAll('.gallery-item:not(.hidden)');

    showMoreBtn.style.display = hiddenItems.length > 0 ? 'block' : 'none';
    showLessBtn.style.display = visibleItems.length > itemsPerPage ? 'block' : 'none';
}

// Initialize the gallery
document.addEventListener('DOMContentLoaded', function() {
    filterGallery('all');
    
    // Add event listeners to category buttons
    document.querySelectorAll('.category-button').forEach(button => {
        button.addEventListener('click', function() {
            filterGallery(this.getAttribute('data-category'));
        });
    });
});

let currentSlide = 0;
let slides = [];

function openSlideshow(img) {
    const modal = document.getElementById('slideshowModal');
    const modalImg = modal.querySelector('.slide');
    modal.style.display = "block";
    
    // Get all images from the same gallery item
    const galleryItem = img.closest('.gallery-item');
    
    // Gather all slideshow images
    slides = Array.from(galleryItem.querySelectorAll('.slideshow-image'));
    
    // Set the clicked image as the current slide
    currentSlide = slides.indexOf(galleryItem.querySelector('.slideshow-image')); // Adjust this line if needed
    
    if (currentSlide >= 0) {
        modalImg.src = slides[currentSlide].src; // Set initial image source
    }
}

function closeSlideshow() {
    document.getElementById('slideshowModal').style.display = "none";
}

function changeSlide(n) {
    currentSlide += n;
    
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    
    const modalImg = document.querySelector('#slideshowModal .slide');
    modalImg.src = slides[currentSlide].src; // Update the image source
}

// Event listeners for closing and navigating the slideshow
document.querySelector('.close').onclick = closeSlideshow;
document.querySelector('.prev').onclick = () => changeSlide(-1);
document.querySelector('.next').onclick = () => changeSlide(1);
