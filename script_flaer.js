document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".carousel-wrapper");
    const slides = document.querySelectorAll(".carousel-slide");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
  
    let currentIndex = 0;
  
    function updateCarousel() {
      wrapper.style.transform = `translateX(${-currentIndex * 100}%)`;
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel();
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateCarousel();
    }
  
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
  
    setInterval(nextSlide, 300000);
  });
  

  

  function showImage(selectedImage) {
    const images = document.querySelectorAll('.image-container img');
    images.forEach((image, index) => {
      if (index + 1 === selectedImage) {
        image.parentNode.classList.add('selected');
      } else {
        image.parentNode.classList.remove('selected');
      }
    });
  }



  document.addEventListener('DOMContentLoaded', function() {
    var linksMenu = document.querySelectorAll('nav a');

    linksMenu.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            var alvo = this.getAttribute('href').substring(1);
            var secaoAlvo = document.getElementById(alvo);
            
            if (secaoAlvo) {
                var posicao = secaoAlvo.getBoundingClientRect().top + window.pageYOffset;

                window.scrollTo({
                    top: posicao,
                    behavior: 'smooth'
                });
            }
        });
    });
});



