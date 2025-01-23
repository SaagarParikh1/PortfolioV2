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
            



