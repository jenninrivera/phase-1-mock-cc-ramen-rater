// write your code here
const ramenMenu = document.getElementById('ramen-menu')

fetch('http://localhost:3000/ramens')
.then(response => response.json())
.then(ramens => {
    displayRamenDetails(ramens[0])
    ramens.forEach(ramen => {
        addRamensImageToMenu(ramen)
    })
})

function addRamensImageToMenu(ramen) {
    const ramenImage = document.createElement('img')
    ramenImage.src = ramen.image
    ramenMenu.appendChild(ramenImage)
    ramenImage.addEventListener('click',() => {
        displayRamenDetails(ramen)
    })
}

function displayRamenDetails(ramen) {
    const ramenName = document.querySelector('.name')
    ramenName.textContent = ramen.name
    const ramenRestaurant = document.querySelector('.restaurant')
    ramenRestaurant.textContent = ramen.restaurant
    const ramenImage = document.querySelector('.detail-image')
    ramenImage.src = ramen.image
    const ratings = document.getElementById('rating-display')
    ratings.textContent = parseInt(ramen.rating)
    const ramenComments = document.getElementById('comment-display')
    ramenComments.textContent = ramen.comment
}

const ramenForm = document.getElementById('new-ramen')
ramenForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const newRamenName = document.getElementById('new-name')
    const newRamenRestaurant = document.getElementById('new-restaurant')
    const newRamenImage = document.getElementById('new-image')
    const newRamenRating = document.getElementById('new-rating')
    const newRamenComment = document.getElementById('new-comment')
    
    
    const newRamen = {
        name: newRamenName.value,
        restaurant: newRamenRestaurant.value,
        image: newRamenImage.value,
        rating: newRamenRating.value,
        comment: newRamenComment.value
    }
    addRamensImageToMenu(newRamen)
    
})
