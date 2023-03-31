const labels = document.querySelectorAll('.form-control label')
//this retrieves two strings from the html
// Email
// and Password strings
// and then i think it puts them in a node list.. it isnt an array yet yes that is correct confirmed via console log
labels.forEach((label) => {
  console.log(label)
  label.innerHTML = label.innerText
    //innerHTML will interpret the tags as html... innertext will not do this... so innerHTML will be open to hacking attacks because HTML can be injected into the page.  innertext simplifies it.  without it... the following code will fail because we just want to put a map function on each of the letters
    //this is important, without it the code does not work
    .split('')
    .map(
      (letter, idx) =>
        `<span style ="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    /* think of map as like taking a circle and converting it into a square and this is run on each letter from the foreach method */
    .join('')
})
