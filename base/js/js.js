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

var color = 0;
var colors = ['#f0805b', '#f2cd5c', '#a85bf0',
'#c17bf2', '#f2da7b', '#f27bad', 
'#f29f7b', '#adf27b', '#f01e59'];

function changeColor(){
    if (color < colors.length){
        currentColor = colors[color++];
        localStorage.setItem('currentColor', currentColor);
        currentColor = localStorage.getItem('currentColor');
        var btn = document.getElementsByClassName('uk-button-primary');
        for (let index = 0; index < btn.length; index++) {
            const element = btn[index];
            element.style.backgroundColor = currentColor;           
        }
    }
    else if (color == colors.length){
        color = 0;
        currentColor = colors[color];
        var btn = document.getElementsByClassName('uk-button-primary');
        for (let index = 0; index < btn.length; index++) {
            const element = btn[index];
            element.style.backgroundColor = currentColor;           
        }
    }
}

function currentSettings(){
    currentImageId = localStorage.getItem('currentImage');
    document.getElementById('body').className = currentImageId;
    currentColor = localStorage.getItem('currentColor');
    var btn = document.getElementsByClassName('uk-button-primary');
        for (let index = 0; index < btn.length; index++) {
            const element = btn[index];
            element.style.backgroundColor = currentColor;           
        }
}
