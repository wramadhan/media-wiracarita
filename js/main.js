document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('main').innerHTML = '<p>Memuat Konten....</p>'

  fetch('components/main.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('main').innerHTML = data
    })
    .catch((error) => {
      document.getElementById('main').innerHTML =
        '<p>Gagal memuat konten. Silahkan coba kembali nanti.</p>'
    })
})
