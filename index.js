const inputEl = document.getElementById('color-input')
const selectEl = document.getElementById('color-scheme')
const btnEl = document.getElementById('btn')

const colorBar1 = document.getElementById('colorBar1')
const colorBar2 = document.getElementById('colorBar2')
const colorBar3 = document.getElementById('colorBar3')
const colorBar4 = document.getElementById('colorBar4')
const colorBar5 = document.getElementById('colorBar5')

const color1 = document.getElementById('color1')
const color2 = document.getElementById('color2')
const color3 = document.getElementById('color3')
const color4 = document.getElementById('color4')
const color5 = document.getElementById('color5')

let colors1;
let colors2;
let colors3;
let colors4;
let colors5;

function handleClick(){
    const color = inputEl.value
    const colorScheme = selectEl.value
    const mainColor = color.substring(1)
    console.log(mainColor)
    console.log(colorScheme)
    fetch(`https://www.thecolorapi.com/scheme?hex=${mainColor}&mode=${colorScheme}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        colors1 = data.colors[0].hex.value
        colors2 = data.colors[1].hex.value
        colors3 = data.colors[2].hex.value
        colors4 = data.colors[3].hex.value
        colors5 = data.colors[4].hex.value
        
        color1.textContent = colors1
        color2.textContent = colors2
        color3.textContent = colors3
        color4.textContent = colors4
        color5.textContent = colors5
        
        colorBar1.style.backgroundColor = colors1
        colorBar2.style.backgroundColor = colors2
        colorBar3.style.backgroundColor = colors3
        colorBar4.style.backgroundColor = colors4
        colorBar5.style.backgroundColor = colors5
    })
}

btnEl.addEventListener('click', handleClick)


    
