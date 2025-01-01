// scripts.js
document.querySelector('.menu-btn').addEventListener('click', () => {
    const menu = document.querySelector('.menu');
    console.log(menu); // Log the menu element to ensure it's found
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});

function showContent(sectionId) {
    console.log(sectionId); // Log the sectionId to ensure it's correct
    document.querySelectorAll('.content').forEach(section => {
        console.log(section); // Log each section to ensure they are found
        section.style.display = 'none';
    });
    const section = document.getElementById(sectionId);
    console.log(section); // Log the specific section to ensure it's found
    if (section) {
        section.style.display = 'block';
    }
    const menu = document.querySelector('.menu');
    if (menu) {
        menu.style.display = 'none';
    }
}
