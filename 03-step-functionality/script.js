const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')
//create variables linked to each dom element.. last one circles is a node list that is not the same as an array but very similar
let currentActive = 1
//creates a counter to track where in each of the four steps we are

next.addEventListener('click', () => {
  //add event listener to the next BUTTON
  currentActive++

  //increment counter (currentAcive by one with one button press)
  if (currentActive > circles.length) {
    currentActive = circles.length
    //resetting the currentActive so it does NOT go to more than four.  beause there are ONLY FOUR circles
  }
  update()
  //execute update function on each button click
})

prev.addEventListener('click', () => {
  currentActive--

  if (currentActive < 1) {
    currentActive = 1
    //makes it so you cant go back before the number one as far as the circles go
  }
  update()
  //call the function called update so basically this is not a built in function it is a function we are going to define BELOW
})

function update() {
  circles.forEach((circle, idx) => {
    //forEach has TWO PARAMETERS individual item (circle or BTRIPD and idx which represents the index of the array, remember that arrays begin with ZERO
    if (idx < currentActive) {
      //if the index of the item is less than the counter CURRACTIVE then execute
      circle.classList.add('active')
      //add the active class to the circle.  from our CSS code.... it's not only active it is .circle.active specifying only when the circle has an active class, the border will change. that is it... only the border will change color when you comment the .circle.active css out nothing will happen to styling the circle.  //if the index of the item is less than the counter CURRACTIVE then execute
      //transition is also NOT APPLIED TO THE ACTIVE CLASS instead it is applied to the CIRCLE ITSELF
    } else {
      circle.classList.remove('active')
      // if the index is not less than the current active then remove the class of active... the counter currrent active's lowest point will be one done by the if statement above to make sure it doesnt drop and the lowest poitn for the index idx will be zero because that is the first element of the node list.
    }
  })

  const actives = document.querySelectorAll('.active')
  //more than one active element so you need to use querySelectorAll

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%'
  //BLUE PROGRESS BAR BEING STYLED HERE.... we want the bar to go in 3rds... one third two thirds... and thre thirds... issue is there are four buttons so to do the math you jus tneed to minus one and times by 100 and concatenate by adding a '%' sign on the end.
  //TLDR
  //JS DOM VARIABLE .  style . WHATEVER CSS PROPERTY = THEN STYLE IT
  if (currentActive === 1) {
    prev.disabled = true
    //cannot de increment any further.. the prev button GREYED OUT
  } else if (currentActive === circles.length) {
    next.disabled = true
    //cannot incremement any further... the next button GREYED OUT
  } else {
    prev.disabled = false
    next.disabled = false
    //OTHERWISE.... make sure that both buttons work in all cases... disabled is just a setting done in the HTML... it will start at one with previous being disabled... and then by clicking you will remove this setting
  }
}
