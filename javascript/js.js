const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// const imgs = $$('.box_silde_ads')
// const boxSlider = $('.box_silde_ads')
// const descriptions = $$('.box_left_description-product')
// const directionLeft = $('.box_left-next')
// const directionRight = $('.box_left-prev')
// var currentIndex = 0

// descriptions.forEach((description, index) => {

//     const img = imgs[index]

//     description.onclick = () => {
//         $('.box_left_description-product.active').classList.remove('active')
//         $('.box_silde_ads.ads-active').classList.remove('ads-active')
//         description.classList.add('active')
//         img.classList.add('ads-active')
//     }
// })

// var slideIndex = 1;

// function plusSlides(n) {
//     showSlide(slideIndex += n)
// }

// function currentSlides(n) {
//     showSlide(slideIndex = n)
// }
// function showSlide(n) {
//     var i;
//     var slides = document.getElementsByClassName('box_silde_ads')
//     var boxDescription = document.getElementsByClassName('box_left_description')
//     var descriptions = document.getElementsByClassName('box_left_description-product')
//     if (n > slides.length) {
//         slideIndex = 1
//     }
//     if (n < 1) {
//         slideIndex = slides.length
//     }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = 'none'
//     }
//     for (i = 0; i < descriptions.length; i++) {
//         descriptions[i].className = descriptions[i].className.replace(" active", "")
//     }
//     slides[slideIndex - 1].style.display = "block"
//     descriptions[slideIndex - 1].className += " active"
// }

// overlay
var inputBtn = document.querySelector('.search-input')
var overlay = document.querySelector('.modal')

inputBtn.onclick = () => {
    overlay.style.display = "block"
}

overlay.onclick = () => {
    overlay.style.display = "none"
}

// Banner slide

window.onload = () => {
    const wrapSlider = $('.box_left_wrap_slider')
    const boxSlider = $('.box_left_slider')
    const sliderItems = $$('.box_silde_ads')
    const boxDescription = $('.box_left_description')
    const descriptionItems = $$('.box_left_description-product')
    const nextBtn = $('.box_left-next')
    const prevBtn = $('.box_left-prev')
    const sliderLength = sliderItems.length
    const sliderItemWidth = sliderItems[0].offsetWidth
    const descriptionWidth = descriptionItems[0].offsetWidth
    boxSlider.style.width = `${sliderLength * sliderItemWidth}px`
    let positionX = 0;
    let index = 0;
    let descriptionX = 0;

    nextBtn.onclick = () => {
        handleChangeSlider(1)
    }
    prevBtn.onclick = () => {
        handleChangeSlider(-1)
    }

    [...descriptionItems].forEach((item) => {
        item.onclick = (e) => {
            $('.box_left_description-product.active').classList.remove('active')
            e.target.closest('.box_left_description-product').classList.add('active');
            const sliderIndex = parseInt(e.target.dataset.index);
            index = sliderIndex;
            positionX = -1 * index * sliderItemWidth
            boxSlider.style = `transform: translateX(${positionX}px)`
            descriptionX = descriptionX - descriptionWidth
            if (sliderIndex >= 4) {
                boxDescription.style = `transform: translateX(${descriptionX}px)`
            }
        }
    })

    function handleChangeSlider(direction) {
        if (direction === 1) {
            if (index >= sliderLength - 1) return;
            index++;
            positionX = positionX - sliderItemWidth;
            // if (positionX > -6400) {
            //     boxSlider.style = `transform: translateX(${positionX}px)`
            // } else {
            //     positionX = -5600;
            // }

            boxSlider.style = `transform: translateX(${positionX}px)`
        } else if (direction === -1) {
            if (index <= 0) return;
            index--
            positionX = positionX + sliderItemWidth;
            // if (positionX > 0) {
            //     positionX = 0;
            // } else {
            //     boxSlider.style = `transform: translateX(${positionX}px)`
            // }
            boxSlider.style = `transform: translateX(${positionX}px)`
        }
        $('.box_left_description-product.active').classList.remove('active')
        descriptionItems[index].classList.add('active')
    }
}




