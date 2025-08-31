// Navigation functionality
class NavigationManager {
  constructor() {
    this.mobileMenuOpen = false;
    this.scrolled = false;
    this.init();
  }

  init() {
    this.setupScrollHandler();
    this.setupMobileMenu();
    this.setupSmoothScrolling();
  }

  setupScrollHandler() {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 20;
          if (isScrolled !== this.scrolled) {
            this.scrolled = isScrolled;
            this.updateNavbarStyle();
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
  }

  updateNavbarStyle() {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;

    if (this.scrolled) {
      navbar.className =
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 lg:py-5 py-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg";
    } else {
      navbar.className =
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 lg:py-5 py-3 bg-transparent";
    }
  }

  setupMobileMenu() {
    const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileMenuClose = document.getElementById("mobile-menu-close");
    const mobileMenuBackdrop = document.getElementById("mobile-menu-backdrop");
    const menuIcon = document.getElementById("menu-icon");
    const closeIcon = document.getElementById("close-icon");

    if (!mobileMenuToggle || !mobileMenu) {
      return;
    }

    const toggleMobileMenu = () => {
      this.mobileMenuOpen = !this.mobileMenuOpen;

      if (this.mobileMenuOpen) {
        mobileMenu.classList.remove("hidden");
        document.body.style.overflow = "hidden";
        document.body.style.position = "fixed";
        document.body.style.width = "100%";

        if (menuIcon && closeIcon) {
          menuIcon.classList.add("hidden");
          closeIcon.classList.remove("hidden");
        }

        setTimeout(() => {
          const menuPanel = mobileMenu.querySelector("div:last-child");
          if (menuPanel) {
            menuPanel.style.transform = "translateX(0)";
          }
        }, 10);
      } else {
        const menuPanel = mobileMenu.querySelector("div:last-child");
        if (menuPanel) {
          menuPanel.style.transform = "translateX(-100%)";
        }

        setTimeout(() => {
          mobileMenu.classList.add("hidden");
          document.body.style.overflow = "";
          document.body.style.position = "";
          document.body.style.width = "";
        }, 300);

        if (menuIcon && closeIcon) {
          menuIcon.classList.remove("hidden");
          closeIcon.classList.add("hidden");
        }
      }
    };

    const closeMobileMenu = () => {
      if (this.mobileMenuOpen) {
        this.mobileMenuOpen = false;

        const menuPanel = mobileMenu.querySelector("div:last-child");
        if (menuPanel) {
          menuPanel.style.transform = "translateX(-100%)";
        }

        setTimeout(() => {
          mobileMenu.classList.add("hidden");
          document.body.style.overflow = "";
          document.body.style.position = "";
          document.body.style.width = "";
        }, 300);

        if (menuIcon && closeIcon) {
          menuIcon.classList.remove("hidden");
          closeIcon.classList.add("hidden");
        }
      }
    };

    mobileMenuToggle.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleMobileMenu();
    });

    if (mobileMenuClose) {
      mobileMenuClose.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeMobileMenu();
      });
    }

    if (mobileMenuBackdrop) {
      mobileMenuBackdrop.addEventListener("click", closeMobileMenu);
    }

    // Close mobile menu when clicking on navigation links
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("mobile-nav-link")) {
        closeMobileMenu();
      }
    });

    // Close mobile menu on escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.mobileMenuOpen) {
        closeMobileMenu();
      }
    });
  }

  setupSmoothScrolling() {
    // Handle smooth scrolling for anchor links
    document.addEventListener("click", (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (link) {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
      }
    });
  }
}

// Initialize navigation manager
document.addEventListener("DOMContentLoaded", () => {
  window.navigationManager = new NavigationManager();
});
