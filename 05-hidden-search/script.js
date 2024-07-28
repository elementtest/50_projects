const search = document.querySelector('.search');
console.log(search);
const button = document.querySelector('.btn');
console.log(button);
const input = document.querySelector(('.input'))
console.log(input);

button.addEventListener('click', () => {
    search.classList.toggle('active');
});
