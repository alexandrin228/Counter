let count = 0;
const countSpan = document.getElementById('count');

function updateCounter() {
    countSpan.textContent = count;
    if (count < 0) {
        countSpan.style.color = 'red';
    } else if (count > 0) {
        countSpan.style.color = 'green';
    } else {
        countSpan.style.color = 'black';
    }
}

document.getElementById('increment').addEventListener('click', function() {
    count++;
    updateCounter();
});

document.getElementById('decrement').addEventListener('click', function() {
    count--;
    updateCounter();
});

document.getElementById('reset').addEventListener('click', function() {
    count = 0;
    updateCounter();
});
