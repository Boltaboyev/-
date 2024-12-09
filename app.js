let loader = document.querySelector(".loader"),
    body = document.querySelector("body")
window.addEventListener("load", () => {
    loader.classList.add("loader_active")
    let interval = setInterval(removeLoader, 200)

    function removeLoader() {
        body.removeChild(loader)
        clearInterval(interval)
    }

    var swiper = new Swiper(".mySwiper", {
        pagination: {
            el: ".swiper-pagination",
        },
        loop: true,
        autoplay: {
            delay: 3000,
        },
    })

    var swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            550: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
        loop: true,
        autoplay: {
            delay: 3000,
        },
    })

    var swiper3 = new Swiper(".mySwiper3", {
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
            430: {
                slidesPerView: 2,
                spaceBetween: 20,
            },

            650: {
                slidesPerView: 3,
                spaceBetween: 20,
            },

            900: {
                slidesPerView: 4,
                spaceBetween: 20,
            },

            1100: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
        },
        loop: true,
        autoplay: {
            delay: 3000,
        },
    })
})
