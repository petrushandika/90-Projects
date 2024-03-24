const userText = document.getElementById('input-text');
const characters = document.getElementById('char');
const words = document.getElementById('words');

userText.addEventListener('input', () => {
    characters.innerHTML = userText.value.length + ' Character';
    words.innerHTML = userText.value.trim().split(' ').length + ' Words';
});