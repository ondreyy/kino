window.onload = function () {
    var images = ['obrazky/skin.jpg','obrazky/skin2.jpg', 'obrazky/skin3.jpg', 'obrazky/skin4.jpg', 'obrazky/skin5.jpg', 'obrazky/skin6.jpg', 'obrazky/skin7.jpg'];
    var image = images[Math.floor(Math.random() * images.length)];
    document.getElementsByTagName('body')[0].style.backgroundImage = "url('" + image + "')";
}