const insert = document.getElementById('insert')
//id of insert targets three boxes the event.key which is the English that we use ie spacebar tab enter etc.  the next one is the event.keyCode which the computer understands ie the escape key has a event.keyCode of 27 and the event.code which is the computer name for it. well a good example of the event.code is the actual thing.  i.e you mapped the caps lock as escape key.  but the event code still remembers that that is capslock NOT escape
//TLDR event.key is what action is perfored and the event.code is the REAL KEY NAME
window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
     <div class="key">
      ${e.key === ' ' ? 'Space' : e.key}
      <small>event.key</small>
	  </div>
      <div class="key">
${e.keyCode}
        <small>event.keyCode</small>
      </div>
      <div class="key">
${e.code}
        <small>event.code</small>
      </div> 
  `
})
