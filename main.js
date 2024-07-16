var frontDiv = document.getElementById("frontDiv")
var input = document.getElementById("myInput")
var backDiv = document.getElementById("backDiv")
var backDivText = document.getElementById("backDivText")

input.addEventListener('keydown', function(event) {
    if(event.key == "Enter") {
        printWord();
    }
});

function printWord() {
    frontDiv.style.display="none";
    backDivText.innerText = input.value;
    backDiv.style.display="block";
}

function goToFront() {
    frontDiv.style.display="block";
    backDiv.style.display="none";
}
