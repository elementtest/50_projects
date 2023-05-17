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
