//initialize our array of objects for each line and its sections
let textSections = {
    'line0':['// hi there... my name is Reece'],
    'line1': ['// welcome to my cv (curriculum vitea)'],
    'line2': ['// let\'s get some things set up for you']
}
//defining our promise function that will return after {ms} for our async animateLine function https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop/44476626
const timer = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

animateLines();

// here we define a function to animate each line as if someone were typing it
async function animateLines() {
    //we iterate through each item in textSections
    for (let j = 0; j < Object.keys(textSections).length; j++) {
        let lineId = `line${j}`;
        let line = textSections[`line${j}`];
        //we take in an array of each section of our line as well as the line id
        for (let x = 0; x < line.length; x++) {
            //here we reference the relevant sections of our line
            //we loop through each character of each section and populate the element char by char
            for (let i = 0; i < line[x].length; i++) {
                document.querySelector(`#${lineId} .section${x}`).innerHTML += line[x].charAt(i);
                await timer(80);
            }
        }
    }
}