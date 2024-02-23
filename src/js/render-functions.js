import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css'


export function showImages(images, gallery) {
    gallery.innerHTML = images.map(img =>
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
    
    const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    });
    lightbox.refresh()
}






// 1. Імпортувати умову для пошуку з запитів
// 2. Додати до списку галерею зображень
// 3. Очищати галерею перед новим запитом