document.addEventListener('DOMContentLoaded', () => {
  fetch('components/header.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('header').innerHTML = data
    })
})
document.addEventListener('DOMContentLoaded', () => {
  fetch('components/header.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('header').innerHTML = data
    })
})
