const labels = document.querySelectorAll('.form-control label')

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split('')
    .map(
      (letter, idx) =>
        `<span style ="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    /* think of map as like taking a circle and converting it into a square and this is run on each letter from the foreach method */
    .join('')
})
