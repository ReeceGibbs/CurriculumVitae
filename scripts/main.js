//function that gets called when the page loads
function pageLoad() {
    // initialize our about row
    let aboutRow = document.querySelector('#aboutRow');
    
    document.querySelector('.skills-container').classList.add('show');
    
    // check to see if window is small and wrap our about elements if it is we make sure to wrap our content
    if (checkSmallWindow()) {
        aboutRow.classList.add('about-row-wrap');
    }
}

//function to check the body size to see if we need to wrap the about row
function checkSmallWindow() {
    // get window width
    if (window.innerWidth < 850) {
        return true;
    }
    return false;
}

// listen for window resize and wrap elements if needs be
window.onresize = function () {
    // if small and not wrapping then wrap else stop wrapping if window is large enough now
    if (checkSmallWindow() && !aboutRow.classList.contains('about-row-wrap')) {
        aboutRow.classList.add('about-row-wrap');
    } else if (!checkSmallWindow() && aboutRow.classList.contains('about-row-wrap')) {
        aboutRow.classList.remove('about-row-wrap');
    }
};
