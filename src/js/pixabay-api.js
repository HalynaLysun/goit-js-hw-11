// HTTP запити

// Після додавання нових елементів до списку зображень на екземплярі SimpleLightbox викликається метод refresh()
// При кліку на маленьке зображення в галереї відкривається його збільшена версія у модальному вікні з використанням бібліотеки SimpleLightbox
// Елементи на сторінці стилізовані згідно з макетом(або власні стилі)



export function searchImages(value, loader, form) {
            const URI = 'https://pixabay.com/api/'
            const PARAMS = new URLSearchParams({
                key: '42515030-f0931f035bd772c998b8c15c1',
                q: value,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true
            })
    const LINK = `${URI}?${PARAMS}`
            
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
                    loader.classList.add('is-hidden')
                    form.reset()
                })
        }

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
