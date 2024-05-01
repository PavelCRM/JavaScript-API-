var images = ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg']; // Замените пути к изображениям на свои
var currentImageIndex = 0;
var imageContainer = document.getElementById('imageContainer');
var navigation = document.getElementById('navigation');
var prevButton = document.getElementById('prevButton');
var nextButton = document.getElementById('nextButton');

// Функция для отображения текущего изображения
function displayImage() {
    imageContainer.innerHTML = '<img src="' + images[currentImageIndex] + '" alt="image">';
}

// Функция для обновления навигационных точек
function updateNavigation() {
    navigation.innerHTML = '';
    images.forEach(function (_, index) {
        var dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === currentImageIndex) {
            dot.classList.add('active');
        }
        dot.addEventListener('click', function () {
            currentImageIndex = index;
            displayImage();
            updateNavigation();
        });
        navigation.appendChild(dot);
    });
}

// Инициализация
displayImage();
updateNavigation();

// Обработчики для кнопок переключения изображений
prevButton.addEventListener('click', function () {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    displayImage();
    updateNavigation();
});

nextButton.addEventListener('click', function () {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    displayImage();
    updateNavigation();
});
