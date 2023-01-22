

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


  function mudouTamanho(){

    const itens = document.getElementById('itens')
    if(innerWidth>= 1000){
        itens.style.display ='block'
    }else{
        itens.style.display = 'none'
    }

  }

  function clickMenu(){
    if(  itens.style.display =='block'){
        itens.style.display ='none'
      }else{
        itens.style.display ='block'
      }
  }