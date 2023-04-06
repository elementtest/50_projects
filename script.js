const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach((btripD) => {
  const btn = document.createElement('button')
  btn.classList.add('btn')

  btn.innerText = btripD

  document.getElementById('buttons').appendChild(btn)
})
