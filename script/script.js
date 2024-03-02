function hideAllElements() {
    const categories = document.querySelector('.categories');
    const homepage = document.querySelector('.homepage');
    const container = document.querySelector('.container');
    const h2 = document.querySelector('h2');
    const backButton = document.getElementById('backButton');

    categories.style.display = 'none';
    homepage.style.display = 'none';
    container.style.display = 'none';
    h2.style.display = 'none';

}function goToHome() {
    window.location.href = "http://127.0.0.1:5500/index.html";
}

function hideCategoryImages(category) {
    const imageContainer = document.getElementById(`${category}-image`);
    if (imageContainer) {
        imageContainer.style.display = 'none';
    }
}

function showModal(text) {
    const modal = document.querySelector('.modal');
    const modalTextElement = document.querySelector('.modal-text');

    modalTextElement.innerHTML = text;

    modal.style.display = 'block';

    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });
}

function showCategory(category) {
    hideAllElements();
    hideCategoryImages(category);

    const imageContainer = document.getElementById(`${category}-image`);
    if (imageContainer) {
        imageContainer.style.display = 'block';

        const modal = document.querySelector('.modal');

        const modalText = imageContainer.querySelectorAll('.text-img.modal-text-trigger');
        modalText.forEach(textElement => {
            textElement.addEventListener('click', function () {
                const text = textElement.textContent;
                showModal(text);
            });
        });

        const images = imageContainer.querySelectorAll('.modal-trigger');
        images.forEach(img => {
            img.addEventListener('click', function () {
                const text = img.getAttribute('data-text');
                showModal(text);
            });
        });
    }
}

window.addEventListener('click', function (event) {
    const modal = document.querySelector('.modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
