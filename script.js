const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const textBox = document.getElementById('text-box');

const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');

function imageMode(mode = 'light') {
    image1.src = `images/image1_${mode}.svg`
    image2.src = `images/image2_${mode}.svg`
    image3.src = `images/image3_${mode}.svg`
}

function darkModeStyles() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');

    imageMode('dark');
}

function lightModeStyles() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');

    imageMode();
}

function switchTheme (event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkModeStyles();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightModeStyles();
    }
}

toggleSwitch.addEventListener('change', switchTheme);

const currentTheme = localStorage.getItem('theme');

if (currentTheme && currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', currentTheme);
    darkModeStyles();
    toggleSwitch.checked = true;
} else if (currentTheme && currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', currentTheme);
    lightModeStyles();
}
