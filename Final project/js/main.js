// *add class navbarDark on navbar scroll* \\
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbar-dark');
        header.classList.add('bg-dark');
        header.classList.remove('navbar-light');
        header.classList.remove('bg-light');
        
    }
    else {
        header.classList.remove('navbar-dark');
        header.classList.remove('bg-dark');
        header.classList.add('navbar-light');
        header.classList.add('bg-light');
    }
}
// *collapse navbar after click on small devices* \\
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})

