const slideImages = document.querySelectorAll('.left__slides_image');
const btnCart = document.querySelector('.right__cart-add')

slideImages.forEach(btn => {
    btn.addEventListener('click', e => {
        const id = btn.dataset.id
        const bgImage = document.querySelector('.left__image-bg')
        bgImage.innerHTML = `
            <img src="./images/image-product-${id}.jpg" alt="product-${id}">
        `;
    })
})

btnCart.addEventListener('click', e => {
    console.log('clicked');
})