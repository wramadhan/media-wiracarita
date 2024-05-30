document.addEventListener('DOMContentLoaded', () => {
  fetch('components/header.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('header').innerHTML = data
      updateTime()
      setInterval(updateTime, 6000)

      handleFacilityElements()
      handleToggleShowNav()
      window.addEventListener('resize', () => {
        handleFacilityElements()
        handleToggleShowNav()
      })
    })
})

function updateTime() {
  const timeElement = document.getElementById('header-time')
  const now = new Date()
  const hours = now.getHours().toString().padStart(2, '0')
  const minutes = now.getMinutes().toString().padStart(2, '0')
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
  const months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ]
  const dayName = days[now.getDay()]
  const day = now.getDate()
  const month = months[now.getMonth()]
  const year = now.getFullYear()

  const formattedTime = `${hours}:${minutes}`
  const formattedDate = `${dayName}, ${day} ${month} ${year}`

  if (timeElement) {
    timeElement.innerHTML = `${formattedTime}&nbsp;&nbsp;&nbsp;${formattedDate}`
  }
}

function handleFacilityElements() {
  const facilities = document.querySelectorAll('.header__facility')
  const searchWide = document.querySelector('.header__searchWide')

  if (window.innerWidth >= 700) {
    facilities.forEach((facility) => {
      facility.style.display = 'none'
    })
    if (searchWide) {
      searchWide.style.display = ''
    }
  } else {
    facilities.forEach((facility) => {
      facility.style.display = ''
    })
    if (searchWide) {
      searchWide.style.display = 'none'
    }
  }
}

function handleToggleShowNav() {
  const getNavList = document.querySelector('.header__listNav')
  const getBurgerIcon = document.querySelector('.header__hamburger')

  getBurgerIcon.addEventListener('click', () => {
    if (window.innerWidth < 700) {
      getNavList.classList.toggle('show')
    }
  })

  if (window.innerWidth >= 700) {
    getNavList.classList.remove('show')
  }
}
