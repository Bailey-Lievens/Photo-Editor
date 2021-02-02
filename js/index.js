var imageInput = document.querySelector(".input_file");
var imageLabel = document.querySelector(".quotes_image");

var uploadedImage = document.querySelector(".uploaded_image");
var imageBox = document.querySelector("#image_box");

var menuBox = document.querySelector("#menu_box");

var brightness_slider = document.querySelector("#brightness_slider");

imageInput.addEventListener("change", function(event){

    imageLabel.innerHTML = "\"" +event.target.value+ "\"";
    uploadedImage.src = URL.createObjectURL(event.target.files[0]);
    menuBox.style.display = "inline";
})

brightness_slider.addEventListener("input", function(e){
    var sliderValue;

    sliderValue = brightness_slider.value;

    uploadedImage.style.filter = "brightness("+sliderValue+"%";
})