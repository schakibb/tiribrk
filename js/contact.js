// Contact page specific functionality
class ContactManager {
  constructor() {
    this.isSubmitted = false
    this.apiBaseUrl = "http://localhost:3000"
    this.init()
  }

  init() {
    this.setupContactForm()
    this.updateContactTranslations()

    // Listen for language changes
    document.addEventListener("languageChanged", () => {
      this.updateContactTranslations()
    })
  }

  setupContactForm() {
    const contactForm = document.getElementById("contact-form")
    if (!contactForm) return

    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault()

      const formData = {
        name: document.getElementById("contact-name").value.trim(),
        email: document.getElementById("contact-email").value.trim(),
        phone: document.getElementById("contact-phone").value.trim(),
        service: document.getElementById("contact-subject").value.trim(), // Map subject to service
        message: document.getElementById("contact-message").value.trim(),
      }

      const submitBtn = document.getElementById("contact-submit")
      const sendButtonText = document.getElementById("send-button-text")

      const currentLang = window.languageManager?.getCurrentLanguage() || "en"
      const t = window.translations[currentLang]

      // Validation
      if (!formData.name || !formData.email || !formData.message) {
        this.showNotification(
          "error",
          t?.notifications?.error || "Error",
          t?.notifications?.fillAllFields || "Please fill in all required fields (Name, Email, Message)",
        )
        return
      }

      if (!this.validateEmail(formData.email)) {
        this.showNotification(
          "error",
          t?.notifications?.invalidEmail || "Invalid Email",
          t?.notifications?.validEmailRequired || "Please enter a valid email address",
        )
        return
      }

      if (formData.phone && !this.validatePhone(formData.phone)) {
        this.showNotification(
          "error",
          t?.notifications?.error || "Error",
          t?.notifications?.validPhoneRequired ||
            "Please enter a valid phone number with country code (e.g., +974-1234-5678)",
        )
        return
      }

      if (formData.message.length < 10) {
        this.showNotification(
          "error",
          t?.notifications?.error || "Error",
          "Message must be at least 10 characters long",
        )
        return
      }

      // Show loading state
      const originalText = sendButtonText.textContent
      sendButtonText.textContent = t?.bookingForm?.sending || "Sending..."
      submitBtn.disabled = true

      try {
        // Call actual API
        const response = await fetch(`${this.apiBaseUrl}/api/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone || undefined, // Don't send empty string
            service: formData.service || undefined, // Don't send empty string
            message: formData.message,
          }),
        })

        const result = await response.json()

        if (result.success) {
          this.showNotification(
            "success",
            t?.notifications?.success || "Success!",
            t?.notifications?.messageSent || "Your message has been sent successfully! We'll get back to you soon.",
          )

          // Show success state
          this.showSuccessState()

          // Reset form after 3 seconds
          setTimeout(() => {
            this.resetForm()
          }, 3000)
        } else {
          // Handle API errors
          if (result.details && Array.isArray(result.details)) {
            // Show field-specific validation errors
            const errorMessages = result.details.map((error) => `${error.field}: ${error.message}`).join("\n")
            this.showNotification("error", t?.notifications?.error || "Validation Error", errorMessages)
          } else {
            this.showNotification(
              "error",
              t?.notifications?.error || "Error",
              result.error || result.message || t?.notifications?.genericError || "Failed to send message",
            )
          }
        }
      } catch (error) {
        console.error("Contact form error:", error)

        if (error.name === "TypeError" && error.message.includes("fetch")) {
          this.showNotification(
            "error",
            t?.notifications?.connectionError || "Connection Error",
            t?.notifications?.connectionErrorMessage ||
              "Unable to connect to server. Please check if the server is running.",
          )
        } else {
          this.showNotification(
            "error",
            t?.notifications?.error || "Error",
            t?.notifications?.genericError || "Failed to send message. Please try again.",
          )
        }
      } finally {
        sendButtonText.textContent = originalText
        submitBtn.disabled = false
      }
    })
  }

  showSuccessState() {
    const formContainer = document.getElementById("contact-form")
    const successContainer = document.getElementById("contact-success")

    if (formContainer && successContainer) {
      formContainer.classList.add("hidden")
      successContainer.classList.remove("hidden")
      this.isSubmitted = true
    }
  }

  resetForm() {
    const formContainer = document.getElementById("contact-form")
    const successContainer = document.getElementById("contact-success")
    const form = document.getElementById("contact-form")

    if (formContainer && successContainer && form) {
      successContainer.classList.add("hidden")
      formContainer.classList.remove("hidden")
      form.reset()
      this.isSubmitted = false
    }
  }

  updateContactTranslations() {
    const currentLang = window.languageManager?.getCurrentLanguage() || "en"
    const t = window.translations[currentLang]
    if (!t) return

    // Update contact page specific elements
    const contactElements = {
      "contact-title": "Contact Us",
      "contact-subtitle": "Get in touch with us for any inquiries or assistance",
      "get-in-touch": "Get In Touch",
      "send-message": "Send us a Message",
      "name-label": "Full Name *",
      "email-input-label": "Email *",
      "phone-input-label": "Phone Number",
      "subject-label": "Subject *",
      "message-label": "Message *",
      "send-button-text": "Send Message",
      "message-sent": "Message Sent!",
      "thank-you": "Thank you for contacting us. We'll get back to you soon!",
      "phone-label": "Phone",
      "email-label": "Email",
      "hours-label": "Reception Hours",
    }

    // Update placeholders
    const placeholders = {
      "contact-name": "Enter your full name",
      "contact-email": "your.email@example.com",
      "contact-phone": "+974-XXXX-XXXX",
      "contact-subject": "What is this about?",
      "contact-message": "Tell us how we can help you... (minimum 10 characters)",
    }

    // Apply translations
    Object.entries(contactElements).forEach(([id, defaultText]) => {
      const element = document.getElementById(id)
      if (element) {
        // Try to get translation, fallback to default
        const translationPath = this.getTranslationPath(id)
        const translatedText = this.getNestedTranslation(t, translationPath) || defaultText
        element.textContent = translatedText
      }
    })

    // Apply placeholder translations
    Object.entries(placeholders).forEach(([id, defaultPlaceholder]) => {
      const element = document.getElementById(id)
      if (element) {
        const translationPath = this.getPlaceholderTranslationPath(id)
        const translatedPlaceholder = this.getNestedTranslation(t, translationPath) || defaultPlaceholder
        element.placeholder = translatedPlaceholder
      }
    })
  }

  getTranslationPath(elementId) {
    const pathMap = {
      "contact-title": "contact.title",
      "contact-subtitle": "contact.subtitle",
      "get-in-touch": "contact.getInTouch",
      "send-message": "contact.sendMessage",
      "name-label": "contact.fullName",
      "email-input-label": "contact.email",
      "phone-input-label": "contact.phoneNumber",
      "subject-label": "contact.subject",
      "message-label": "contact.message",
      "send-button-text": "contact.send",
      "message-sent": "contact.messageSent",
      "thank-you": "contact.thankYou",
      "phone-label": "contact.phone",
      "email-label": "contact.email",
      "hours-label": "contact.receptionHours",
    }
    return pathMap[elementId] || ""
  }

  getPlaceholderTranslationPath(elementId) {
    const pathMap = {
      "contact-name": "contact.namePlaceholder",
      "contact-email": "contact.emailPlaceholder",
      "contact-phone": "contact.phonePlaceholder",
      "contact-subject": "contact.subjectPlaceholder",
      "contact-message": "contact.messagePlaceholder",
    }
    return pathMap[elementId] || ""
  }

  getNestedTranslation(obj, path) {
    return path.split(".").reduce((current, key) => current?.[key], obj)
  }

  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  validatePhone(phone) {
    // More flexible phone validation for international numbers
    const phoneRegex = /^\+?[1-9]\d{1,14}$/
    const cleanPhone = phone.replace(/[\s\-$$$$]/g, "")
    return phoneRegex.test(cleanPhone)
  }

  showNotification(type, title, message) {
    if (window.notificationManager) {
      window.notificationManager.show(type, title, message)
    } else {
      // Fallback if notification manager is not available
      alert(`${title}: ${message}`)
    }
  }

  // Health check method to test API connection
  async checkApiHealth() {
    try {
      const response = await fetch(`${this.apiBaseUrl}`)
      const result = await response.json()
      console.log("API Health:", result.message)
      return result.success
    } catch (error) {
      console.error("API Health Check Failed:", error)
      return false
    }
  }
}

// Initialize contact manager when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  window.contactManager = new ContactManager()

  // Optional: Check API health on load
  window.contactManager.checkApiHealth()
})
