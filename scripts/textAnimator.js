//initialize our array of objects for each line and its sections
let textSections = {
    'line0':['// hi there... my name is Reece'],
    'line1': ['// welcome to my cv (curriculum vitea)'],
    'line2': ['// let\'s get some things set up for you'],
    'line3': ['// defining our visitor constructor'],
    'line4': ['function ', 'visitor', '(', 'personVisiting', ',', 'isCurrentlyBrowsing', ',', 'isWelcome', ',', 'isImpressed', ') {'],
    'line5': ['this', '.', 'personVisiting', ' = ', 'personVisiting', ';'],
    'line6': ['this', '.', 'isCurrentlyBrowsing', ' = ', 'isCurrentlyBrowsing', ';'],
    'line7': ['this', '.', 'isWelcome', ' = ', 'isWelcome', ';'],
    'line8': ['this', '.', 'isImpressed', ' = ', 'isImpressed', ';'],
    'line9': ['}'],
    'line10': ['// initialising our visitor using our constructor'],
    'line11': ['let ', 'guest', ' = ', 'new ', 'visitor', '('],
    'line12': ['JSON', '.', 'stringify', '(', 'you', '),'],
    'line13': ['true', ','],
    'line14': ['true', ',', '// of course you are welcome!!!'],
    'line15': ['true', '// well at least I hope so...'],
    'line16': [');'],
    'line17': ['// let\'s make sure you\'re having fun'],
    'line18': ['while', '(', 'guest', '.', 'isCurrentlyBrowsing', ') {'],
    'line19': ['makeHappy', '(', 'guest', '); '],
    'line20': ['}'],
    'line21': ['// alright enough of this, let\'s take a look at my cv'],
    'line22': ['document', '.', 'getElementById', '(', '\'enterBtn\'', ')', '.', 'classList', '.', 'add', '(', '\'show\'', ');']
}

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
                await timer(60);
            }
            //we pause a bit after every section
            await timer(250);
        }
    }
    //now that everything is done we show the button that the user can use to enter our site and that it gets scrolled to so the user can see it
    let enterBtn = document.getElementById('enterBtn');
    enterBtn.classList.add('show');
    enterBtn.scrollIntoView();
}