// Function to handle the copy-paste action
function copyCmd() {
    const cmd = "npm install @aritra_debnath/zero-env";
    
    // Copy text to clipboard
    navigator.clipboard.writeText(cmd).then(() => {
        // Show the "Copied!" toast
        const toast = document.getElementById('toast');
        toast.classList.add('show');
        
        // Hide it after 2 seconds
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// Entrance Animations
document.addEventListener("DOMContentLoaded", () => {
    // Select the main sections
    const elements = document.querySelectorAll('.hero, .features, .grid');
    
    elements.forEach((el, index) => {
        // Set initial state (already set in CSS but this ensures reset)
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        
        // Stagger the animation delays
        // Hero appears first, then features, then the grid
        el.style.transitionDelay = `${index * 0.15}s`;
        
        // Trigger the animation
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100);
    });
});