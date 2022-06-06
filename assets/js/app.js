const inputImg = document.querySelector('#img')
var img = document.querySelector('img');

inputImg.addEventListener('change', (e) => {

    let file = e.target.files[0]

    if (!file) return

    img.src = URL.createObjectURL(file)

    console.log(img);

    document.querySelector('.preview').appendChild(img)
})
