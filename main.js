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
    resizeText();
}

function goToFront() {
    frontDiv.style.display="block";
    backDivText.style.display="none";
    input.focus();
}

function resizeText() {
    if(backDivText.style.display=="block") {
        requestAnimationFrame(() => {
        const parentWidth = window.innerWidth;
        const parentHeight = window.innerHeight;
        let fontSize = 1000; // Start with a large font size
        backDivText.style.fontSize = fontSize + 'px';

        const bufferMargin = 0; // Adjust the buffer margin as needed
    
        // Ensure it doesn't exceed the parent's dimensions by decreasing if necessary
        while (backDivText.offsetWidth + bufferMargin > parentWidth || backDivText.offsetHeight + bufferMargin > parentHeight) {
            fontSize -= 0.5; // Decrease font size in smaller increments for precision
            backDivText.style.fontSize = fontSize + 'px';
        }
        });
    }
}

// Debounce function to avoid too many resize calls
function debounce(func, wait) {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(), wait);
    };
}

// Resize on window resize and orientation change with debounce
const debouncedResize = debounce(resizeText, 150);
window.addEventListener('resize', debouncedResize);
window.addEventListener('orientationchange', debouncedResize);

// Resize on window resize and orientation change with debounce
//window.addEventListener('resize', resizeText);
//window.addEventListener('orientationchange', resizeText);
