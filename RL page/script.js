function toggleVideo() {
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('video');
    video.pause();
    trailer.classList.toggle('active');
      
}

function changeBg(bg, title) {
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');
    banner.Style.background = `url("${bg}")`;
    banner.Style.backgroundsize = 'cover';
    banner.Style.backgroundPosition = 'center';


    contents.forEach(content => {
        content.classList.remover('active');
        if (content.classList.contains(title)) {
            content.classList.add('active');
        }
    })
}