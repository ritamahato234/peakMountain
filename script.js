// Highlight active nav link
document.querySelectorAll('nav ul li a').forEach(link => {
  if (link.href === location.href) link.classList.add('active');
});

// Mountain search filter (used on mountains.html)
function filterCards() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  document.querySelectorAll('.card').forEach(card => {
    const name = card.querySelector('h3').textContent.toLowerCase();
    card.style.display = name.includes(query) ? 'block' : 'none';
  });
}
