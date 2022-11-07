const mainContainer = document.querySelector(".container")

for (let index = 0; index < 12; index++) {
    let colorBox = document.createElement("div")
    colorBox.setAttribute("class", "colorBox")
    mainContainer.appendChild(colorBox)
}

let colorBoxes = document.querySelectorAll(".colorBox")

updateColor()
function updateColor() {
    colorBoxes.forEach((colorBox)=>{
        const newColor = randomColor()
        colorBox.style.backgroundColor = "#" + newColor
        colorBox.innerText = "#" + newColor
    })
}

function randomColor() {
    let chars = "0123456789abcdef"
    let colorCode = ""

    for (let index = 0; index < 6; index++) {
        const randomColor = Math.floor(Math.random() * chars.length)
        colorCode += chars.substring(randomColor, randomColor + 1)
    }
    return colorCode
}