import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'
import cross from '../src/img/bi_x-octagon.svg'


import { showImages } from './js/render-functions.js'
import { searchImages } from './js/pixabay-api.js'

const formEl = document.querySelector('.form')
const loaderEl = document.querySelector('.loader')
const listEl = document.querySelector('.gallery')


formEl.addEventListener('submit', (event) => {
    event.preventDefault()

    listEl.innerHTML = ''

    const value = event.currentTarget.image_name.value

    if (value.trim() !== '') {
        loaderEl.classList.remove('is-hidden')
        setTimeout(() => {
            searchImages(value, loaderEl, formEl)
                .then(data => {
                if (data.hits.length === 0) {
                iziToast.error({
                    title: '',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    class: 'popup-message',
                    theme: 'dark',
                    backgroundColor: '#ef4040',
                    messageColor: '#fff',
                    iconUrl: cross,
                    position: 'topRight',
                    pauseOnHover: true,
                    timeout: 3000,
                });   
            }
            
                const images = data.hits.slice(0, 15)
                
                showImages(images, listEl)
            })
        }, 1000)
       }
})