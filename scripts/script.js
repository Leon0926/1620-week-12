const clickMeButton = document.querySelector(".click-me");
// console.log(clickMeButton)

function clickHandler()
{
    alert("You clicked me!");
}

clickMeButton.addEventListener("click",clickHandler)