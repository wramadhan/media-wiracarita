document.addEventListener('DOMContentLoaded', () => {
  const newsElements = document.getElementsByClassName('news')

  if (newsElements.length > 0) {
    newsElements[0].innerHTML = '<p>Memuat Berita....</p>'
  }

  fetch('components/news.html')
    .then((response) => response.text())
    .then((data) => {
      if (newsElements.length > 0) {
        newsElements[0].innerHTML = data
      }
    })
    .catch((error) => {
      if (newsElements.length > 0) {
        newsElements[0].innerHTML =
          '<p>Gagal memuat berita. Silahkan coba kembali nanti.</p>'
      }
    })
})
