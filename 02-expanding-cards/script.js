const panels = document.querySelectorAll('.panel')

// panels.forEach((panel) => {
//   panel.addEventListener('click', () => {
//     console.log(123)
//   })
// })
// tests to see that it is working

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses()
    //when you click will invoke function of removing the active class
    panel.classList.add('active')
  })
})

function removeActiveClasses() {
  //create function that removes the active class from whatever element
  panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}
