document.addEventListener("DOMContentLoaded", () => {
    const navHam = document.querySelector('.navHam');
    const navBar = document.querySelector('.navBar');
  
    navHam.addEventListener('click', () => {
      navHam.classList.toggle("active");
      navBar.classList.toggle("active");
    });
  });