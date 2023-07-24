// RESPONSIVE - COLLAPSIBLE TEXT TO BUTTON
function autoResize() {
    const expandText = document.getElementById('expandText');
    const readMoreButton = document.getElementById('readMoreButton');
    const iconClass = 'fa-brands fa-readme';

    if (window.matchMedia('(max-width: 575.98px)').matches || window.matchMedia('(max-width: 768px)').matches) {
        expandText.classList.remove('show');
        readMoreButton.classList.remove('d-none');
        readMoreButton.innerHTML = 'Read Me';
    } else {
        expandText.classList.add('show');
        readMoreButton.classList.add('d-none');
    }
}
autoResize();
window.addEventListener('resize', autoResize);