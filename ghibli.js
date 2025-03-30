const images = [
    '2eb3ac41-1eba-48c7-b145-421c6047feb3.png',
    'image3.jpg',
    'insidetrain.png'
];

const ghibli_area = document.getElementById('ghibli_area');

images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = `${image}`; // Update the path to your images
    imgElement.alt = image.split('.')[0]; // Use the image name without extension as alt text
    ghibli_area.appendChild(imgElement);
});
