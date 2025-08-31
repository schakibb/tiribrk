class LanguageManager {
  constructor() {
    this.currentLanguage = 'en';
    this.translations = window.translations || {};
    this.init();
  }

  init() {
    const savedLanguage = localStorage.getItem('language') || 'en';
    this.setLanguage(savedLanguage);

    this.setupLanguageSelectors();
  }

  setLanguage(lang) {
    if (!this.translations[lang]) {
      console.warn(`Language ${lang} not found, falling back to English`);
      lang = 'en';
    }

    this.currentLanguage = lang;
    localStorage.setItem('language', lang);

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    this.updateUI();

    this.updateLanguageSelectors();
  }

  updateUI() {
    const t = this.translations[this.currentLanguage];
    if (!t) return;

    // Update navigation
    this.updateNavigation(t);

    // Update hero section
    this.updateHeroSection(t);

    // Update welcome section
    this.updateWelcomeSection(t);

    // Update booking section
    this.updateBookingSection(t);

    // Update services section
    this.updateServicesSection(t);

    // Update how it works section
    this.updateHowItWorksSection(t);

    // Update FAQ section
    this.updateFAQSection(t);

    // Update CTA section
    this.updateCTASection(t);

    // Update footer
    this.updateFooter(t);

    // Update WhatsApp tooltip
    this.updateWhatsAppTooltip(t);

    this.updateContactSection(t);

    this.updateServicesPageSection(t);

    this.update404Page(t);
  }

  updateNavigation(t) {
    const navLinks = document.getElementById('nav-links');
    const mobileNavLinks = document.getElementById('mobile-nav-links');
    const footerNavLinks = document.getElementById('footer-nav-links');

    const links = [
      { name: t.nav.home, path: "index.html" },
      { name: t.nav.service, path: "services.html" },
      { name: t.nav.blog, path: "blog.html" },
      { name: t.nav.contact, path: "contact.html" }
    ];

    // Desktop navigation
    if (navLinks) {
      navLinks.innerHTML = links.map(link => `
      <li class="relative">
        <a href="${link.path}" class="font-medium text-sm xl:text-base transition-all duration-200 hover:text-blue-600 relative whitespace-nowrap after:absolute after:bottom-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full ${this.currentLanguage === 'ar' ? 'after:right-0' : 'after:left-0'}">
          ${link.name}
        </a>
      </li>
    `).join('');
    }

    // Mobile navigation
    if (mobileNavLinks) {
      mobileNavLinks.innerHTML = links.map(link => `
      <li>
        <a href="${link.path}" class="block px-4 py-3 text-lg font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors mobile-nav-link">
          ${link.name}
        </a>
      </li>
    `).join('');
    }

    // Footer navigation
    if (footerNavLinks) {
      footerNavLinks.innerHTML = links.map(link => `
      <li>
        <a href="${link.path}" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors duration-200 hover:underline text-sm sm:text-base block py-1">
          ${link.name}
        </a>
      </li>
    `).join('');
    }
  }


  updateHeroSection(t) {
    const elements = {
      'hero-subtitle': t.hero.subtitle,
      'hero-title': t.hero.title,
      'hero-description': t.hero.description,
      'scroll-text': t.hero.scrollDown
    };

    Object.entries(elements).forEach(([id, text]) => {
      const element = document.getElementById(id);
      if (element) element.textContent = text;
    });

    // Update hero buttons
    const bookBtn = document.getElementById('hero-book-btn');
    const exploreBtn = document.getElementById('hero-explore-btn');

    if (bookBtn) bookBtn.textContent = t.hero.bookStay;
    if (exploreBtn) exploreBtn.textContent = t.hero.exploreApartments;
  }

  updateWelcomeSection(t) {
    const elements = {
      'welcome-title': t.home.welcome.title,
      'welcome-description': t.home.welcome.description,
      'achievement-1': t.home.welcome.achievement1,
      'achievement-2': t.home.welcome.achievement2,
      'achievement-3': t.home.welcome.achievement3,
      'welcome-highlight': t.home.welcome.highlight,
      'business-title': t.home.welcome.businessTitle,
      'business-desc': t.home.welcome.businessDesc,
      'learn-more-text-1': t.home.welcome.learnMore
    };

    Object.entries(elements).forEach(([id, text]) => {
      const element = document.getElementById(id);
      if (element) element.textContent = text;
    });
  }

  updateBookingSection(t) {
    const elements = {
      'booking-subtitle': t.home.booking.subtitle,
      'booking-title': t.home.booking.title,
      'booking-description': t.home.booking.description,
      'form-title': t.bookingForm.title,
      'learn-more-text-2': t.home.booking.learnMore

    };

    Object.entries(elements).forEach(([id, text]) => {
      const element = document.getElementById(id);
      if (element) element.textContent = text;
    });

    // Update form placeholders
    const nameInput = document.getElementById('booking-name');
    const phoneInput = document.getElementById('booking-phone');
    const tripInput = document.getElementById('booking-trip');
    const submitBtn = document.getElementById('booking-submit');

    if (nameInput) nameInput.placeholder = t.bookingForm.name;
    if (phoneInput) phoneInput.placeholder = t.bookingForm.phone;
    // if (phoneInput) {
    //   phoneInput.placeholder = t.bookingForm.phone;
    //   phoneInput.setAttribute("dir", this.currentLanguage === 'ar' ? 'rtl' : 'ltr');
    // }
    if (tripInput) tripInput.placeholder = t.bookingForm.tripDetails;
    if (submitBtn) submitBtn.textContent = t.bookingForm.sendWhatsApp;

    const benefitsList = document.getElementById('booking-benefits');
    if (benefitsList && t.home.booking.benefits) {
      benefitsList.innerHTML = t.home.booking.benefits.map((benefit, index) => `
        <li class="flex items-center ${index === 0 ? 'bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border-2 border-blue-200 dark:border-blue-800 shadow-sm' : ''}">
          <div class="h-5 w-5 rounded-full flex items-center justify-center ${this.currentLanguage === 'ar' ? 'ml-3' : 'mr-3'} ${index === 0 ? 'bg-blue-600 text-white' : 'bg-blue-100 dark:bg-blue-900 text-blue-600'}">
            <svg class="h-3 w-3 ${this.currentLanguage === 'ar' ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
          <span class="flex-1 ${index === 0 ? 'font-semibold text-blue-600' : ''}">${benefit}</span>
          ${index === 0 ? `<span class="${this.currentLanguage === 'ar' ? 'mr-2' : 'ml-2'} text-xs bg-blue-600 text-white px-2 py-1 rounded-full whitespace-nowrap">${t.home.booking.specialOffer || 'SPECIAL OFFER'}</span>` : ''}
        </li>
      `).join('');
    }
  }

  updateServicesSection(t) {
    const elements = {
      'services-title': t.services.title,
      'services-subtitle': t.services.subtitle,
      'special-offer-title': t.services.specialOffer.title,
      'fixed-price': t.services.specialOffer.fixedPrice,
      'offer-details': t.services.specialOffer.details,
      'usd-equivalent': t.services.specialOffer.usdEquivalent,
      'offer-note': t.services.specialOffer.note,
      'learn-more-text-3': t.home.welcome.learnMore,
      'booking-book-now': t.home.cta.bookNow
    };

    Object.entries(elements).forEach(([id, text]) => {
      const element = document.getElementById(id);
      if (element) element.textContent = text;
    });

    // Update services grid
    this.updateServicesGrid(t);
  }

  updateServicesGrid(t) {
    const servicesGrid = document.getElementById('services-grid');
    if (!servicesGrid || !t.services.items) return;

    const serviceIcons = [
      'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', // FileText
      'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', // Building
      'M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z', // Ticket
      'M12 19l9 2-9-18-9 18 9-2zm0 0v-8', // Plane
      'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z', // MapPin
      'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' // Briefcase
    ];

    servicesGrid.innerHTML = t.services.items.map((service, index) => `
      <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
        <div class="p-6 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white text-center">
          <div class="flex flex-col items-center space-y-4">
            <div class="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-xl">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${serviceIcons[index]}"/>
              </svg>
            </div>
            <h4 class="text-xl font-bold leading-tight">${service.title}</h4>
            <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">${service.description}</p>
          </div>
        </div>
      </div>
    `).join('');
  }

  updateHowItWorksSection(t) {
    const elements = {
      'how-it-works-subtitle': t.home.howItWorks.subtitle,
      'how-it-works-title': t.home.howItWorks.title,
      'how-it-works-description': t.home.howItWorks.description,
      'closing-message': t.home.howItWorks.closingMessage
    };

    Object.entries(elements).forEach(([id, text]) => {
      const element = document.getElementById(id);
      if (element) element.textContent = text;
    });

    // Update steps
    this.updateStepsGrid(t);
  }

  updateStepsGrid(t) {
    const stepsGrid = document.getElementById('steps-grid');
    if (!stepsGrid || !t.home.howItWorks.steps) return;

    const stepIcons = [
      'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z', // MessageCircle
      'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z', // Search
      'M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4v10m6-10v10m-6-4h6', // Calendar
      'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' // Heart
    ];

    const steps = [
      t.home.howItWorks.steps.contact,
      t.home.howItWorks.steps.identify,
      t.home.howItWorks.steps.book,
      t.home.howItWorks.steps.enjoy
    ];

    stepsGrid.innerHTML = steps.map((step, index) => `
      <div class="bg-white/70 dark:bg-black/30 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-xl shadow-lg p-6 animate-fade-in flex flex-col items-center text-center relative" style="animation-delay: ${(index + 1) * 100}ms">
        <div class="absolute -top-4 -right-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
          0${index + 1}
        </div>
        <div class="mb-4 p-3 rounded-full bg-blue-50 dark:bg-blue-900/20">
          <svg class="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${stepIcons[index]}"/>
          </svg>
        </div>
        <h3 class="text-xl font-semibold mb-3">${step.title}</h3>
      </div>
    `).join('');
  }

  updateFAQSection(t) {
    const elements = {
      'faq-title': t.faq.title,
      'faq-subtitle': t.faq.subtitle
    };

    Object.entries(elements).forEach(([id, text]) => {
      const element = document.getElementById(id);
      if (element) element.textContent = text;
    });

    // Update FAQ items
    this.updateFAQItems(t);
  }

  updateFAQItems(t) {
    const faqItems = document.getElementById('faq-items');
    if (!faqItems || !t.faq.questions) return;

    const faqIcons = [
      'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', // Clock
      'M12 19l9 2-9-18-9 18 9-2zm0 0v-8', // Plane
      'M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z', // Ticket
      'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', // Hotel
      'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1', // DollarSign
      'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9', // Globe
      'M13 10V3L4 14h7v7l9-11h-7z', // Activity
      'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' // FileCheck
    ];

    faqItems.innerHTML = t.faq.questions.map((faq, index) => `
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-md">
        <button class="faq-toggle w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200" data-index="${index}">
          <div class="flex items-center space-x-4 ${this.currentLanguage === 'ar' ? 'space-x-reverse' : ''}">
            <div class="flex-shrink-0 w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${faqIcons[index]}"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white pr-4">${faq.question}</h3>
          </div>
          <div class="flex-shrink-0 ml-4">
            <svg class="faq-chevron w-5 h-5 text-gray-500 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </button>
        <div class="faq-content hidden px-6 pb-6">
          <div class="pl-14 border-l-2 border-blue-200 dark:border-blue-800 ml-5">
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">${faq.answer}</p>
          </div>
        </div>
      </div>
    `).join('');

    // Add FAQ toggle functionality
    this.setupFAQToggles();
  }

  updateCTASection(t) {
    const elements = {
      'cta-title': t.home.cta.title,
      'cta-description': t.home.cta.description,
      'cta-book-now': t.home.cta.bookNow
    };

    Object.entries(elements).forEach(([id, text]) => {
      const element = document.getElementById(id);
      if (element) element.textContent = text;
    });
  }

  updateFooter(t) {
    const elements = {
      'footer-description': t.footer.description,
      'footer-quick-links': t.footer.quickLinks,
      'footer-contact': t.footer.contact,
      'footer-newsletter': t.footer.newsletter,
      'footer-newsletter-desc': t.footer.newsletterDesc,
      'footer-rights': t.footer.allRights,
      'newsletter-btn-text': t.footer.subscribe
    };

    Object.entries(elements).forEach(([id, text]) => {
      const element = document.getElementById(id);
      if (element) element.textContent = text;
    });

    // Update newsletter placeholder
    const newsletterInput = document.getElementById('newsletter-email');
    if (newsletterInput) {
      newsletterInput.placeholder = t.footer.yourEmail;
    }
  }

  updateWhatsAppTooltip(t) {
    const tooltip = document.getElementById('whatsapp-tooltip');
    if (tooltip) {
      tooltip.textContent = t.whatsupApp;
    }
  }

  // Add this method to your LanguageManager class
  updateContactSection(t) {
    // Contact page header
    const elements = {
      'contact-title': t.contact.title,
      'contact-subtitle': t.contact.subtitle,
      'get-in-touch': t.contact.getInTouch,
      'send-message': t.contact.sendMessage,
      'phone-label': t.contact.phone,
      'email-label': t.contact.email,
      'hours-label': t.contact.receptionHours,
      'message-sent': t.contact.messageSent,
      'thank-you': t.contact.thankYou
    };

    Object.entries(elements).forEach(([id, text]) => {
      const element = document.getElementById(id);
      if (element) element.textContent = text;
    });

    // Update form labels
    const formLabels = {
      'name-label': t.contact.fullName,
      'email-input-label': t.contact.email,
      'phone-input-label': t.contact.phoneNumber,
      'subject-label': t.contact.subject,
      'message-label': t.contact.message,
      'send-button-text': t.contact.send
    };

    Object.entries(formLabels).forEach(([id, text]) => {
      const element = document.getElementById(id);
      if (element) element.textContent = text;
    });

    // Update form placeholders
    const placeholders = {
      'contact-name': t.contact.namePlaceholder,
      'contact-email': t.contact.emailPlaceholder,
      'contact-phone': t.contact.phonePlaceholder,
      'contact-subject': t.contact.subjectPlaceholder,
      'contact-message': t.contact.messagePlaceholder
    };

    Object.entries(placeholders).forEach(([id, placeholder]) => {
      const element = document.getElementById(id);
      if (element) element.placeholder = placeholder;
    });

    // ✅ Update reception hours with line breaks
    const hoursElement = document.getElementById('contact-hours-details');
    if (hoursElement && Array.isArray(t.contact.hoursDetails)) {
      hoursElement.innerHTML = t.contact.hoursDetails.join("<br />");
    }

    // Update submit button
    const submitBtn = document.getElementById('contact-submit');
    if (submitBtn) {
      const buttonText = submitBtn.querySelector('#send-button-text');
      if (buttonText) buttonText.textContent = t.contact.send;
    }
  }



  updateServicesPageSection(t) {
    // Update services page header
    const elements = {
      'services-page-title': t.services.title,
      'services-page-subtitle': t.services.subtitle,
      'services-special-title': t.services.specialOffer.title,
      'services-fixed-price': t.services.specialOffer.fixedPrice,
      'services-offer-details': t.services.specialOffer.details,
      'services-usd-equivalent': t.services.specialOffer.usdEquivalent,
      'services-offer-note': t.services.specialOffer.note,
      'services-book-now': t.services.bookNow
    };

    Object.entries(elements).forEach(([id, text]) => {
      const element = document.getElementById(id);
      if (element) element.textContent = text;
    });

    // Update detailed services grid
    this.updateDetailedServicesGrid(t);
  }


  update404Page(t) {
    // Update 404 page content
    const elements = {
      'error-title': t.notFound.title,
      'error-description': t.notFound.description,
      'return-home-text': t.notFound.returnHome
    };

    Object.entries(elements).forEach(([id, text]) => {
      const element = document.getElementById(id);
      if (element) element.textContent = text;
    });

    // Update button spacing and layout for Arabic
    const returnButton = document.querySelector('a[href="index.html"]');
    if (returnButton) {
      if (this.currentLanguage === 'ar') {
        returnButton.classList.add('space-x-reverse');
        // Update SVG rotation for RTL
        const arrowSvg = returnButton.querySelector('svg:last-child');
        if (arrowSvg) {
          arrowSvg.classList.add('rotate-180');
        }
      } else {
        returnButton.classList.remove('space-x-reverse');
        const arrowSvg = returnButton.querySelector('svg:last-child');
        if (arrowSvg) {
          arrowSvg.classList.remove('rotate-180');
        }
      }
    }
  }

updateDetailedServicesGrid(t) {
    const detailedServicesGrid = document.getElementById('detailed-services-grid');
    if (!detailedServicesGrid || !t.services.items) return;

    const serviceIcons = [
      'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', // FileText - Tourism Visa
      'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', // Building - Hotels & Apartments
      'M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z', // Ticket - Event & Match Tickets
      'M12 19l9 2-9-18-9 18 9-2zm0 0v-8', // Plane - Flight Tickets
      'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z', // MapPin - Tourism & Entertainment
      'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' // Briefcase - Accommodation & Support
    ];

    detailedServicesGrid.innerHTML = t.services.items.map((service, index) => `
    <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
      <!-- Service Header -->
      <div class="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 flex-shrink-0">
        <div class="flex items-center space-x-4 ${this.currentLanguage === 'ar' ? 'space-x-reverse' : ''}">
          <div class="p-3 bg-blue-600 text-white rounded-xl shadow-lg flex-shrink-0">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${serviceIcons[index]}"/>
            </svg>
          </div>
          <div class="flex-1 min-w-0">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">${service.title}</h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">${service.description}</p>
          </div>
        </div>
      </div>

      <!-- Service Features -->
      <div class="p-6 flex-1 flex flex-col">
        <!-- Features List with fixed height -->
        <div class="flex-1 mb-6">
          <ul class="space-y-3 h-full overflow-hidden">
            ${service.features.slice(0, 5).map(feature => `
              <li class="flex items-start">
                <div class="h-5 w-5 rounded-full flex items-center justify-center ${this.currentLanguage === 'ar' ? 'ml-3' : 'mr-3'} bg-blue-100 dark:bg-blue-900 text-blue-600 flex-shrink-0 mt-0.5">
                  <svg class="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <span class="text-gray-700 dark:text-gray-300 leading-relaxed">${feature}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Action Button -->
        <div class="pt-4 border-t border-gray-200 dark:border-gray-700 flex-shrink-0">
          <button class="book-now w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 group hover:shadow-lg">
            <span>${t.services.bookNow}</span>
            <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform ${this.currentLanguage === 'ar' ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}



  setupFAQToggles() {
    const toggles = document.querySelectorAll('.faq-toggle');
    toggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        const index = toggle.dataset.index;
        const content = toggle.parentElement.querySelector('.faq-content');
        const chevron = toggle.querySelector('.faq-chevron');

        // Close all other FAQ items
        toggles.forEach((otherToggle, otherIndex) => {
          if (otherIndex.toString() !== index) {
            const otherContent = otherToggle.parentElement.querySelector('.faq-content');
            const otherChevron = otherToggle.querySelector('.faq-chevron');
            otherContent.classList.add('hidden');
            otherChevron.style.transform = 'rotate(0deg)';
          }
        });

        // Toggle current FAQ item
        if (content.classList.contains('hidden')) {
          content.classList.remove('hidden');
          chevron.style.transform = 'rotate(180deg)';
        } else {
          content.classList.add('hidden');
          chevron.style.transform = 'rotate(0deg)';
        }
      });
    });
  }

  setupLanguageSelectors() {
    const languages = [
      { code: "en", name: "English", nativeName: "English", flag: "GB", dir: 'ltr' },
      { code: "fr", name: "French", nativeName: "Français", flag: "FR", dir: 'ltr' },
      { code: "ar", name: "Arabic", nativeName: "العربية", flag: "SA", dir: 'rtl' }
    ];

    // Desktop language selector
    const languageSelector = document.getElementById('language-selector');
    const languageDropdown = document.getElementById('language-dropdown');

    if (languageSelector && languageDropdown) {
      // Populate dropdown
      languageDropdown.innerHTML = languages.map(lang => `
        <button class="language-option w-full cursor-pointer px-3 py-2.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-150 focus:bg-gray-100 dark:focus:bg-gray-700 text-left" data-lang="${lang.code}">
          <div class="flex items-center gap-3 w-full">
            <svg class="h-4 w-4 text-gray-600 dark:text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
            </svg>
            <div class="flex flex-col flex-1 items-start">
              <span class="text-sm font-medium text-gray-900 dark:text-gray-100 ${lang.dir === 'rtl' ? 'font-arabic' : ''}">${lang.nativeName}</span>
              <span class="text-xs text-gray-500 dark:text-gray-400">${lang.name} • ${lang.code.toUpperCase()}</span>
            </div>
            ${this.currentLanguage === lang.code ? '<div class="h-2 w-2 bg-blue-500 rounded-full flex-shrink-0"></div>' : ''}
          </div>
        </button>
      `).join('');

      // Toggle dropdown
      languageSelector.addEventListener('click', (e) => {
        e.stopPropagation();
        languageDropdown.classList.toggle('hidden');
      });

      // Handle language selection
      languageDropdown.addEventListener('click', (e) => {
        const option = e.target.closest('.language-option');
        if (option) {
          const lang = option.dataset.lang;
          this.setLanguage(lang);
          languageDropdown.classList.add('hidden');
        }
      });

      // Close dropdown when clicking outside
      document.addEventListener('click', () => {
        languageDropdown.classList.add('hidden');
      });
    }

    // Mobile language selector
    const mobileLanguageSelector = document.getElementById('mobile-language-selector');
    if (mobileLanguageSelector) {
      mobileLanguageSelector.addEventListener('click', () => {
        // Cycle through languages on mobile
        const currentIndex = languages.findIndex(lang => lang.code === this.currentLanguage);
        const nextIndex = (currentIndex + 1) % languages.length;
        this.setLanguage(languages[nextIndex].code);
      });
    }
  }

  updateLanguageSelectors() {
    const languages = [
      { code: "en", name: "English", nativeName: "English" },
      { code: "fr", name: "French", nativeName: "Français" },
      { code: "ar", name: "Arabic", nativeName: "العربية" }
    ];

    const currentLang = languages.find(lang => lang.code === this.currentLanguage);

    // Update desktop selector
    const currentLanguageSpan = document.getElementById('current-language');
    if (currentLanguageSpan) {
      currentLanguageSpan.textContent = this.currentLanguage.toUpperCase();
    }

    // Update mobile selector
    const mobileCurrentLanguage = document.getElementById('mobile-current-language');
    if (mobileCurrentLanguage) {
      mobileCurrentLanguage.textContent = currentLang?.nativeName || 'EN';
    }

    // Update dropdown options
    const options = document.querySelectorAll('.language-option');
    options.forEach(option => {
      const lang = option.dataset.lang;
      const isSelected = lang === this.currentLanguage;
      const indicator = option.querySelector('.h-2.w-2');

      if (isSelected && !indicator) {
        option.innerHTML += '<div class="h-2 w-2 bg-blue-500 rounded-full flex-shrink-0"></div>';
      } else if (!isSelected && indicator) {
        indicator.remove();
      }
    });
  }

  getCurrentLanguage() {
    return this.currentLanguage;
  }

  getTranslation(key) {
    const keys = key.split('.');
    let value = this.translations[this.currentLanguage];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  }
}

// Initialize language manager
window.languageManager = new LanguageManager();