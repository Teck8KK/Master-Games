const boxes = document.querySelectorAll('.box');
const modal = document.getElementById('gameModal');
const closeBtn = document.querySelector('.close-btn');

const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalGenres = document.getElementById('modalGenres');
const modalDesc = document.getElementById('modalDesc');

boxes.forEach(box => {
    box.addEventListener('click', () => {
        const title = box.getAttribute('data-title');
        const img = box.getAttribute('data-img');
        const genres = box.getAttribute('data-genres').split(',');
        const desc = box.getAttribute('data-desc');

        modalTitle.textContent = title;
        modalImg.src = img;
        modalDesc.textContent = desc;

        modalGenres.innerHTML = '';
        genres.forEach(genre => {
            const tag = document.createElement('span');
            tag.classList.add('genre-tag');
            tag.textContent = genre.trim();
            modalGenres.appendChild(tag);
        });

        modal.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
