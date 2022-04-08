const btn = document.querySelector('.button');
const cat = document.querySelector('.cat');

btn.addEventListener('click', () => {
    cat.style.display = 'block';
	btn.textContent = "it's a cat :з";
});
