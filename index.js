// for (var i = 0; i < document.querySelectorAll(".drum").length; i++)
// {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//         MakeSound(this.innerHTML);
//         animation(this.innerHTML);
//     });
// }

$(".drum").click(function () {
    MakeSound($(this).attr("class")[0]);
    animation($(this).attr("class")[0]);
})

// document.addEventListener("keypress", function (button) {
//     MakeSound(button.key);
//     animation(button.key);
// })

$(document).keypress(function (event) {
    MakeSound(event.key);
    animation(event.key);
})


function MakeSound(variable) {
    switch (variable) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            break;
    }
}

function animation(key) {
    var active = document.querySelector("." + key);
    active.classList.add("pressed");
    setTimeout(function () {
        active.classList.remove("pressed");
    }, 100);
}
