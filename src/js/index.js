

    const botaoTrailer = document.querySelector('.botao-trailer')
    const modal = document.querySelector('.modal')
    const botaoFecharModal = document.querySelector('.fechar-modal')
    const video = document.getElementById("video")
    const linkVideo = video.src;
    
   
    function alternarModal(){
        modal.classList.toggle("aberto")

    }

   

    botaoTrailer.addEventListener("click", () => {
        alternarModal()
    // modal.classList.add("aberto")
     video.setAttribute("src",linkVideo)
    })
    
  botaoFecharModal.addEventListener('click' , () => {
    alternarModal()
   //modal.classList.toggle("aberto")
   video.setAttribute("src","")
  // modal.remove(fecharvideo)
  })

