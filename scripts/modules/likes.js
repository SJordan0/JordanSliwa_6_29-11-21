//___DOM___//
const totalLikesNb = document.querySelector('.infos_nombre_likes')

//___Ajout ou retrait de like au click___//
function addLikes() {
  if (document.addEventListener) {
    let target = window.event.target
    let heart
    if (target.tagName != 'A') {
      heart = target.parentNode
    } else {
      heart = target
    }
    let idHeart = heart.getAttribute('id')
    let idLikes = idHeart.replace('heart', 'likes')
    let number = document.getElementById(idLikes)
    let numberOfLikes = parseInt(number.textContent, 10)
    let totalLikes = parseInt(totalLikesNb.textContent, 10)
    let icone = heart.firstChild
    if ( heart.classList.contains('heart') == true ) {
      heart.classList.toggle('heart')
      numberOfLikes++
      totalLikes++
      number.innerHTML = numberOfLikes
      totalLikesNb.innerHTML = totalLikes
      icone.style.color = '#d3573c'
      number.style.color = '#d3573c'
    } else {
      heart.classList.toggle('heart')
      numberOfLikes--
      totalLikes--
      number.innerHTML = numberOfLikes
      totalLikesNb.innerHTML = totalLikes
      icone.style.color = '#901c1c'
      number.style.color = '#901c1c'

    }
  }
}

export { addLikes }