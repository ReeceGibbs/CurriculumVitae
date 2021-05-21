//function that gets called when the page loads
function pageLoad() {
    // initialize our about row
    let aboutRow = document.querySelector('#aboutRow');

    //we set the innerHtml of our employment period tag to the current date - my employment start date
    let today = new Date();

    let employmentStartDate = new Date(2018, 06);

    //we reference our employmentDate tag by id
    document.getElementById('employmentPeriod').innerHTML = calcDate(today, employmentStartDate);
    
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

//a simple function that calculates the difference between two dates https://stackoverflow.com/questions/17732897/difference-between-two-dates-in-years-months-days-in-javascript
function calcDate(date1, date2) {

    //we get the difference between the two dates
    let difference = Math.floor(date1.getTime() - date2.getTime());

    //a day in milliseconds
    let day = 1000 * 60 * 60 * 24;

    //we get the difference in years
    let diffInYears = Math.floor(Math.floor(difference/day)/31)/12;

    //we build the date string
    let dateString = `${Math.floor(diffInYears)} years ${
    let dateString = `${Math.floor(diffInYears)} years ${Math.floor((diffInYears - Math.floor(diffInYears)) * 12)} months`;

    //finally we return the date string
    return dateString;
}
