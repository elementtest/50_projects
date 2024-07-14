const panels = document.querySelectorAll(".panel");

// k
// panels.forEach((panel) => {
//   panel.addEventListener('click', () => {
//     console.log(123)
//   })
// })
// tests to see that it is working

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    //when you click will invoke function of removing the active class
      panel.classList.toggle('active');


  });
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
