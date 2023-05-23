const jokeEl = document.getElementById('joke')
//box of the text of the actual joke
const jokeBtn = document.getElementById('jokeBtn')
//button user clicks to generate another joke
jokeBtn.addEventListener('click', generateJoke)
//add event listener to the generate joke button
generateJoke()
//generate joke is called if you remove it what happens
//USING ASYNC/AWAIT
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch('https://icanhazdadjoke.com', config)

  const data = await res.json()

  jokeEl.innerHTML = data.joke
}

/* 
USING .then()
function generateJoke() {
	const config = {
		headers: {
			Accept: 'application/json',
		},
	}

	fetch('https://icanhazdadjoke.com', config)
	.then((rez) => res.json())
	.then((data) => {
		jokeEl.innerHTML = data.joke
	})
}

*/
