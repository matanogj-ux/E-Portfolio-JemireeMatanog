// JavaScript to handle page switching and default to home
const sections = document.querySelectorAll('.page');
const links = document.querySelectorAll('.nav-links a');

function showSection(hash) {
  sections.forEach(sec => sec.classList.remove('active'));
  const target = document.querySelector(hash);
  if(target) target.classList.add('active');
}

// Set default section to home if no hash
if(!window.location.hash) {
  showSection('#home');
} else {
  showSection(window.location.hash);
}

// Add click event to navbar links
links.forEach(link => {
  link.addEventListener('click', (e)=>{
    const hash = e.target.getAttribute('href');
    showSection(hash);
  });
});