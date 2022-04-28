
// THE KEYBOARD
const keysNL = document.getElementsByClassName('key');
const keysArr = Array.from(keysNL);   //Converting the node list to an array so that Array methods can be used.
let qwerty = [  'q','w','e','r','t','y','u','i','o','p',
                'a','s','d','f','g','h','j','k','l',
                'Caps','z','x','c','v','b','n','m','Clear','Run',
                '1','2','3','4','5',' ','6','7','8','9','0'];
let capStatus = -1; // -1 = small letters, 1 = capital letters.

function fillKeys(){
    for(let i = 0; i<keysArr.length; i++){
        keysArr[i].innerHTML = qwerty[i];
    }}

//THE METHODS
const methodsNL = document.getElementsByClassName('methodBtn');
const methodsArr = Array.from(methodsNL);

//Methods with args:
let methodsArg = {
    charAt: function(word, arg){return word.charAt(arg);},
    charCodeAt: function(word, arg){return word.charCodeAt(arg);},
    includes: function(word, arg){return word.includes(arg);},
    indexOf: function(word, arg){return word.indexOf(arg);},
    lastIndexOf: function(word, arg){return word.lastIndexOf(arg);},
    startsWith: function(word, arg){return word.startsWith(arg);},
    endsWith: function(word, arg){return word.endsWith(arg);}
}
//Methods with no args:
let methodsVoid = {
    toUpperCase: function(word){return word.toUpperCase()},
    toLowerCase: function(word){return word.toLowerCase()},
    trim:        function(word){return word.trim()}
} 
let methodNameGlobal; // To be used in run()
let scrArg = ""; // To be used in run()
// DISPLAY SCREEN

// Display Text:
const scrInput = document.getElementById('scrInput');
const scrCode = document.getElementById('scrCode');
const scrResult = document.getElementById('scrResult');

//TYPING
let condition = 0; //0 = start, 1 = methods added.

// Function for when a method is pressed:
function methodArg(methodName){
    condition = 1
    methodNameGlobal = methodName;
    scrCode.textContent = scrInput.textContent + '.' + methodName + '(';
    scrResult.textContent = "Please insert the argument and press Run.";
}
function methodVoid(methodName){
    condition = 2;
    scrCode.textContent = scrInput.textContent + '.' + methodName + '()';
    scrResult.textContent = methodsVoid[methodName](scrInput.textContent);
}

// Function for when a key is pressed:
function pressed(key){
    let keyIndex = keysArr.indexOf(key);
    
    //For Special keys:
    if(key === 'caps'){
        capKey();
    }
    else if(key === 'clear'){
        location.reload();
    }
    else if(key === 'run'){
        run();
    }
    //At the start:
    else{
        //At the start:
        if(condition === 0){
            scrInput.textContent += qwerty[keyIndex];
        }
        //For Methods withArgs:
        else if (condition === 1){
            scrCode.textContent += qwerty[keyIndex];
            scrArg += qwerty[keyIndex];
        }
    }

}

//When 'cap' key is pressed:
function capKey(){
    //note: why can't I use callback func??????
    if(capStatus < 0){
        for(let i = 0; i<qwerty.length; i++){
            qwerty[i] = qwerty[i].toUpperCase();
        }
    }
    else{
        for(let i = 0; i<qwerty.length; i++){
            qwerty[i] = qwerty[i].toLowerCase();
        }
    }
    capStatus *= -1;
    fillKeys();
}
//When 'run' key is pressed:
function run(){
    if(condition === 1){
    scrCode.textContent += ')';
    console.log(scrInput.textContent, scrArg);
    scrResult.textContent = methodsArg[methodNameGlobal](scrInput.textContent, scrArg);
    condition = 2;}
}
//PROGRAM INITIATION
scrInput.textContent = "";
fillKeys();

