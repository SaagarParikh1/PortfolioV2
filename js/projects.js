// Function to open the image gallery for each project
function openGallery(galleryId) {
    const images = {
        'grantCountyGallery': [
            'images/grantcounty/image1.png',
            'images/grantcounty/image2.png',
            'images/grantcounty/image3.png'
        ],
        'ticketScoutGallery': [
            'images/ticketscout/ticscouthome.png'
        ],
        'recipeFinderGallery': [
            'images/recipeFinder/rfhome.png',
            'images/recipeFinder/rfmex.png',
            'images/recipeFinder/rfmedit.png',
            'images/recipeFinder/rfrandom.png'
        ],
        'travelXGallery': [
            'images/travelx/home.png',
            'images/travelx/weatherNYc.png',
            'images/travelx/weatherDALf.png',
            'images/travelx/pics.png',
            'images/travelx/activities.png',
            'images/travelx/aiAssistant.png'
        ],
        'molePuzzleGallery': [
            'images/mole:puzzle/welcome.png',
            'images/mole:puzzle/mole.png',
            'images/mole:puzzle/moleend.png',
            'images/mole:puzzle/sliding.png'
        ],
        'stockTrackerGallery': [
            'images/stocksTracker/stockTrac1.png',
            'images/stocksTracker/stockTrac2.png',
            'images/stocksTracker/stockTrac3.png',
        ],
        'askMeAnyGallery': [
            'images/askanything/askanythinghome.png'
        ],
        'shorelineHotelGallery': [
            'images/shoreline/shmain.png',
            'images/shoreline/shactivities.png',
            'images/shoreline/shreviews.png',
            'images/shoreline/shrooms.png',
            'images/shoreline/shad.png',
            'images/shoreline/shcontact.png'         
        ]
    };

    // Call the openGallery function to show the gallery for the project
    openModal(images[galleryId]);
}

// Function to open the modal gallery with images
function openModal(images) {
    let currentImageIndex = 0;  // Corrected variable name
    const modal = document.getElementById('galleryModal');
    const modalImage = document.getElementById('modalImage');
    
    // Show the first image
    modal.style.display = 'block';
    modalImage.src = images[currentImageIndex]; // Fixed to use currentImageIndex

    // Update the image displayed in the modal
    function updateImage() {
        modalImage.src = images[currentImageIndex];
    }

    // Add functionality to navigate between images using arrow keys
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowRight') {
            currentImageIndex = (currentImageIndex + 1) % images.length; // Move forward
            updateImage();
        } else if (event.key === 'ArrowLeft') {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length; // Move backward
            updateImage();
        }
    });

    // Add functionality to navigate between images on image click
    modalImage.onclick = function() {
        currentImageIndex = (currentImageIndex + 1) % images.length; // Loop through images
        updateImage();
    };

}



// Close the modal when the "close" button is clicked
function closeModal() {
    const modal = document.getElementById('galleryModal');
    modal.style.display = 'none';
}


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

function viewProject() {
    alert('View project clicked!');
    // Replace the above alert with functionality to redirect or open a modal, if needed.
}


