const panels = document.querySelectorAll(".panel");

// panels.forEach((panel) => {
//   panel.addEventListener('click', () => {
//     console.log(123)
//   })
// })
// tests to see that it is working

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    panel.classList.toggle('active')
    //when you click will invoke function of removing the active class
  });
});


