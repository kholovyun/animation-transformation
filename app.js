window.addEventListener('scroll', function () {
    let headChange = document.querySelector('.head__block')
    headChange.classList.toggle('scroll__change', window.scrollY > 0)
})

