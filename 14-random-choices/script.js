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
})

function createTags(input) {
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim())
  console.log(tags)
}
