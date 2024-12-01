import './style.css'

const showRounds = document.querySelector('#show-rounds') as HTMLParagraphElement;
const letterButtonWrapper = document.querySelector('#letter-button__wrapper') as HTMLDivElement;
const wordOutput = document.querySelector('#word-output') as HTMLParagraphElement;
const playAgainBtn = document.querySelector('#play-again__btn') as HTMLButtonElement;

const words = ["Abendbrot", "Brueckentag", "Erklaerungsnot", "Fingerspitzengefuehl", "Fremdschaemen", "Geborgenheit", "Geschmacksverirrung", "Schweinehund", "Kopfkino", "Kummerspeck", "Schnapsidee", "Torschlusspanik", "verabredet", "verschlimmbessern", "Vorfreude", "Weltschmerz", "Zeitgeist", "Zugzwang", "Hangman", "Coding", "Cupboard", "Turntable", "Beach", "Surfboard", "Turtle","Entertainment", "Cinema", "Radio", "Hoverboard", "Rollerskates"];

//array for letters on the buttons
const alphabet:string[] = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

let clickCounter = 0; //counter for wrong attempts
let currentWord = ''; // saving current word to guess
let hiddenWordArray:string[] = []; // saving display of word with underlines & guessed letters

//function to create letter buttons, running through alphabet array
const createLetterButtons = () => {
  letterButtonWrapper.innerHTML = ''; //set back to original condition for new game
  alphabet.forEach((letter) => {
    const button = document.createElement('button') as HTMLButtonElement;
    button.className = 'letter-btn__style'
    button.innerHTML = letter;
    button.addEventListener('click',() => {
      //logic for button click:
      console.log(`Button ${letter} was clicked`);
      displayGuessedLetter(letter, button); //calling function of line 98
      
    } );
    letterButtonWrapper.appendChild(button);
  });
}

createLetterButtons();


//function to display(hidden)word as underlines in word-output

const displayWord2guess = () => {
  currentWord = words[Math.floor(Math.random() * words.length)]; //to pick a random word from words array
  console.log(currentWord);
  
  hiddenWordArray = currentWord.split('').map(() => '_'); //to display letters as underlines
  wordOutput.textContent = hiddenWordArray.join(' '); //to update display
  clickCounter = 0; //to refresh counter
  showRounds.textContent = `Failed attempts: ${clickCounter} / ${currentWord.length}`;
  
  return currentWord; 
} 

currentWord = displayWord2guess(); 

//function to display correctly guessed letter in word-output

/* const displayGuessedLetter = (guessedLetter:string, button :HTMLButtonElement) => {
  
  if (currentWord.includes(guessedLetter)) { //check for matching letters
  currentWord.split('').forEach((letter, index) => {
    if (letter === guessedLetter) {
      hiddenWordArray[index] = letter; //replace underline with guessed letter --> true
      
    }
  });
  
    wordOutput.textContent = hiddenWordArray.join(' ');//to update the 
  } else {
    clickCounter += 1; //add each wrong attempt 
    button.disabled = true; // to disable button if guessed wrong letter 
    button.style.backgroundColor = "#ccc"; // and make state visible with grey bg-color
    showRounds.textContent = `${currentWord.length - clickCounter}` // to update remaining attempts for user
  }
  if (clickCounter >= currentWord.length) {
    console.log("no attempts remaining");
    
  }
} */


 //test 1
 
 /* const displayGuessedLetter = (guessedLetter: string, button: HTMLButtonElement) => { 
  if (currentWord.includes(guessedLetter)) { // Gehe durch das aktuelle Wort und prüfe, ob der Buchstabe vorkommt
   for (let i = 0; i < currentWord.length; i++) { 
    if (currentWord[i] === guessedLetter) { 
      hiddenWordArray[i] = guessedLetter; // Ersetze Unterstrich durch den geratenen Buchstaben
    console.log(hiddenWordArray);

     } } wordOutput.textContent = hiddenWordArray.join(' '); // Anzeige aktualisieren 
     } else { clickCounter += 1; // Zähler für falsche Versuche erhöhen
       button.disabled = true; // Button deaktivieren, wenn der Buchstabe falsch ist
        button.style.backgroundColor = "#ccc"; // Hintergrundfarbe des Buttons ändern, um Zustand sichtbar zu machen
         showRounds.textContent = `${currentWord.length - clickCounter}`; // Zeigt die verbleibenden Versuche an
          } if (clickCounter >= currentWord.length) { console.log("No attempts remaining");   
            } } */

          //test 2 

          const displayGuessedLetter = (guessedLetter: string, button: HTMLButtonElement) => { let found = false; // Gehe durch das aktuelle Wort und prüfe, ob der Buchstabe vorkommt 
            for (let i = 0; i < currentWord.length; i++) { 
              if (currentWord[i].toUpperCase() === guessedLetter) { 
                hiddenWordArray[i] = currentWord[i].toUpperCase(); // Ersetze Unterstrich durch den geratenen Buchstaben 
                found = true; 
              } 
            } 
            if (found) {
               wordOutput.textContent = hiddenWordArray.join(' '); // Anzeige aktualisieren
                } else { clickCounter += 1; // Zähler für falsche Versuche erhöhen
                   button.disabled = true; // Button deaktivieren, wenn der Buchstabe falsch ist 
                   button.style.backgroundColor = "#ccc"; // Hintergrundfarbe des Buttons ändern, um Zustand sichtbar zu machen
                    showRounds.textContent = `Failed attempts: ${clickCounter} / ${currentWord.length - clickCounter}`; // Zeigt die verbleibenden Versuche an 
                    } if (clickCounter >= currentWord.length) { console.log("No attempts remaining"); // Füge hier die Logik für das Spielende hinzu 
                      } // Logge den aktuellen Zustand des hiddenWordArray 
                      console.log(hiddenWordArray); }



// eventListener to start new game
playAgainBtn?.addEventListener('click', () => {
  console.log("Play again");
 currentWord = displayWord2guess();
 createLetterButtons(); //make sure to reset letter buttons for new game
})
