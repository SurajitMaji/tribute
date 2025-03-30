const images = [
    '2eb3ac41-1eba-48c7-b145-421c6047feb3.png',
    'image3.jpg',
    'insidetrain.png',
    'imagefoodfestival.jpg',
   /* 'Web_Photo_Editor.jpg',
    'xbllwt6lpo6tb8t79r0vhrto.png.png',
    'pt22e5fqe5qkdthn3fuvb8vz2.png',
    'dwczfk1hyemnma9td9mi2hdd2.png',
    '9dphad55rl9o60w383p9kqf0.png.png',*/
    'b1a2a0c1-8fc4-4ecb-a093-c0669baec952.png'
];

const ghibli_area = document.getElementById('ghibli_area');

images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = `${image}`; // Update the path to your images
    imgElement.alt = image.split('.')[0]; // Use the image name without extension as alt text
    ghibli_area.appendChild(imgElement);
});
