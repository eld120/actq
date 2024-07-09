

const navActive = document.querySelector(".navbar-nav")
const pathName = window.location.pathname
const navLinks = document.querySelectorAll('.nav-link')

const paths = {
    "/services/": 'Services',
    "/calculators/": 'Financial Calculators',
    "/about/": 'About Us',
    "/": 'Home'
}

document.addEventListener('DOMContentLoaded', () => {
    
    navLinks.forEach(element => {
        
        if (element.firstElementChild.innerHTML === paths[pathName]) {
            element.ariaCurrent = 'page'
            element.classList.add("active")
        } else {
            element.ariaCurrent = ''
            element.classList.remove("active")

        }
    });
})