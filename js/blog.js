// Blog page specific functionality
class BlogManager {
  constructor() {
    this.stadiumData = [
      {
        name: "Lusail Stadium",
        capacity: "80,000",
        location: "Lusail City",
        description: "The crown jewel of Qatar's stadiums, featuring golden facade and state-of-the-art facilities",
        images: [
          "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=800",
          "https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800",
          "https://images.pexels.com/photos/2291004/pexels-photo-2291004.jpeg?auto=compress&cs=tinysrgb&w=800",
          "https://images.pexels.com/photos/3992649/pexels-photo-3992649.jpeg?auto=compress&cs=tinysrgb&w=800",
          "https://images.pexels.com/photos/1884575/pexels-photo-1884575.jpeg?auto=compress&cs=tinysrgb&w=800",
          "https://images.pexels.com/photos/2291003/pexels-photo-2291003.jpeg?auto=compress&cs=tinysrgb&w=800"
        ]
      },
      {
        name: "Stadium 974",
        capacity: "40,000",
        location: "Doha Port",
        description: "Revolutionary modular stadium built from shipping containers, showcasing sustainability",
        images: [
          "https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800",
          "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=800",
          "https://images.pexels.com/photos/2291004/pexels-photo-2291004.jpeg?auto=compress&cs=tinysrgb&w=800",
          "https://images.pexels.com/photos/3992649/pexels-photo-3992649.jpeg?auto=compress&cs=tinysrgb&w=800",
          "https://images.pexels.com/photos/1884575/pexels-photo-1884575.jpeg?auto=compress&cs=tinysrgb&w=800"
        ]
      },
      {
        name: "Al Bayt Stadium",
        capacity: "60,000",
        location: "Al Khor",
        description: "Inspired by traditional Bedouin tents, blending heritage with modern technology",
        images: [
          "https://images.pexels.com/photos/2291004/pexels-photo-2291004.jpeg?auto=compress&cs=tinysrgb&w=800",
          "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=800",
          "https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800",
          "https://images.pexels.com/photos/3992649/pexels-photo-3992649.jpeg?auto=compress&cs=tinysrgb&w=800"
        ]
      },
      {
        name: "Al Janoub Stadium",
        capacity: "40,000",
        location: "Al Wakrah",
        description: "Designed by Zaha Hadid, inspired by dhow boats that carried pearl divers",
        images: [
          "https://images.pexels.com/photos/3992649/pexels-photo-3992649.jpeg?auto=compress&cs=tinysrgb&w=800",
          "https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800",
          "https://images.pexels.com/photos/2291004/pexels-photo-2291004.jpeg?auto=compress&cs=tinysrgb&w=800",
          "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=800"
        ]
      }
    ];

    this.cultureData = [
      {
        title: "Souq Waqif",
        description: "Traditional marketplace with authentic Qatari atmosphere",
        image: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        title: "Museum of Islamic Art",
        description: "World-renowned collection of Islamic artifacts",
        image: "https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        title: "Katara Cultural Village",
        description: "Hub of arts, culture, and entertainment",
        image: "https://images.pexels.com/photos/2291004/pexels-photo-2291004.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        title: "Traditional Dhow Boats",
        description: "Historic pearl diving vessels",
        image: "https://images.pexels.com/photos/3992649/pexels-photo-3992649.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        title: "Desert Safari",
        description: "Adventure in the golden dunes",
        image: "https://images.pexels.com/photos/1884575/pexels-photo-1884575.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        title: "Falcon Heritage",
        description: "Traditional falconry experiences",
        image: "https://images.pexels.com/photos/2291003/pexels-photo-2291003.jpeg?auto=compress&cs=tinysrgb&w=600"
      }
    ];

    this.attractionsData = [
      {
        title: "The Pearl-Qatar",
        description: "Luxury artificial island with upscale shopping and dining",
        image: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=600",
        highlights: ["Luxury shopping", "Fine dining", "Marina views", "Residential towers"]
      },
      {
        title: "Doha Corniche",
        description: "Stunning waterfront promenade with skyline views",
        image: "https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=600",
        highlights: ["7km waterfront", "Skyline views", "Parks & gardens", "Cultural sites"]
      },
      {
        title: "National Museum of Qatar",
        description: "Architectural marvel showcasing Qatar's history and culture",
        image: "https://images.pexels.com/photos/2291004/pexels-photo-2291004.jpeg?auto=compress&cs=tinysrgb&w=600",
        highlights: ["Unique architecture", "Interactive exhibits", "Cultural heritage", "Modern design"]
      },
      {
        title: "Aspire Park",
        description: "Largest park in Doha with recreational facilities",
        image: "https://images.pexels.com/photos/3992649/pexels-photo-3992649.jpeg?auto=compress&cs=tinysrgb&w=600",
        highlights: ["88 hectares", "Lake & fountains", "Sports facilities", "Family activities"]
      },
      {
        title: "Villaggio Mall",
        description: "Venice-themed shopping destination with gondola rides",
        image: "https://images.pexels.com/photos/1884575/pexels-photo-1884575.jpeg?auto=compress&cs=tinysrgb&w=600",
        highlights: ["Indoor gondola rides", "Luxury shopping", "Entertainment", "Dining options"]
      },
      {
        title: "Al Zubarah Fort",
        description: "UNESCO World Heritage site showcasing Qatar's history",
        image: "https://images.pexels.com/photos/2291003/pexels-photo-2291003.jpeg?auto=compress&cs=tinysrgb&w=600",
        highlights: ["UNESCO site", "Historical significance", "Archaeological finds", "Cultural tours"]
      }
    ];

    this.expandedStadiums = new Set();
    this.expandedCulture = false;
    this.init();
  }

