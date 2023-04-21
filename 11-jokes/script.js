const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

generateJoke()

function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
      /* accept is the key and application/json is the value
	  all of this is an object the headers: {INSERT STUFF} is just one big object */
    },
  }
  fetch('https://icanhazdadjoke.com/', config)
    .then((res) => res.json())
    .then((date) => console.log(date))
}
