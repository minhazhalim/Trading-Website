const slide = document.querySelectorAll('.reviews .flex .slides-container .slide');
const monthButton = document.querySelector('.pricing .toggle-buttons .month-button');
const yearButton = document.querySelector('.pricing .toggle-buttons .year-button');
const month = document.querySelectorAll('.pricing .box-container .box .month');
const year = document.querySelectorAll('.pricing .box-container .box .year');
let index = 0;
function next(){
     slide[index].classList.remove('active');
     index = (index + 1) % slide.length;
     slide[index].classList.add('active');
}
function previous(){
     slide[index].classList.remove('active');
     index = (index - 1 + slide.length) % slide.length;
     slide[index].classList.add('active');
}
yearButton.onclick = () => {
     monthButton.classList.remove('active');
     yearButton.classList.add('active');
     month.forEach(months => {months.style.display = 'none'});
     year.forEach(years => {years.style.display = 'block'});
};
monthButton.onclick = () => {
     monthButton.classList.add('active');
     yearButton.classList.remove('active');
     month.forEach(months => {months.style.display = 'block'});
     year.forEach(years => {years.style.display = 'none'});
};