var imageInput = document.querySelector(".input_file");
var imageLabel = document.querySelector(".quotes_image");

var uploadedImage = document.querySelector(".uploaded_image");
var imageBox = document.querySelector("#image_box");

imageInput.addEventListener("change", function(event){

    imageLabel.innerHTML = "\"" +event.target.value+ "\"";
    uploadedImage.src = URL.createObjectURL(event.target.files[0]);
})