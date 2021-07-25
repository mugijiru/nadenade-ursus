const max = 23
let images = []

// 事前に画像読み込み
window.addEventListener('DOMContentLoaded', function() {
  const imageContainer = document.querySelector('#image-container')
  images = [...Array(max)].map((_, i) => {
    const img = new Image()
    const numStr = `${i+1}`.padStart(3, '0')
    img.src = `./images/ursus-${numStr}.jpg`
    img.classList = ['l-main__image']
    imageContainer.appendChild(img)
    return img
  });

  const loader = document.querySelector('#loader')
  loader.classList = ['c-loader']
});

// ポインタ位置で表示画像を制御
window.addEventListener('pointermove', (event) => {
  const num = parseInt(max * event.clientX / window.innerWidth, 10);
  const img = document.querySelector('#main img')
  img.src = images[num].src
})
