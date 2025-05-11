document.addEventListener('DOMContentLoaded', () => {
    // Tab switching functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            // Hide all tab contents
            tabContents.forEach(content => content.classList.remove('active'));
            // Show selected tab content
            document.getElementById(btn.dataset.tab).classList.add('active');
        });
    });

    // Form submission handling
    const forms = document.querySelectorAll('.profile-form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            // Here you would typically send the data to your backend
            console.log('Form data:', data);

            // Show success message
            alert('Changes saved successfully!');
        });
    });

    // Password validation
    const passwordForm = document.querySelector('#security .profile-form');
    if (passwordForm) {
        passwordForm.addEventListener('submit', (e) => {
            const currentPassword = document.getElementById('current-password').value;
            const newPassword = document.getElementById('new-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            if (!currentPassword) {
                alert('Please enter your current password');
                e.preventDefault();
                return;
            }

            if (newPassword !== confirmPassword) {
                alert('New password and confirm password do not match');
                e.preventDefault();
                return;
            }

            if (newPassword.length < 8) {
                alert('Password must be at least 8 characters long');
                e.preventDefault();
                return;
            }
        });
    }

    // Image upload handling
    const uploadBtn = document.querySelector('.upload-btn');
    if (uploadBtn) {
        uploadBtn.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';

            input.onchange = (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const profileImage = document.querySelector('.profile-image img');
                        profileImage.src = e.target.result;
                    };
                    reader.readAsDataURL(file);
                }
            };

            input.click();
        });
    }
});
