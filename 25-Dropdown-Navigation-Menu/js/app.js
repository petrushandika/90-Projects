const dropButton = document.querySelector('#dropdown');
dropButton.addEventListener('click', () => {
    const open = document.querySelector('.toggle');
    open.classList.toggle('active');
});