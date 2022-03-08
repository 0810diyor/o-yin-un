const play: HTMLButtonElement = document.querySelector('#play')!
const bet:  HTMLInputElement = document.querySelector('#bet')!

const elements: NodeListOf<any> = document.querySelectorAll('.card-body h1')

play.onclick = () => {

  let amount: number = +bet.value

  fillElements()
  replaceRandomElement()
  hide()

  elements.forEach(element => {
    element.onclick = () => {
      element.style.opacity = '1'
    } 
  })
}

// yashirish
function hide() {
  for(let element of elements) {
    element.style.opacity = '0'
  }
}

// random elementni $ ga almashtirish
function replaceRandomElement() {
  let rand = random(1, 9)
  elements[rand].innerHTML = '$'
}

// elementlarni x bilan to`ldiruvchi funksiya
function fillElements() {
  for(let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = 'X'
  }
}

function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) ) + min;
}