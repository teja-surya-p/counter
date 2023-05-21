let red = document.getElementById('red')
let blue = document.getElementById('blue')
let green = document.getElementById('green')

const square = document.querySelectorAll('.box')

const numclic = { 'red': 0, 'blue': 0, 'green': 0 }
square.forEach(square => {
    square.onclick = () => {
        numclic[square.value] += 1
        square.innerText = numclic[square.value]
    }
})

function erase() {
    numclic.red = 0
    numclic.blue = 0
    numclic.green = 0

    square.forEach(square => {
        square.innerText = '0'
    })
}

const clear = document.getElementById('clear')
{
    clear.onclick = () => erase()
}