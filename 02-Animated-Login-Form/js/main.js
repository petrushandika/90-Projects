document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.username, .password');
  
    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        const newWidth = Math.min((input.value.length + 1) * 10, 200);
        input.style.width = newWidth + 'px';
        });
    });
});