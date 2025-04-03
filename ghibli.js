const images = [
    '2eb3ac41-1eba-48c7-b145-421c6047feb3.png',
    '5504a716-9db0-42d5-bbb1-9d266bdaac62.png',
    'insidetrain.png',
    'imagefoodfestival.jpg',
   // 'b1a2a0c1-8fc4-4ecb-a093-c0669baec952.png',
    //'imagegope.jpg',
    // 'f5d480ac-245f-4ded-9d3c-2131463ca04e.png',
    '15860be5-9fab-4364-9856-94f82925e60a.jpg',
    '588b9af3-d01d-48d0-9270-746c8aa62f9e2.png',
    '24627e09-3e33-4774-a525-02373652325c.png',
    '636ae5d7-c90b-41a2-a453-b1f1f3e34e10.png',
    'b6e3ff3b-cd7a-4258-8d34-e32cbfd0dfee.png',
    'bf5c22e0-2acd-4026-84de-b04e9401a1c8.png',
    '7951a4f3-0ca8-48ca-b67c-95196e79ca31.png',
    '1c176a63-89a8-4952-94d4-ce1e5c100404.png',
    'afd9ea48-dc2c-4efe-b162-617bca80b919.png',
    'a3ba1cdf-0b2b-433d-a644-84d894808044.png',
    'af185d83-dadc-4f31-8e38-a21ae2c1d293.png',
    '1f3794e8-45c7-4226-86cc-21638ebc3470.png',
    '760aab04-1709-4928-ab5f-f75c238f9fdb.png',
    'a9c3e2df-53cb-4bcc-b14e-1640470e88c3.png',
    '47ad1bf7-b65a-40d0-9e95-7dd9cfe5ed72.png'
];

const ghibli_area = document.getElementById('ghibli_area');

images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = `${image}`; // Update the path to your images
    imgElement.alt = image.split('.')[0]; // Use the image name without extension as alt text
    ghibli_area.appendChild(imgElement);
});
