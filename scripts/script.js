const clickMeButton = document.querySelector(".click-me");
// console.log(clickMeButton)

function clickHandler()
{
    alert("You clicked me!");
}

clickMeButton.addEventListener("click",clickHandler, {once:true});

// clickMeButton.removeEventListener("click",clickHandler)

function changeBackground(){
    // document.body.style.backgroundColor = "pink";
    document.body.classList.add("pink-bg");
}

clickMeButton.addEventListener("click",changeBackground)

function changeText()
{
    if(clickMeButton.textContent === 'Click Me!' ){
        clickMeButton.textContent = 'Clicked'
    }
    else if( clickMeButton.textContent === 'Clicked'){
        clickMeButton.textContent = 'Click Me!' 
    }
}

clickMeButton.addEventListener("click", changeText);

console.log()
function updateImage(event)
{
    console.log(event.target.textContent)
    const image = document.querySelector("#shoppingCart") 
    //console.log(image)
    image.src="images/shopppingCart.png";
    image.width=100;
    image.height=100;
    image.alt="shopping cart icon"
}
clickMeButton.addEventListener("click", updateImage)

const buttonContainer = document.querySelector(".buttonContainer");

function changeBGGreen(e)
{
    e.target.classList.add("bbgc");
}
buttonContainer.addEventListener("mouseover", changeBGGreen)

function changeTextColor(e){
    e.target.style.color = e.target.textContent 
}
buttonContainer.addEventListener("click",changeTextColor)



