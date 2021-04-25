//initialize our array of objects for each line and its sections
let textSections = {
    'line0':['// hi there... my name is Reece'],
    'line1': ['// welcome to my cv (curriculum vitae)'],
    'line2': ['// if you aren\'t interested in this intro page, feel free to speed it up by clicking anywhere on the screen'],
    'line3': ['// alright... let\'s get some things set up for you'],
    'line4': ['// defining our visitor constructor'],
    'line5': ['function ', 'visitor', '(', 'personVisiting', ',', 'isCurrentlyBrowsing', ',', 'isWelcome', ',', 'isImpressed', ') {'],
    'line6': ['this', '.', 'personVisiting', ' = ', 'personVisiting', ';'],
    'line7': ['this', '.', 'isCurrentlyBrowsing', ' = ', 'isCurrentlyBrowsing', ';'],
    'line8': ['this', '.', 'isWelcome', ' = ', 'isWelcome', ';'],
    'line9': ['this', '.', 'isImpressed', ' = ', 'isImpressed', ';'],
    'line10': ['}'],
    'line11': ['// initialising our visitor using our constructor'],
    'line12': ['let ', 'guest', ' = ', 'new ', 'visitor', '('],
    'line13': ['JSON', '.', 'stringify', '(', 'you', '),'],
    'line14': ['true', ','],
    'line15': ['true', ',', '// of course you are welcome!!!'],
    'line16': ['true', '// well at least I hope so...'],
    'line17': [');'],
    'line18': ['// let\'s make sure you\'re having fun'],
    'line19': ['while', '(', 'guest', '.', 'isCurrentlyBrowsing', ') {'],
    'line20': ['makeHappy', '(', 'guest', '); '],
    'line21': ['}'],
    'line22': ['// alright enough of this, let\'s take a look at my cv'],
    'line23': ['document', '.', 'getElementById', '(', '\'enterBtn\'', ')', '.', 'classList', '.', 'add', '(', '\'show\'', ');']
}

// variable that control the speed of our text animation
let lettersMs = 20;
let wordsMs = 250;

//defining our promise function that will return after {ms} for our async animateLine function https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop/44476626
const timer = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

animateLines();

// here we define a function to animate each line as if someone were typing it
async function animateLines() {
    //we iterate through each item in textSections
    for (let j = 0; j < Object.keys(textSections).length; j++) {
        //we set the current line and lineId
        let lineId = `line${j}`;
        let line = textSections[`line${j}`];
        //we want to make sure that the user can always see what is being typed even if they are using a mobile device
        document.getElementById(lineId).scrollIntoView();
        //we take in an array of each section of our line as well as the line id
        for (let x = 0; x < line.length; x++) {
            //here we reference the relevant sections of our line
            //we loop through each character of each section and populate the element char by char
            for (let i = 0; i < line[x].length; i++) {
                //every 80 milliseconds we add the next character
                document.querySelector(`#${lineId} .section${x}`).innerHTML += line[x].charAt(i);
                await timer(lettersMs);
            }
            //we pause a bit after every section
            await timer(wordsMs);
        }
    }
    //now that everything is done we show the button that the user can use to enter our site and that it gets scrolled to so the user can see it
    let enterBtn = document.getElementById('enterBtn');
    enterBtn.classList.add('show');
    enterBtn.scrollIntoView();
}

// function to handle the instance in which someone would like to speed up the text intro
function speedUp() {
    lettersMs = 1;
    wordsMs = 5;
}