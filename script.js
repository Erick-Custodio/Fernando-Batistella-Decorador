// ============ GALERIA DE FOTOS (LIGHTBOX) ============
(function () {
  var galleries = {
    classicas: {
      title: "Decorações Clássicas",
      images: [
        "img/classica/classica-01.jpeg",
        "img/classica/classica-02.jpeg",
        "img/classica/classica-03.jpeg",
        "img/classica/classica-04.jpeg",
        "img/classica/classica-05.jpeg",
        "img/classica/classica-06.jpeg",
        "img/classica/classica-07.jpeg",
        "img/classica/classica-08.jpeg",
        "img/classica/classica-09.jpeg",
        "img/classica/classica-10.jpeg",
        "img/classica/classica-11.jpeg",
        "img/classica/classica-12.jpeg",
        "img/classica/classica-13.jpeg",
        "img/classica/classica-14.jpeg",
        "img/classica/classica-15.jpeg",
        "img/classica/classica-16.jpeg",
        "img/classica/classica-17.jpeg",
        "img/classica/classica-18.jpeg",
        "img/classica/classica-19.jpeg",
        "img/classica/classica-20.jpeg",
        "img/classica/classica-21.jpeg",
        "img/classica/classica-22.jpeg",
        "img/classica/classica-23.jpeg",
        "img/classica/classica-24.jpeg",
        "img/classica/classica-25.jpeg",
        "img/classica/classica-26.jpeg"
      ]
    },
    contemporaneas: {
      title: "Decorações Contemporâneas",
      images: [
        "img/contemporanea/contemporanea-01.jpeg",
        "img/contemporanea/contemporanea-02.jpeg",
        "img/contemporanea/contemporanea-03.jpeg",
        "img/contemporanea/contemporanea-04.jpeg",
        "img/contemporanea/contemporanea-05.jpeg",
        "img/contemporanea/contemporanea-06.jpeg",
        "img/contemporanea/contemporanea-07.jpeg",
        "img/contemporanea/contemporanea-08.jpeg",
        "img/contemporanea/contemporanea-09.jpeg",
        "img/contemporanea/contemporanea-10.jpeg",
        "img/contemporanea/contemporanea-11.jpeg",
        "img/contemporanea/contemporanea-12.jpeg",
        "img/contemporanea/contemporanea-13.jpeg",
        "img/contemporanea/contemporanea-14.jpeg",
        "img/contemporanea/contemporanea-15.jpeg",
        "img/contemporanea/contemporanea-16.jpeg",
        "img/contemporanea/contemporanea-17.jpeg",
        "img/contemporanea/contemporanea-18.jpeg",
        "img/contemporanea/contemporanea-19.jpeg",
        "img/contemporanea/contemporanea-20.jpeg",
        "img/contemporanea/contemporanea-21.jpeg",
        "img/contemporanea/contemporanea-22.jpeg",
        "img/contemporanea/contemporanea-23.jpeg",
      ]
    },

    debutante: {
      title: "Decorações Debutante",
      images: [
        "img/debutante/debutante-01.jpeg",
        "img/debutante/debutante-02.jpeg",
        "img/debutante/debutante-03.jpeg",
        "img/debutante/debutante-04.jpeg",
        "img/debutante/debutante-05.jpeg",
        "img/debutante/debutante-06.jpeg",
        "img/debutante/debutante-07.jpeg",
        "img/debutante/debutante-08.jpeg",
        "img/debutante/debutante-09.jpeg",
        "img/debutante/debutante-10.jpeg",
        "img/debutante/debutante-11.jpeg",
        "img/debutante/debutante-12.jpeg",
        "img/debutante/debutante-13.jpeg",
        "img/debutante/debutante-14.jpeg",
        "img/debutante/debutante-15.jpeg",
        "img/debutante/debutante-16.jpeg",
        "img/debutante/debutante-17.jpeg",
        "img/debutante/debutante-18.jpeg",
        "img/debutante/debutante-19.jpeg",
        "img/debutante/debutante-20.jpeg",
        "img/debutante/debutante-21.jpeg",
        "img/debutante/debutante-22.jpeg",
        "img/debutante/debutante-23.jpeg",
        "img/debutante/debutante-24.jpeg",
        "img/debutante/debutante-25.jpeg",
        "img/debutante/debutante-26.jpeg",
        "img/debutante/debutante-27.jpeg",
        
      ]
    },

     formatura: {
      title: "Decorações Formatura",
      images: [

        "img/formatura/formatura-01.jpeg",
        "img/formatura/formatura-02.jpeg",
        "img/formatura/formatura-03.jpeg",
        "img/formatura/formatura-04.jpeg",
        "img/formatura/formatura-05.jpeg",
        "img/formatura/formatura-06.jpeg",
        "img/formatura/formatura-07.jpeg",
        "img/formatura/formatura-08.jpeg",
        "img/formatura/formatura-09.jpeg",
        "img/formatura/formatura-10.jpeg",
        
        
      ],
    
  },
   corporativas: {
      title: "Decorações Corporativas",
      images: [
        "img/corporativo/corporativo-01.jpeg",
        "img/corporativo/corporativo-02.jpeg",
        "img/corporativo/corporativo-03.jpeg",
        "img/corporativo/corporativo-04.jpeg",
        "img/corporativo/corporativo-05.jpeg",
        "img/corporativo/corporativo-06.jpeg",
        "img/corporativo/corporativo-07.jpeg",
        "img/corporativo/corporativo-08.jpeg",
        "img/corporativo/corporativo-09.jpeg",
        "img/corporativo/corporativo-10.jpeg",


      ],
    }
  }
  var lightbox = document.getElementById("lightbox");
  var lightboxTitle = document.getElementById("lightbox-title");
  var lightboxGrid = document.getElementById("lightbox-grid");
  var lastFocusedElement = null;

  function openGallery(key) {
    var gallery = galleries[key];
    if (!gallery) return;

    lastFocusedElement = document.activeElement;

    lightboxTitle.textContent = gallery.title;
    lightboxGrid.innerHTML = "";

    gallery.images.forEach(function (src) {
      var img = document.createElement("img");
      img.src = src;
      img.alt = gallery.title;
      img.loading = "lazy";
      lightboxGrid.appendChild(img);
    });

    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
    lightbox.querySelector(".lightbox__close").focus();
  }

  function closeGallery() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }

  document.querySelectorAll("[data-gallery]").forEach(function (card) {
    card.addEventListener("click", function () {
      openGallery(card.getAttribute("data-gallery"));
    });

    card.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openGallery(card.getAttribute("data-gallery"));
      }
    });
  });

  document.querySelectorAll("[data-lightbox-close]").forEach(function (el) {
    el.addEventListener("click", closeGallery);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
      closeGallery();
    }
  });
})();


