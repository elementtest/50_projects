const tagsEl = document.getElementById('tags')
// ORANGE
// the orange 'choices that are generated by typing, targets ALL of them.
const textarea = document.getElementById('textarea')
// WHITE INPUT
// targets the white input box to input text in order to generate the choices
textarea.focus()
//why does this need focus?
//^^^^ answer::: the javascript loads on the page THEN
// the textarea input white box is IMMEDIATELY FOCUSED
// try it out... if it is unfocused the text area will be yellow
// then focused the color will change to pink
//the focused element is the element that will receive keyboard and similar events by default

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value)
  // just means the stuff that is entered in the box.  use e.target.value to make the stuff that is entered as something that you can work with in JS
  //if you just do e like add event listener keyup e then it will display all the information
  if (e.key === 'Enter') {
    setTimeout((() => {
      e.target.value = 'BTRIPD'
    }, 500)
    /* CLEARS WHITE INPU SPACE */
    /* 
	what is happening here?  
	if the e.key is enter..... so the event and then under the massive event selection in the browser the key is Enter then....
	it will reset the entire white box of the e.target.value.. which is just the white box to empty space 
	two params for the setTimout() function the first being the code
	that is executed and the second being the amount of time to wait before executing in which case is 500 miliseconds 	
	500 miliseconds = 0.5 seconds
	*/

    randomSelect()
  }
})

function createTags(input) {
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim())
  /* above the filter and map method just make it so you dont have extra space in there that is entered ie the first item in the array created by .split if you do 1 space space space wont be ['1   '].*/

  tagsEl.innerHTML = ''
  /* success!!! this just makes the example orange tags of choice 1 choice 2 choice 3 disappear */

  tags.forEach((tag) => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerText = tag
    tagsEl.appendChild(tagEl)
  })
}

function randomSelect() {
  const times = 10
  /* the number of times that it will highlight each orange selection before it stops */

  const interval = setInterval(() => {
    const randomTag = pickRandomTag()
    highlightTag(randomTag)
    setTimeout(() => {
      UnhighlightTag(randomTag)
    }, 100)
  }, 100)

  setTimeout(() => {
    clearInterval(interval)

    setTimeout(() => {
      const randomTag = pickRandomTag()

      highlightTag(randomTag)
    }, 100)
  }, times * 100)
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag')
  /* ORANGE
  Select all orange tags on the bottom and create a node lise 
  */
  return tags[Math.floor(Math.random() * tags.length)]
  /* this selects a random tag from the orange.... returns it as the tags node list followed by the [] index number... this returns a random tag... the math.floor rounds the number down because math.random will give out a decimal.  */
}

function highlightTag(tag) {
  tag.classList.add('highlight')
}

function UnhighlightTag(tag) {
  tag.classList.remove('highlight')
}
