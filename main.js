var frontDiv = document.getElementById("frontDiv");
var input = document.getElementById("myInput");
var backDivText = document.getElementById("backDivText");

input.addEventListener('keydown', function(event) {
    if(event.key == "Enter") {
        printWord();
    }
});

function printWord() {
    frontDiv.style.display="none";
    backDivText.style.display="block";
    backDivText.innerText = input.value;
    resizeText(backDivText);
}

function goToFront() {
    frontDiv.style.display="block";
    backDivText.style.display="none";
    input.focus();
}

function resizeText(textElement) {
    const parentWidth = window.innerWidth;
    const parentHeight = window.innerHeight;
    let fontSize = 2000; // Start with a large font size
    textElement.style.fontSize = fontSize + 'px';

    const bufferMargin = 0; // Adjust the buffer margin as needed
    
    // Reduce font size until the text fits within the parent width
    while (textElement.offsetWidth + bufferMargin > parentWidth || textElement.offsetHeight + bufferMargin > parentHeight) {
        fontSize-=0.5;
        textElement.style.fontSize = fontSize + 'px';
    }
}