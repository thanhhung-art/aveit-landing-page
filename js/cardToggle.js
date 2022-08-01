let cards = document.querySelectorAll('.block4 .card')
let p = document.querySelectorAll('.block4 .card p')
let directionals = document.querySelectorAll('.directional')
let cards_body = document.querySelectorAll('.block4 .card .card-body')

cards.forEach((card, i) => {
  card.onclick = () => {
    cards.forEach((card, j) => {
      if (i === j) {
        directionals[j].classList.toggle('rotate-directional')
        cards_body[j].classList.toggle('height-0')
        p[j].classList.toggle('hide-p')
      }
      else {
        directionals[j].classList.remove('rotate-directional')
        cards_body[j].classList.add('height-0')
        p[j].classList.add('hide-p')
      }
    })
  }
})