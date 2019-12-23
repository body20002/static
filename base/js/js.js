var image = 0;
imageFiles = parseInt(imageFiles);

function changeBGImage(){
    if (image < imageFiles){
        currentImageId = 'bg' + [++image];
        localStorage.setItem('currentImage', currentImageId);
        currentImageId = localStorage.getItem('currentImage');
        document.getElementById('body').className = currentImageId;
    }
    else if (image == imageFiles){
        image = 0;
        currentImageId = 'bg' + [++image];
        document.getElementById('body').className = currentImageId;
    }
}

function currentSettings(){
    currentImageId = localStorage.getItem('currentImage');
    document.getElementById('body').className = currentImageId;
}