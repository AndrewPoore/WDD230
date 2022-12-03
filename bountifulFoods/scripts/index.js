// Menu Toggle
function toggleMenu() {
    document.getElementsByClassName('navigation')[0].classList.toggle('responsive');
}

// Last Modification Date
document.querySelector(
    "#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;
