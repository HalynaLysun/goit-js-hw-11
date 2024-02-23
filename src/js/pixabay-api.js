// HTTP запити

// Після додавання нових елементів до списку зображень на екземплярі SimpleLightbox викликається метод refresh()
// При кліку на маленьке зображення в галереї відкривається його збільшена версія у модальному вікні з використанням бібліотеки SimpleLightbox
// Елементи на сторінці стилізовані згідно з макетом(або власні стилі)

import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'
import cross from '../img/bi_x-octagon.svg'


const formEl = document.querySelector('.form')
const loaderEl = document.querySelector('.loader')
const listEl = document.querySelector('.gallery')


formEl.addEventListener('submit', (event) => {
    event.preventDefault()

    listEl.innerHTML = ''

    loaderEl.classList.remove('is-hidden')

        const value = event.currentTarget.image_name.value
    if (value.trim() !== '') {
            const URI = 'https://pixabay.com/api/'
            const PARAMS = new URLSearchParams({
                key: '42515030-f0931f035bd772c998b8c15c1',
                q: value,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true
            })
            const LINK = `${URI}?${PARAMS}`
            
        function searchImages() {
            return fetch (LINK)
                .then(response => {
                if (!response.ok) {
                    throw new Error('Error!')
                    }

                return response.json()
                })
                .catch(error => {
                    alert('Error while searching images!')
                })
                .finally(() => {
                    loaderEl.classList.add('is-hidden')
                    formEl.reset()
                })
        }

        setTimeout(() => {
            searchImages().then(data => {
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

            listEl.innerHTML = images.map(img =>
                `<li>
                <a href="${img.largeImageURL}"><img src="${img.webformatURL}" alt="${img.tags}"></a>
                <ul>
                    <li>
                        <h>Likes</h>
                        <p>${img.likes}</p>
                    </li>
                    <li>
                        <h>Views</h>
                        <p>${img.views}</p>
                    </li>                    
                    <li>
                        <h>Comments</h>
                        <p>${img.comments}</p>
                    </li>                    
                    <li>
                        <h>Downloads</h>
                        <p>${img.downloads}</p>
                    </li>
                </ul>
                </li>`).join('')
            })
        }, 2000)
       }
})

// + 1. Повісити слухача на форму з подією сабміт
// + 2. додати перевірку вмісту текстового поля на наявність порожнього рядка
// + 3. перед виконанням запиту Встановити Завантажувач
// + 4. якщо рядок не пустий, прописати HTTP - запит із цим пошуковим рядком
// + 5. в HTTP прописати параметри
// key — твій унікальний ключ доступу до API.
// q — слово для пошуку. Те, що буде вводити користувач.
// image_type — тип зображення. Потрібні тільки фотографії, тому постав значення photo.
// orientation — орієнтація фотографії. Постав значення horizontal.
//     safesearch — фільтр за віком.Постав значення true.
// + 7. Очищати форму

// + 6.Якщо бекенд повертає порожній масив, повідомлення через біблотеку з текстом "Sorry, there are no images matching your search query. Please try again!"
