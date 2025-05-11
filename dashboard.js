// Add active class to current navigation item
document.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('nav ul li.active').classList.remove('active');
        item.parentElement.classList.add('active');
    });
});

// Handle search functionality
const searchInput = document.querySelector('.search-bar input');
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            // Add your search logic here
            console.log('Searching for:', searchTerm);
        }
    }
});

// Handle notifications click
document.querySelector('.notifications').addEventListener('click', () => {
    // Add your notifications logic here
    console.log('Notifications clicked');
});

// Handle menu button click
const menuBtn = document.querySelector('.menu-btn');
const container = document.querySelector('.container');

menuBtn.addEventListener('click', () => {
    container.classList.toggle('hide-sidebar');
});

// Close sidebar when clicking outside on mobile
container.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && !e.target.closest('.sidebar')) {
        container.classList.remove('hide-sidebar');
    }
});

// Handle profile click
document.querySelector('.profile').addEventListener('click', () => {
    // Add your profile logic here
    console.log('Profile clicked');
});

// Add smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Handle add to cart buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const itemName = this.parentElement.querySelector('h3').textContent;
        const itemPrice = this.parentElement.querySelector('p').textContent;
        
        // Add your cart logic here
        alert(`Added ${itemName} (${itemPrice}) to cart!`);
    });
});

// Handle furniture item hover effects
document.querySelectorAll('.furniture-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-5px)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0)';
    });
    
    // Add click event to open details page
    item.addEventListener('click', () => {
        const itemId = item.getAttribute('data-id');
        if (itemId) {
            window.location.href = `furniture-details.html?id=${itemId}`;
        }
    });
});