  init() {
    this.setupStadiumGallery();
    this.setupCultureGallery();
    this.setupAttractionsGrid();
    this.setupArabCountries();
    this.setupImageModal();
    this.setupWhatsAppButton();
    this.updateBlogTranslations();
    
    document.addEventListener('languageChanged', () => {
      this.updateBlogTranslations();
    });
  }

  setupStadiumGallery() {
    const stadiumGallery = document.getElementById('stadium-gallery');
    if (!stadiumGallery) return;

    stadiumGallery.innerHTML = this.stadiumData.map((stadium, index) => `
      <div class="bg-white/70 dark:bg-black/30 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-2xl shadow-lg overflow-hidden">
        <div class="p-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <!-- Stadium Info -->
            <div class="order-2 lg:order-1">
              <h3 class="text-2xl md:text-3xl font-bold mb-4 font-display">${stadium.name}</h3>
              <div class="flex flex-wrap gap-4 mb-4">
                <div class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                  <span class="text-gray-600 dark:text-gray-300">${stadium.capacity} capacity</span>
                </div>
                <div class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span class="text-gray-600 dark:text-gray-300">${stadium.location}</span>
                </div>
              </div>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">${stadium.description}</p>
              
              <button class="stadium-see-more bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 inline-flex items-center gap-2" data-stadium="${index}">
                <span class="see-more-text">See More Images</span>
                <svg class="w-4 h-4 see-more-icon transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>

            <!-- Stadium Images -->
            <div class="order-1 lg:order-2">
              <div class="stadium-images-container" data-stadium="${index}">
                <!-- Initial 3 images -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  ${stadium.images.slice(0, 3).map((img, imgIndex) => `
                    <div class="relative group cursor-pointer ${imgIndex === 0 ? 'md:col-span-2' : ''}" onclick="window.blogManager.openImageModal('${img}', '${stadium.name}', '${stadium.description}')">
                      <img src="${img}" alt="${stadium.name}" class="w-full h-48 ${imgIndex === 0 ? 'md:h-64' : ''} object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                      <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-lg flex items-center justify-center">
                        <svg class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                      </div>
                    </div>
                  `).join('')}
                </div>

                <!-- Additional images (hidden initially) -->
                <div class="additional-images hidden grid grid-cols-2 md:grid-cols-3 gap-4">
                  ${stadium.images.slice(3).map(img => `
                    <div class="relative group cursor-pointer" onclick="window.blogManager.openImageModal('${img}', '${stadium.name}', '${stadium.description}')">
                      <img src="${img}" alt="${stadium.name}" class="w-full h-32 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                      <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-lg flex items-center justify-center">
                        <svg class="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    this.setupStadiumToggleButtons();
  }

  setupStadiumToggleButtons() {
    const seeMoreButtons = document.querySelectorAll('.stadium-see-more');
    seeMoreButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const stadiumIndex = parseInt(e.currentTarget.dataset.stadium);
        this.toggleStadiumImages(stadiumIndex, e.currentTarget);
      });
    });
  }

  toggleStadiumImages(stadiumIndex, button) {
    const container = document.querySelector(`[data-stadium="${stadiumIndex}"]`);
    const additionalImages = container.querySelector('.additional-images');
    const icon = button.querySelector('.see-more-icon');
    const text = button.querySelector('.see-more-text');
    
    const currentLang = window.languageManager?.getCurrentLanguage() || 'en';
    const t = window.translations[currentLang];

    if (this.expandedStadiums.has(stadiumIndex)) {
      // Collapse
      additionalImages.classList.add('hidden');
      this.expandedStadiums.delete(stadiumIndex);
      icon.style.transform = 'rotate(0deg)';
      text.textContent = t?.blog?.stadiums?.seeMore || 'See More Images';
    } else {
      // Expand
      additionalImages.classList.remove('hidden');
      this.expandedStadiums.add(stadiumIndex);
      icon.style.transform = 'rotate(180deg)';
      text.textContent = t?.blog?.stadiums?.showLess || 'Show Less';
    }
  }

  setupCultureGallery() {
    const cultureGallery = document.getElementById('culture-gallery');
    if (!cultureGallery) return;

    // Show initial 3 items
    const initialItems = this.cultureData.slice(0, 3);
    const additionalItems = this.cultureData.slice(3);

    cultureGallery.innerHTML = `
      <div class="initial-culture-items contents">
        ${initialItems.map(item => this.createCultureCard(item)).join('')}
      </div>
      <div class="additional-culture-items hidden contents">
        ${additionalItems.map(item => this.createCultureCard(item)).join('')}
      </div>
    `;
  }

  createCultureCard(item) {
    return `
      <div class="relative group cursor-pointer" onclick="window.blogManager.openImageModal('${item.image}', '${item.title}', '${item.description}')">
        <img src="${item.image}" alt="${item.title}" class="w-full h-48 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-lg">
          <div class="absolute bottom-4 left-4 right-4">
            <h3 class="text-white font-bold text-lg mb-1">${item.title}</h3>
            <p class="text-white/90 text-sm">${item.description}</p>
          </div>
        </div>
        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-lg flex items-center justify-center">
          <svg class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
      </div>
    `;
  }

  setupAttractionsGrid() {
    const attractionsGrid = document.getElementById('attractions-grid');
    if (!attractionsGrid) return;

    attractionsGrid.innerHTML = this.attractionsData.map(attraction => `
      <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 group">
        <div class="relative cursor-pointer" onclick="window.blogManager.openImageModal('${attraction.image}', '${attraction.title}', '${attraction.description}')">
          <img src="${attraction.image}" alt="${attraction.title}" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
            <svg class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold mb-3 font-display">${attraction.title}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">${attraction.description}</p>
          <div class="space-y-2">
            ${attraction.highlights.map(highlight => `
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span class="text-sm text-gray-600 dark:text-gray-300">${highlight}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }

  setupArabCountries() {
    const arabCountries = [
      "المملكة العربية السعودية", "الإمارات العربية المتحدة", "مصر", "المغرب", 
      "الجزائر", "تونس", "العراق", "الأردن", "لبنان", "الكويت", 
      "البحرين", "عمان", "اليمن", "السودان", "ليبيا", "فلسطين"
    ];

    const arabCountriesContainer = document.getElementById('arab-countries');
    if (arabCountriesContainer) {
      arabCountriesContainer.innerHTML = arabCountries.map(country => `
        <div class="bg-white dark:bg-gray-900 rounded-lg p-4 text-center border border-gray-200 dark:border-gray-700 hover:shadow-md hover:scale-105 transition-all duration-200 group">
          <div class="w-8 h-8 bg-blue-600 rounded-full mx-auto mb-2 flex items-center justify-center group-hover:bg-blue-700 transition-colors">
            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <span class="text-sm font-medium text-gray-900 dark:text-white">${country}</span>
        </div>
      `).join('');
    }
  }

  setupImageModal() {
    const modal = document.getElementById('image-modal');
    const modalClose = document.getElementById('modal-close');
    
    if (modalClose) {
      modalClose.addEventListener('click', () => {
        this.closeImageModal();
      });
    }

    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          this.closeImageModal();
        }
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeImageModal();
      }
    });
  }

  openImageModal(imageSrc, title, description) {
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');

    if (modal && modalImage && modalTitle && modalDescription) {
      modalImage.src = imageSrc;
      modalImage.alt = title;
      modalTitle.textContent = title;
      modalDescription.textContent = description;
      
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  closeImageModal() {
    const modal = document.getElementById('image-modal');
    if (modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }

  setupWhatsAppButton() {
    const discoverMoreBtn = document.getElementById('discover-more-arab-cup');
    if (discoverMoreBtn) {
      discoverMoreBtn.addEventListener('click', () => {
        const phoneNumber = "97450532553";
        const currentLang = window.languageManager?.getCurrentLanguage() || 'en';
        const t = window.translations[currentLang];

        const message = `🏆 ${t?.blog?.cta?.title || "Arab Cup 2025 Qatar Experience"}

👋 مرحباً! أريد معرفة المزيد عن كأس العرب 2025 في قطر.

📅 التاريخ: ${new Date().toLocaleDateString()}
🕒 الوقت: ${new Date().toLocaleTimeString()}

يرجى إرسال تفاصيل الباقات والخدمات المتاحة.`;

        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(url, "_blank");
      });
    }

    // Setup culture see more button
    const cultureSeeMore = document.getElementById('culture-see-more');
    if (cultureSeeMore) {
      cultureSeeMore.addEventListener('click', () => {
        this.toggleCultureImages();
      });
    }
  }

  toggleCultureImages() {
    const additionalItems = document.querySelector('.additional-culture-items');
    const button = document.getElementById('culture-see-more');
    const icon = button.querySelector('svg');
    const text = document.getElementById('culture-see-more-text');
    
    const currentLang = window.languageManager?.getCurrentLanguage() || 'en';
    const t = window.translations[currentLang];

    if (this.expandedCulture) {
      // Collapse
      additionalItems.classList.add('hidden');
      this.expandedCulture = false;
      icon.style.transform = 'rotate(0deg)';
      text.textContent = t?.blog?.culture?.seeMore || 'See More Cultural Experiences';
    } else {
      // Expand
      additionalItems.classList.remove('hidden');
      this.expandedCulture = true;
      icon.style.transform = 'rotate(180deg)';
      text.textContent = t?.blog?.stadiums?.showLess || 'Show Less';
    }
  }

  updateBlogTranslations() {
    const currentLang = window.languageManager?.getCurrentLanguage() || 'en';
    const t = window.translations[currentLang];
    if (!t?.blog) return;

    // Update main blog elements
    const elements = {
      'blog-title': t.blog.title,
      'blog-subtitle': t.blog.subtitle,
      'intro-title': t.blog.intro.title,
      'intro-description': t.blog.intro.description,
      'stat-teams': t.blog.stats.teams,
      'stat-stadiums': t.blog.stats.stadiums,
      'stat-matches': t.blog.stats.matches,
      'stat-days': t.blog.stats.days,
      'stadiums-title': t.blog.stadiums.title,
      'stadiums-subtitle': t.blog.stadiums.subtitle,
      'culture-title': t.blog.culture.title,
      'culture-subtitle': t.blog.culture.subtitle,
      'culture-see-more-text': t.blog.culture.seeMore,
      'attractions-title': t.blog.attractions.title,
      'attractions-subtitle': t.blog.attractions.subtitle,
      'participating-title': t.blog.participating.title,
      'participating-subtitle': t.blog.participating.subtitle,
      'cta-blog-title': t.blog.cta.title,
      'cta-blog-description': t.blog.cta.description,
      'discover-more-text': t.blog.cta.discoverMore
    };

    Object.entries(elements).forEach(([id, text]) => {
      const element = document.getElementById(id);
      if (element) element.textContent = text;
    });

    // Update see more button texts
    const seeMoreTexts = document.querySelectorAll('.see-more-text');
    seeMoreTexts.forEach((text, index) => {
      if (this.expandedStadiums.has(index)) {
        text.textContent = t.blog.stadiums.showLess;
      } else {
        text.textContent = t.blog.stadiums.seeMore;
      }
    });

    // Update culture see more button
    const cultureSeeMoreText = document.getElementById('culture-see-more-text');
    if (cultureSeeMoreText) {
      if (this.expandedCulture) {
        cultureSeeMoreText.textContent = t.blog.stadiums.showLess;
      } else {
        cultureSeeMoreText.textContent = t.blog.culture.seeMore;
      }
    }

    // Update stadium data with translations if available
    this.updateStadiumDataTranslations(currentLang);
    this.updateCultureDataTranslations(currentLang);
    this.updateAttractionsDataTranslations(currentLang);
  }

  updateStadiumDataTranslations(lang) {
    if (lang === 'ar') {
      this.stadiumData = [
        {
          name: "ملعب لوسيل",
          capacity: "80,000",
          location: "مدينة لوسيل",
          description: "جوهرة تاج ملاعب قطر، يتميز بواجهة ذهبية ومرافق حديثة متطورة",
          images: this.stadiumData[0].images
        },
        {
          name: "ملعب 974",
          capacity: "40,000", 
          location: "ميناء الدوحة",
          description: "ملعب ثوري معياري مبني من حاويات الشحن، يعرض الاستدامة",
          images: this.stadiumData[1].images
        },
        {
          name: "ملعب البيت",
          capacity: "60,000",
          location: "الخور",
          description: "مستوحى من الخيام البدوية التقليدية، يمزج التراث مع التكنولوجيا الحديثة",
          images: this.stadiumData[2].images
        },
        {
          name: "ملعب الجنوب",
          capacity: "40,000",
          location: "الوكرة",
          description: "صممته زها حديد، مستوحى من قوارب الداو التي حملت غواصي اللؤلؤ",
          images: this.stadiumData[3].images
        }
      ];
    } else if (lang === 'fr') {
      this.stadiumData = [
        {
          name: "Stade de Lusail",
          capacity: "80,000",
          location: "Ville de Lusail",
          description: "Le joyau de la couronne des stades du Qatar, avec une façade dorée et des installations ultramodernes",
          images: this.stadiumData[0].images
        },
        {
          name: "Stade 974",
          capacity: "40,000",
          location: "Port de Doha", 
          description: "Stade modulaire révolutionnaire construit à partir de conteneurs d'expédition, démontrant la durabilité",
          images: this.stadiumData[1].images
        },
        {
          name: "Stade Al Bayt",
          capacity: "60,000",
          location: "Al Khor",
          description: "Inspiré des tentes bédouines traditionnelles, mélange patrimoine et technologie moderne",
          images: this.stadiumData[2].images
        },
        {
          name: "Stade Al Janoub",
          capacity: "40,000",
          location: "Al Wakrah",
          description: "Conçu par Zaha Hadid, inspiré des bateaux dhow qui transportaient les plongeurs de perles",
          images: this.stadiumData[3].images
        }
      ];
    }
  }

  updateCultureDataTranslations(lang) {
    if (lang === 'ar') {
      this.cultureData = [
        { title: "سوق واقف", description: "سوق تقليدي بأجواء قطرية أصيلة", image: this.cultureData[0].image },
        { title: "متحف الفن الإسلامي", description: "مجموعة مشهورة عالمياً من القطع الإسلامية", image: this.cultureData[1].image },
        { title: "القرية الثقافية كتارا", description: "مركز للفنون والثقافة والترفيه", image: this.cultureData[2].image },
        { title: "قوارب الداو التقليدية", description: "سفن تاريخية لغوص اللؤلؤ", image: this.cultureData[3].image },
        { title: "رحلة صحراوية", description: "مغامرة في الكثبان الذهبية", image: this.cultureData[4].image },
        { title: "تراث الصقور", description: "تجارب الصقارة التقليدية", image: this.cultureData[5].image }
      ];
    } else if (lang === 'fr') {
      this.cultureData = [
        { title: "Souq Waqif", description: "Marché traditionnel avec une atmosphère qatarie authentique", image: this.cultureData[0].image },
        { title: "Musée d'Art Islamique", description: "Collection de renommée mondiale d'artefacts islamiques", image: this.cultureData[1].image },
        { title: "Village Culturel Katara", description: "Centre des arts, de la culture et du divertissement", image: this.cultureData[2].image },
        { title: "Bateaux Dhow Traditionnels", description: "Navires historiques de plongée de perles", image: this.cultureData[3].image },
        { title: "Safari dans le Désert", description: "Aventure dans les dunes dorées", image: this.cultureData[4].image },
        { title: "Patrimoine des Faucons", description: "Expériences de fauconnerie traditionnelle", image: this.cultureData[5].image }
      ];
    }
  }

  updateAttractionsDataTranslations(lang) {
    if (lang === 'ar') {
      this.attractionsData = [
        {
          title: "اللؤلؤة قطر",
          description: "جزيرة اصطناعية فاخرة مع تسوق وطعام راقي",
          image: this.attractionsData[0].image,
          highlights: ["تسوق فاخر", "طعام راقي", "إطلالات المارينا", "أبراج سكنية"]
        },
        {
          title: "كورنيش الدوحة",
          description: "كورنيش مذهل مع إطلالات على الأفق",
          image: this.attractionsData[1].image,
          highlights: ["7 كم من الواجهة البحرية", "إطلالات الأفق", "حدائق ومتنزهات", "مواقع ثقافية"]
        },
        {
          title: "المتحف الوطني لقطر",
          description: "تحفة معمارية تعرض تاريخ وثقافة قطر",
          image: this.attractionsData[2].image,
          highlights: ["عمارة فريدة", "معارض تفاعلية", "تراث ثقافي", "تصميم حديث"]
        },
        {
          title: "حديقة أسباير",
          description: "أكبر حديقة في الدوحة مع مرافق ترفيهية",
          image: this.attractionsData[3].image,
          highlights: ["88 هكتار", "بحيرة ونوافير", "مرافق رياضية", "أنشطة عائلية"]
        },
        {
          title: "مول فيلاجيو",
          description: "وجهة تسوق بطابع البندقية مع رحلات الجندول",
          image: this.attractionsData[4].image,
          highlights: ["رحلات جندول داخلية", "تسوق فاخر", "ترفيه", "خيارات طعام"]
        },
        {
          title: "قلعة الزبارة",
          description: "موقع تراث عالمي لليونسكو يعرض تاريخ قطر",
          image: this.attractionsData[5].image,
          highlights: ["موقع يونسكو", "أهمية تاريخية", "اكتشافات أثرية", "جولات ثقافية"]
        }
      ];
    } else if (lang === 'fr') {
      this.attractionsData = [
        {
          title: "The Pearl-Qatar",
          description: "Île artificielle de luxe avec shopping et restauration haut de gamme",
          image: this.attractionsData[0].image,
          highlights: ["Shopping de luxe", "Restauration fine", "Vues marina", "Tours résidentielles"]
        },
        {
          title: "Corniche de Doha",
          description: "Promenade magnifique avec vues sur l'horizon",
          image: this.attractionsData[1].image,
          highlights: ["7km de front de mer", "Vues horizon", "Parcs & jardins", "Sites culturels"]
        },
        {
          title: "Musée National du Qatar",
          description: "Merveille architecturale présentant l'histoire et la culture du Qatar",
          image: this.attractionsData[2].image,
          highlights: ["Architecture unique", "Expositions interactives", "Patrimoine culturel", "Design moderne"]
        },
        {
          title: "Parc Aspire",
          description: "Plus grand parc de Doha avec installations récréatives",
          image: this.attractionsData[3].image,
          highlights: ["88 hectares", "Lac & fontaines", "Installations sportives", "Activités familiales"]
        },
        {
          title: "Centre Commercial Villaggio",
          description: "Destination shopping thème Venise avec promenades en gondole",
          image: this.attractionsData[4].image,
          highlights: ["Promenades gondole intérieures", "Shopping luxe", "Divertissement", "Options restauration"]
        },
        {
          title: "Fort Al Zubarah",
          description: "Site du patrimoine mondial UNESCO présentant l'histoire du Qatar",
          image: this.attractionsData[5].image,
          highlights: ["Site UNESCO", "Importance historique", "Découvertes archéologiques", "Tours culturels"]
        }
      ];
    }
  }
}

// Initialize blog manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.blogManager = new BlogManager();
});