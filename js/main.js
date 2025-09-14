// iOS 7 Portfolio Site - Main functionality
document.addEventListener('DOMContentLoaded', function() {

    // Enhanced Image Modal Functionality
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const closeModal = document.getElementById('closeModal');

    let currentGalleryImages = [];
    let currentImageIndex = 0;
    let touchStartX = 0;
    let touchEndX = 0;

    // Get all images from a specific card
    function getCardImages(clickedItem) {
        const card = clickedItem.closest('.ios7-card');
        if (!card) return [];

        const images = [];
        const photoItems = card.querySelectorAll('.ios7-photo-item');

        photoItems.forEach(item => {
            const img = item.querySelector('img');
            if (img && item.dataset.image) {
                images.push({
                    src: item.dataset.image,
                    alt: img.alt,
                    element: item
                });
            }
        });

        return images;
    }



    // Display image in modal
    function showModalImage(index) {
        if (index < 0 || index >= currentGalleryImages.length) return;

        currentImageIndex = index;
        const imageData = currentGalleryImages[index];

        modalImage.style.opacity = '0';
        setTimeout(() => {
            modalImage.src = imageData.src;
            modalImage.alt = imageData.alt;
            modalImage.style.opacity = '1';
        }, 150);
    }

    // Navigate to previous image
    function showPreviousImage() {
        if (currentImageIndex > 0) {
            showModalImage(currentImageIndex - 1);
        }
    }

    // Navigate to next image
    function showNextImage() {
        if (currentImageIndex < currentGalleryImages.length - 1) {
            showModalImage(currentImageIndex + 1);
        }
    }

    // Open modal
    function openModal(clickedItem) {
        currentGalleryImages = getCardImages(clickedItem);
        if (currentGalleryImages.length === 0) return;

        // Find the index of the clicked image
        const clickedSrc = clickedItem.dataset.image;
        currentImageIndex = currentGalleryImages.findIndex(img => img.src === clickedSrc);
        if (currentImageIndex === -1) currentImageIndex = 0;

        showModalImage(currentImageIndex);
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    // Close modal
    function closeImageModal() {
        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
            currentGalleryImages = [];
            currentImageIndex = 0;
        }
    }

    // Event Listeners
    const photoItems = document.querySelectorAll('.ios7-photo-item');
    photoItems.forEach(item => {
        item.addEventListener('click', function() {
            openModal(this);
        });
    });

    // Close modal events
    if (closeModal) {
        closeModal.addEventListener('click', closeImageModal);
    }

    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeImageModal();
            }
        });
    }



    // Keyboard navigation
    document.addEventListener('keydown', function(event) {
        if (modal && !modal.classList.contains('hidden')) {
            switch(event.key) {
                case 'Escape':
                    closeImageModal();
                    break;
                case 'ArrowLeft':
                    event.preventDefault();
                    showPreviousImage();
                    break;
                case 'ArrowRight':
                    event.preventDefault();
                    showNextImage();
                    break;
            }
        }
    });

    // Mobile touch/swipe support
    if (modal) {
        modal.addEventListener('touchstart', function(e) {
            touchStartX = e.touches[0].clientX;
        });

        modal.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].clientX;
            const swipeDistance = touchStartX - touchEndX;
            const minSwipeDistance = 50;

            if (Math.abs(swipeDistance) > minSwipeDistance) {
                if (swipeDistance > 0) {
                    // Swipe left - next image
                    showNextImage();
                } else {
                    // Swipe right - previous image
                    showPreviousImage();
                }
            }
        });
    }

    // iOS 7 Photo Loading States
    function addPhotoLoadingStates() {
        const images = document.querySelectorAll('.ios7-photo-thumbnail, .artwork-thumbnail');

        images.forEach(img => {
            img.addEventListener('load', function() {
                this.style.opacity = '1';
            });

            img.addEventListener('error', function() {
                this.style.opacity = '0.3';
                console.warn('Failed to load image:', this.src);
            });
        });
    }

    // Initialize iOS 7 photo loading
    addPhotoLoadingStates();

    // iOS 7 Control Center Functionality
    const controlIndicator = document.getElementById('controlIndicator');
    const controlCenter = document.getElementById('controlCenter');
    const controlOverlay = document.getElementById('controlOverlay');
    const controlButtons = document.querySelectorAll('.ios7-control-button');
    let isControlCenterOpen = false;
    let touchStartY = 0;
    let touchEndY = 0;

    // Control Center Toggle Functions
    function openControlCenter() {
        controlCenter.classList.add('active');
        controlOverlay.classList.add('active');
        isControlCenterOpen = true;

        // Add haptic-like feedback animation
        controlIndicator.style.transform = 'translateX(-50%) scale(0.9)';
        setTimeout(() => {
            controlIndicator.style.transform = 'translateX(-50%) scale(1)';
        }, 150);
    }

    function closeControlCenter() {
        controlCenter.classList.remove('active');
        controlOverlay.classList.remove('active');
        isControlCenterOpen = false;
    }

    // Spacebar shortcut to toggle Control Center
    document.addEventListener('keydown', function(event) {
        // Only trigger if spacebar is pressed and we're not in an input field
        if (event.code === 'Space' &&
            event.key === ' ' &&
            !event.target.matches('input, textarea, [contenteditable]') &&
            (!modal || modal.classList.contains('hidden'))) {

            event.preventDefault(); // Prevent page scroll

            if (isControlCenterOpen) {
                closeControlCenter();
            } else {
                openControlCenter();
            }
        }
    });

    // Desktop: Click indicator to toggle
    if (controlIndicator) {
        controlIndicator.addEventListener('click', () => {
            if (isControlCenterOpen) {
                closeControlCenter();
            } else {
                openControlCenter();
            }
        });
    }

    // Mobile: Swipe up from bottom to open
    document.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    });

    document.addEventListener('touchend', (e) => {
        touchEndY = e.changedTouches[0].clientY;
        const swipeDistance = touchStartY - touchEndY;
        const windowHeight = window.innerHeight;

        // If swipe starts from bottom 50px and swipes up at least 100px
        if (touchStartY > windowHeight - 50 && swipeDistance > 100 && !isControlCenterOpen) {
            openControlCenter();
        }
        // If swipe down while control center is open
        else if (swipeDistance < -50 && isControlCenterOpen) {
            closeControlCenter();
        }
    });

    // Close control center when clicking overlay
    if (controlOverlay) {
        controlOverlay.addEventListener('click', () => {
            if (isControlCenterOpen) {
                closeControlCenter();
            }
        });
    }

    // Close control center when clicking outside
    document.addEventListener('click', (e) => {
        if (isControlCenterOpen &&
            !controlCenter.contains(e.target) &&
            !controlIndicator.contains(e.target) &&
            !controlOverlay.contains(e.target)) {
            closeControlCenter();
        }
    });

    // Control button interactions with haptic feedback
    controlButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            controlButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Haptic-like feedback animation
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    button.style.transform = 'scale(1)';
                }, 100);
            }, 100);

            // Close control center after selection (optional)
            setTimeout(() => {
                closeControlCenter();
            }, 300);
        });
    });
});
