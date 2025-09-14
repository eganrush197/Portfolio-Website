// iOS 7 Lock Screen to Portfolio Transition
document.addEventListener('DOMContentLoaded', function() {
    const enterButton = document.getElementById('enter-btn');
    const landingPage = document.getElementById('landing-page');

    // Handle iOS 7 slide to enter
    enterButton.addEventListener('click', function() {
        // iOS 7 style unlock animation
        enterButton.style.transform = 'scale(0.95)';
        enterButton.style.opacity = '0.7';

        setTimeout(() => {
            // Start iOS 7 style transition
            landingPage.style.transform = 'scale(1.1)';
            landingPage.style.opacity = '0';
            landingPage.style.filter = 'blur(10px)';

            // Redirect to home page after transition
            setTimeout(() => {
                window.location.href = 'pages/home.html';
            }, 400);
        }, 100);
    });

    // iOS 7 swipe gesture support (optional)
    let startY = 0;
    let startX = 0;

    landingPage.addEventListener('touchstart', function(e) {
        startY = e.touches[0].clientY;
        startX = e.touches[0].clientX;
    });

    landingPage.addEventListener('touchend', function(e) {
        const endY = e.changedTouches[0].clientY;
        const endX = e.changedTouches[0].clientX;
        const diffY = startY - endY;
        const diffX = Math.abs(startX - endX);

        // Swipe up to enter (like iOS lock screen)
        if (diffY > 50 && diffX < 100) {
            enterButton.click();
        }
    });

    // Allow Enter key or Space to trigger transition
    document.addEventListener('keydown', function(event) {
        if ((event.key === 'Enter' || event.key === ' ') &&
            !landingPage.style.opacity || landingPage.style.opacity !== '0') {
            event.preventDefault();
            enterButton.click();
        }
    });


});
