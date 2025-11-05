// Mood Switch Script
const coolBtn = document.getElementById('cool');
const cuteBtn = document.getElementById('cute');
const hackerBtn = document.getElementById('hacker');

coolBtn.addEventListener('click', () => {
    document.body.className = 'cool-mode';
});

cuteBtn.addEventListener('click', () => {
    document.body.className = 'cute-mode';
});

hackerBtn.addEventListener('click', () => {
    document.body.className = 'hacker-mode';
});
