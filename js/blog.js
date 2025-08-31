// Blog page specific functionality
class BlogManager {
  constructor() {
    this.init();
  }

  init() {
    this.setupArabCountries();
    this.setupBlogTranslations();
    
    document.addEventListener('languageChanged', () => {
      this.setupBlogTranslations();
    });
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
        <div class="bg-white dark:bg-gray-900 rounded-lg p-3 text-center border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-200">
          <span class="text-sm font-medium text-gray-900 dark:text-white">${country}</span>
        </div>
      `).join('');
    }
  }

  setupBlogTranslations() {
    // but we can add basic navigation and footer translations
    const currentLang = window.languageManager?.getCurrentLanguage() || 'en';
    const t = window.translations[currentLang];
    if (!t) return;

  }
}

// Initialize blog manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.blogManager = new BlogManager();
});