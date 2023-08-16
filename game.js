let buttonColours = ["red", "blue", "green", "yellow"]
let userClickedPattern = [];

// selecting the random button from the array.

// adding random generated colour to the gamepattern array.
let gamePattern = [];

// flashing the current color that is selected on line no 4.

// creating a function for generating a random number.
let startedToggle = false;
let level = 0;

$(document).keypress(function () {
    if (!startedToggle) {
        $(h1).innerHTML = "Level 0";
        console.log("text changed");
        nextSequence();
        startedToggle = true;
    }
})

function nextSequence(){
    let randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour)    
    $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
};

// adding User clicked color to the userClickedPattern array by selecting their id using this keyword.
$(".btn").click(function (dets) {
    let userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
})

// playing the audio according to the button selected.
function playSound(name) {
    $(`#${name}`).click(function() {
        var x = new Audio(`./sounds/${name}.mp3`)
        x.play();      
    })  
}

function animatePress(){
    $(".btn").click(function (dets) {
        let userChosenColour1 = this.id;
        $(`.container .${userChosenColour1}`).addClass("pressed")
        setInterval(function () {
            $(`.container .${userChosenColour1}`).removeClass("pressed")
        }, 100)
    })
}
animatePress();

