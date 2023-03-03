const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
  currentActive++

  if (currentActive > circles.length) {
    currentActive = circles.length
    //resetting the currentActive so it does NOT go to more than four.  beause there are ONLY FOUR circles
  }
  update()
})

prev.addEventListener('click', () => {
  currentActive--

  if (currentActive < 1) {
    currentActive = 1
    //makes it so you cant go back before the number one as far as the circles go
  }
  update()
})
