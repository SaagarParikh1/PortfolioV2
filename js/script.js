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

  // Show loading symbol and transition to main page
window.addEventListener('DOMContentLoaded', function() {
    const welcomePage = document.getElementById('welcome-page');
    const loadingSymbol = document.createElement('div');

    // Add the loading symbol to the welcome page
    loadingSymbol.classList.add('loading-symbol');
    welcomePage.appendChild(loadingSymbol);

    // Style the loading symbol
    const style = document.createElement('style');
    style.innerHTML = `
        .loading-symbol {
            width: 50px;
            height: 50px;
            border: 5px solid transparent;
            border-top: 5px solid purple;
            border-right: 5px solid purple;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            position: absolute;
            top: calc(50% + 75px);
            left: 50%;
            transform: translate(-50%, -50%);
        }

        @keyframes spin {
            0% { transform: translate(-50%, -50%) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
    `;
    document.head.appendChild(style);

    // Wait for 1 second, then fade out the welcome page
    setTimeout(() => {
        welcomePage.style.transition = 'opacity .5s ease, transform 1s ease';
        welcomePage.style.opacity = '0';
        welcomePage.style.transform = 'translateY(-150%)';

        setTimeout(() => {
            welcomePage.style.display = 'none';
        }, 1000); // Match the transition duration
    }, 1000); // 1-second delay
});
