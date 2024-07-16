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
    fitty('h1');
}

function goToFront() {
    frontDiv.style.display="block";
    backDivText.style.display="none";
    input.focus();
}
