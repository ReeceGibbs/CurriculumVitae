//function that gets called when the page loads
function pageLoad() {
    // we only load our skills section after 2 seconds
    setTimeout(function() {
        document.querySelector('.skills-container').classList.add('show');
    }, 2000);
}