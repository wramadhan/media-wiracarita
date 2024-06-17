document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('footer').innerHTML = '<p>Memuat Footer....</p>'

  fetch('components/footer.html')
    .then((response) => response.text())
    .then((data) => {
      console.log(
        'The Media Wiracarita website is the creative output of Wahyu Ramadhan in the year 2024'
      )
      console.log('Contact us : wahyuramadhan0549@gmail.com')
      document.getElementById('footer').innerHTML = data
    })
    .catch((error) => {
      document.getElementById('footer').innerHTML =
        '<p>Gagal memuat konten. Silahkan coba kembali nanti.</p>'
    })
})
