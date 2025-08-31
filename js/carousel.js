// Carousel functionality
class CarouselManager {
  constructor() {
    this.currentSlide = 0;
    this.isTransitioning = false;
    this.timeLeft = 3500;
    this.autoPlayTimer = null;
    this.progressTimer = null;
    this.touchStartX = 0;
    this.touchEndX = 0;
    
    this.images = [
      {
        src: "https://static.vecteezy.com/system/resources/previews/015/129/094/non_2x/national-flag-of-the-qatar-the-main-symbol-of-an-independent-country-flag-of-qatar-free-photo.jpg",
        alt: "Qatar National Flag",
        title: "Qatar Heritage"
      },
      {
        src: "https://www.cafonline.com/media/q3shiuin/gettyimages-1237326828.jpg?width=1320",
        alt: "Luxury Interior",
        title: "Luxury Living"
      },
      {
        src: "https://cdn.foot-africa.com/20250526/2256afce95be7c67f2ae45d344ceeb1a3f4989f28ca07825db98a6d3f3677a01-980-500.png",
        alt: "Modern Architecture",
        title: "Modern Qatar"
      }
    ];

    this.init();
  }

  init() {
    this.setupCarousel();
    this.setupControls();
    this.setupTouchEvents();
    this.startAutoPlay();
  }

  setupCarousel() {
    const carouselImages = document.getElementById('carousel-images');
    const carouselDots = document.getElementById('carousel-dots');
    
    if (!carouselImages || !carouselDots) return;

    // Create image slides
    carouselImages.innerHTML = this.images.map((image, index) => `
      <div class="w-full h-full flex-shrink-0 relative">
        <img
          src="${image.src}"
          alt="${image.alt}"
          class="w-full h-full object-cover object-center transition-transform duration-300"
          style="object-position: center center; min-width: 100%; min-height: 100%; transform: scale(${index === 0 ? '1.02' : '1'})"
          loading="${index === 0 ? 'eager' : 'lazy'}"
          draggable="false"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
        <div class="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-left">
          <h3 class="text-white text-lg sm:text-xl lg:text-2xl font-bold mb-2 opacity-90 drop-shadow-lg">
            ${image.title}
          </h3>
          <div class="w-8 sm:w-12 h-1 bg-blue-600 rounded-full"></div>
        </div>
      </div>
    `).join('');

    // Create dots
    carouselDots.innerHTML = this.images.map((_, index) => `
      <button
        class="carousel-dot w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === 0 ? 'bg-blue-600 scale-125 shadow-lg ring-2 ring-white/30' : 'bg-white/60 hover:bg-white/80'}"
        data-index="${index}"
        aria-label="Go to slide ${index + 1}"
      ></button>
    `).join('');
  }

  setupControls() {
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    const dots = document.querySelectorAll('.carousel-dot');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => this.prevSlide());
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => this.nextSlide());
    }

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => this.goToSlide(index));
    });
  }

  setupTouchEvents() {
    const container = document.getElementById('carousel-container');
    if (!container) return;

    container.addEventListener('touchstart', (e) => {
      this.touchStartX = e.touches[0].clientX;
    });

    container.addEventListener('touchmove', (e) => {
      this.touchEndX = e.touches[0].clientX;
    });

    container.addEventListener('touchend', () => {
      this.handleTouchEnd();
    });

    // Pause auto-play on hover
    container.addEventListener('mouseenter', () => {
      this.pauseAutoPlay();
    });

    container.addEventListener('mouseleave', () => {
      this.startAutoPlay();
    });
  }

  handleTouchEnd() {
    const swipeDistance = this.touchStartX - this.touchEndX;
    const minSwipeDistance = 50;
    const isRTL = document.documentElement.dir === 'rtl';

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (isRTL) {
        if (swipeDistance < 0) {
          this.nextSlide();
        } else {
          this.prevSlide();
        }
      } else {
        if (swipeDistance > 0) {
          this.nextSlide();
        } else {
          this.prevSlide();
        }
      }
    }
  }

  nextSlide() {
    if (this.isTransitioning) return;
    this.isTransitioning = true;
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
    this.updateCarousel();
    this.resetAutoPlay();
    setTimeout(() => {
      this.isTransitioning = false;
    }, 300);
  }

  prevSlide() {
    if (this.isTransitioning) return;
    this.isTransitioning = true;
    this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length;
    this.updateCarousel();
    this.resetAutoPlay();
    setTimeout(() => {
      this.isTransitioning = false;
    }, 300);
  }

  goToSlide(index) {
    if (this.isTransitioning || index === this.currentSlide) return;
    this.isTransitioning = true;
    this.currentSlide = index;
    this.updateCarousel();
    this.resetAutoPlay();
    setTimeout(() => {
      this.isTransitioning = false;
    }, 300);
  }

  autoNextSlide() {
    if (this.isTransitioning) return;
    this.isTransitioning = true;
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
    this.updateCarousel();
    setTimeout(() => {
      this.isTransitioning = false;
    }, 300);
  }

  updateCarousel() {
    const carouselImages = document.getElementById('carousel-images');
    const dots = document.querySelectorAll('.carousel-dot');
    const isRTL = document.documentElement.dir === 'rtl';

    if (carouselImages) {
      const translateX = isRTL ? this.currentSlide * 100 : -this.currentSlide * 100;
      carouselImages.style.transform = `translateX(${translateX}%)`;
    }

    // Update dots
    dots.forEach((dot, index) => {
      if (index === this.currentSlide) {
        dot.className = 'carousel-dot w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 bg-blue-600 scale-125 shadow-lg ring-2 ring-white/30';
      } else {
        dot.className = 'carousel-dot w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 bg-white/60 hover:bg-white/80';
      }
    });

    // Update image scales
    const images = carouselImages.querySelectorAll('img');
    images.forEach((img, index) => {
      img.style.transform = index === this.currentSlide ? 'scale(1.02)' : 'scale(1)';
    });
  }

  startAutoPlay() {
    this.resetAutoPlay();
  }

  pauseAutoPlay() {
    if (this.autoPlayTimer) {
      clearTimeout(this.autoPlayTimer);
    }
    if (this.progressTimer) {
      clearTimeout(this.progressTimer);
    }
  }

  resetAutoPlay() {
    this.pauseAutoPlay();
    this.timeLeft = 3500;

    this.autoPlayTimer = setTimeout(() => {
      this.autoNextSlide();
    }, 3500);

    // Start progress timer
    const startTime = Date.now();
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, 3500 - elapsed);
      this.timeLeft = remaining;

      const progressBar = document.getElementById('carousel-progress');
      if (progressBar) {
        const progress = 100 - (remaining / 3500) * 100;
        progressBar.style.width = `${progress}%`;
      }

      if (remaining > 0) {
        this.progressTimer = setTimeout(updateProgress, 50);
      }
    };
    updateProgress();
  }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.carouselManager = new CarouselManager();
});