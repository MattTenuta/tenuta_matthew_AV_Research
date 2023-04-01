// Select all the text elements on the page
const textElements = document.querySelectorAll('body *');

// Keep track of the current element being read
let currentElementIndex = 0;

// Function to read the current element and highlight it
function readAndHighlightCurrentElement() {
  const currentElement = textElements[currentElementIndex];
  const textToRead = currentElement.innerText;
  
  // Highlight the current element
  currentElement.classList.add('highlight');

  // Use the speech synthesis API to read the text
  const utterance = new SpeechSynthesisUtterance(textToRead);
  speechSynthesis.speak(utterance);

  // When the speech has finished, remove the highlight and move on to the next element
  utterance.onend = () => {
    currentElement.classList.remove('highlight');
    currentElementIndex++;
    if (currentElementIndex < textElements.length) {
      readAndHighlightCurrentElement();
    }
  };
}

// Function to start reading from the first element
function startReading() {
  currentElementIndex = 0;
  readAndHighlightCurrentElement();
}

// Attach a click event listener to the button that triggers the reading
const readButton = document.getElementById('read-button');
readButton.addEventListener('click', startReading);


