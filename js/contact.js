// Contact form functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.message-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Simulate form submission
            const submitButton = this.querySelector('.submit-button');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Simulate API call delay
            setTimeout(() => {
                // In a real implementation, you would send the data to your server
                // For now, we'll just show a success message
                alert('Thank you for your message! I will get back to you soon.');
                
                // Reset form
                this.reset();
                
                // Reset button
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 1500);
        });
        
        // Add real-time validation feedback
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                // Remove error styling when user starts typing
                this.classList.remove('error');
            });
        });
    }
    
    function validateField(field) {
        const value = field.value.trim();
        const isRequired = field.hasAttribute('required');
        
        // Remove previous error styling
        field.classList.remove('error');
        
        if (isRequired && !value) {
            field.classList.add('error');
            return false;
        }
        
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                field.classList.add('error');
                return false;
            }
        }
        
        return true;
    }
});
