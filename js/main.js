// Main application initialization
class App {
  constructor() {
    this.init();
  }

  init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => {
        this.initializeApp();
      });
    } else {
      this.initializeApp();
    }
  }

  initializeApp() {
    // console.log("Qatar Travel Website - Vanilla JS Version");

    // Initialize all managers
    this.initializeManagers();

    // Setup global event listeners
    this.setupGlobalEvents();

    // Setup intersection observer for animations
    this.setupAnimationObserver();

    // Setup parallax effects
    this.setupParallaxEffects();

    // Initialize year in footer
    this.updateCurrentYear();

    // console.log("✅ Application initialized successfully");
  }

  initializeManagers() {
    // Managers are initialized in their respective files
    // This ensures proper initialization order
  }

  setupGlobalEvents() {

    // Handle CTA buttons
    // const ctaBookNow = document.getElementById('cta-book-now');
    // if (ctaBookNow) {
    //   ctaBookNow.addEventListener('click', this.handleWhatsAppClick);
    // }

    const heroBookBtn = document.getElementById("hero-book-btn");
    if (heroBookBtn) {
      heroBookBtn.addEventListener("click", this.handleWhatsAppClick);
    }

    // Handle learn more buttons
    const learnMoreBtns = document.querySelectorAll(
      "#learn-more-btn, #booking-learn-more, #hero-explore-btn"
    );

    learnMoreBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        window.location.href = "services.html"; // redirect to services.html
      });
    });

    const bookNowBtns = document.querySelectorAll(".book-now, #cta-book-now");

    bookNowBtns.forEach((btn) => {
      btn.addEventListener("click", this.handleWhatsAppClick);
    });


    // Handle window resize
    let resizeTimeout;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        this.handleResize();
      }, 250);
    });
  }

  handleWhatsAppClick() {
    const myNumber = "97450532553";
    const currentLang = window.languageManager?.getCurrentLanguage() || "en";
    const t = window.translations[currentLang];

    const message = `🌟 ${t?.hero?.title || "Arab Cup 2025 Qatar Experience"}

👋 Hello! I'm interested in booking my Qatar experience for Arab Cup 2025.

📅 Date: ${new Date().toLocaleDateString()}
🕒 Time: ${new Date().toLocaleTimeString()}

Please send me more details about your packages and services.`;

    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${myNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  }

  setupAnimationObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      });
    }, observerOptions);

    // Observe elements that should animate on scroll
    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));
  }

  setupParallaxEffects() {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;

          // Hero content parallax
          const heroContent = document.getElementById("hero-content");
          if (heroContent) {
            const contentY = scrollY * 0.1;
            heroContent.style.transform = `translateY(${contentY}px)`;
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
  }

  handleResize() {
    // Handle any resize-specific logic
    console.log("Window resized");
  }

  updateCurrentYear() {
    const yearElement = document.getElementById("current-year");
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear().toString();
    }
  }

  // Utility methods
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  throttle(func, limit) {
    let inThrottle;
    return function () {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }
}

// Initialize the application
window.app = new App();

// Global error handler
window.addEventListener("error", (e) => {
  console.error("Global error:", e.error);
});

// Global unhandled promise rejection handler
window.addEventListener("unhandledrejection", (e) => {
  console.error("Unhandled promise rejection:", e.reason);
});

// Performance monitoring
window.addEventListener("load", () => {
  if ("performance" in window) {
    const loadTime = performance.now();
  }
});

// Service worker registration (if needed in the future)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    // Uncomment when service worker is implemented
    // navigator.serviceWorker.register('/sw.js')
    //   .then(registration => console.log('SW registered'))
    //   .catch(error => console.log('SW registration failed'));
  });
}
