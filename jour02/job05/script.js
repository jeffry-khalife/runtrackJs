const footer = document.getElementById('footer')

function onScroll() {
	if (window.pageYOffset < 46) {
  	footer.classList.remove('scrolled')
  } else {
  	footer.classList.add('scrolled')
  }
}

window.addEventListener('scroll', onScroll)