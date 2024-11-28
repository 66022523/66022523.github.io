const aboutAge = document.getElementById("about-age");
const birthYear = 2005;
const currentYear = new Date().getFullYear();
const currentAge = currentYear - birthYear;

aboutAge.textContent = currentAge;