// ============ CARROSSEL DE DEPOIMENTOS ============
(function () {
  var track = document.getElementById("testimonialTrack");
  if (!track) return;

  var carousel = document.getElementById("testimonialCarousel");
  var dotsWrap = document.getElementById("testimonialDots");
  var prevBtn = carousel.querySelector(".testimonial-carousel__btn--prev");
  var nextBtn = carousel.querySelector(".testimonial-carousel__btn--next");
  var slides = Array.prototype.slice.call(track.children);
  var dots = [];
  var activeIndex = 0;
  var autoplayId = null;

  slides.forEach(function (_, i) {
    var dot = document.createElement("button");
    dot.type = "button";
    dot.className = "testimonial-carousel__dot";
    dot.setAttribute("aria-label", "Ir para depoimento " + (i + 1));
    dot.addEventListener("click", function () {
      goToSlide(i);
    });
    dotsWrap.appendChild(dot);
    dots.push(dot);
  });

  function goToSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    activeIndex = index;
    track.style.transform = "translateX(-" + index * 100 + "%)";
    dots.forEach(function (dot, i) {
      dot.classList.toggle("is-active", i === index);
    });
  }

  prevBtn.addEventListener("click", function () {
    goToSlide(activeIndex - 1);
  });

  nextBtn.addEventListener("click", function () {
    goToSlide(activeIndex + 1);
  });

  function startAutoplay() {
    stopAutoplay();
    autoplayId = setInterval(function () {
      goToSlide(activeIndex + 1);
    }, 7000);
  }

  function stopAutoplay() {
    if (autoplayId) {
      clearInterval(autoplayId);
      autoplayId = null;
    }
  }

  carousel.addEventListener("mouseenter", stopAutoplay);
  carousel.addEventListener("mouseleave", startAutoplay);

  var touchStartX = null;
  carousel.addEventListener("touchstart", function (event) {
    stopAutoplay();
    touchStartX = event.touches[0].clientX;
  }, { passive: true });

  carousel.addEventListener("touchend", function (event) {
    if (touchStartX === null) return;
    var delta = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(delta) > 40) {
      goToSlide(activeIndex + (delta < 0 ? 1 : -1));
    }
    touchStartX = null;
    startAutoplay();
  });

  goToSlide(0);
  startAutoplay();
})();
