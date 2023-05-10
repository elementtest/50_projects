const toggles = document.querySelectorAll('.faq-toggle')
//selects the down arrow and x next to each joke to reveal the punch line
toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active')
  })
})
