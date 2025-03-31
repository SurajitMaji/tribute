const images = [
    '2eb3ac41-1eba-48c7-b145-421c6047feb3.png',
    '5504a716-9db0-42d5-bbb1-9d266bdaac62.png',
    'insidetrain.png',
    'imagefoodfestival.jpg',
    'b1a2a0c1-8fc4-4ecb-a093-c0669baec952.png',
    'imagegope.jpg',
    // 'f5d480ac-245f-4ded-9d3c-2131463ca04e.png',
    '15860be5-9fab-4364-9856-94f82925e60a.jpg'
];

const ghibli_area = document.getElementById('ghibli_area');

images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = `${image}`; // Update the path to your images
    imgElement.alt = image.split('.')[0]; // Use the image name without extension as alt text
    ghibli_area.appendChild(imgElement);
});
