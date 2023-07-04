let time = 3000,
    CurrentImageIndex = 0,
    images = document.querySelectorAll("#slider img")
    max = images.length;

function nextImage() {
  
    images[CurrentImageIndex].classList.remove("selected");

    CurrentImageIndex++

    if (CurrentImageIndex >= max)
        CurrentImageIndex = 0

    images[CurrentImageIndex].classList.add("selected")
      
}

function start() {
    console.log("O load foi carregado")
    setInterval(() => {
        console.log("função rodada")
        //Troca de imagem
    nextImage()
    }, time)
}

window.addEventListener("load", start)