// Get URL parameters
const urlParams = new URLSearchParams(window.location.search);
const itemId = urlParams.get('id');

// Sample furniture data (in a real application, this would come from a backend)
const furnitureData = {
    '1': {
        name: 'Modern Dining Table',
        description: 'A sleek and modern dining table made of high-quality wood.',
        price: '$999.99',
        features: ['Seats 6-8 people', 'Adjustable height', 'Easy to clean'],
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    '2': {
        name: 'Queen Bed',
        description: 'Comfortable queen-size bed with modern design.',
        price: '$1,299.99',
        features: ['Memory foam mattress', 'Adjustable headboard', 'Built-in storage'],
        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    // Add more furniture items as needed
};

// Display furniture details
if (itemId && furnitureData[itemId]) {
    const item = furnitureData[itemId];
    
    document.getElementById('itemName').textContent = item.name;
    document.getElementById('itemImage').src = item.image;
    document.getElementById('itemDescription').textContent = item.description;
    document.getElementById('itemPrice').textContent = item.price;
    
    const featuresList = document.getElementById('itemFeatures');
    item.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
} else {
    // Show error message if item not found
    document.body.innerHTML = '<div class="error-message">Furniture item not found</div>';
}
