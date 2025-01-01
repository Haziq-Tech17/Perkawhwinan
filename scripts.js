// scripts.js
document.querySelector('.menu-btn').addEventListener('click', () => {
    const menu = document.querySelector('.menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});

function showContent(sectionId) {
    document.querySelectorAll('.content').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
    document.querySelector('.menu').style.display = 'none';
}
