// Form handling functionality
class FormManager {
  constructor() {
    this.apiBaseUrl = "http://localhost:3000"
    this.init()
  }

  init() {
    this.setupBookingForm() // WhatsApp inquiry form
    this.setupNewsletterForm()
    this.setupWhatsAppFloat()
  }

  setupBookingForm() {
    const bookingForm = document.getElementById("booking-form")
    if (!bookingForm) return

    bookingForm.addEventListener("submit", async (e) => {
      e.preventDefault()

      const name = document.getElementById("booking-name").value.trim()
      const phone = document.getElementById("booking-phone").value.trim()
      const tripDetails = document.getElementById("booking-trip").value.trim()
      const submitBtn = document.getElementById("booking-submit")

      const currentLang = window.languageManager?.getCurrentLanguage() || "en"
      const t = window.translations[currentLang]

      // Validation
      if (!name || !phone || !tripDetails) {
        this.showNotification(
          "error",
          t?.notifications?.error || "Error",
          t?.notifications?.fillAllFields || "Please fill in all required fields (Name, Phone, Trip Details)",
        )
        return
      }

      if (!this.validatePhone(phone)) {
        this.showNotification(
          "error",
          t?.notifications?.error || "Error",
          t?.notifications?.validPhoneRequired ||
            "Please enter a valid phone number with country code (e.g., +974-1234-5678)",
        )
        return
      }

      // Show loading state
      const originalText = submitBtn.textContent
      submitBtn.textContent = t?.bookingForm?.sending || "Sending..."
      submitBtn.disabled = true

      try {
        // Call WhatsApp API endpoint
        const response = await fetch(`${this.apiBaseUrl}/api/whatsapp`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            phone: phone,
            tripDetails: tripDetails,
          }),
        })

        const result = await response.json()

        if (result.success) {
          this.showNotification(
            "success",
            t?.notifications?.success || "Success!",
            t?.notifications?.formSubmitted || "WhatsApp inquiry submitted successfully! We'll contact you soon.",
          )

          // Build WhatsApp message for direct contact
          const myNumber = "974505532553"
          const message = `🌟 New Booking Request

👤 Name: ${name}
📱 Phone: ${phone}
✈️ Trip Details: ${tripDetails}

📅 Submitted: ${new Date().toLocaleDateString()}
🕒 Time: ${new Date().toLocaleTimeString()}`

          const encodedMessage = encodeURIComponent(message)
          const url = `https://wa.me/${myNumber}?text=${encodedMessage}`

          // Delay opening WhatsApp so user sees success notification first
          setTimeout(() => {
            window.open(url, "_blank")
          }, 1200)

          // Reset form
          bookingForm.reset()
        } else {
          // Handle API errors
          if (result.details && Array.isArray(result.details)) {
            const errorMessages = result.details.map((error) => `${error.field}: ${error.message}`).join("\n")
            this.showNotification("error", t?.notifications?.error || "Validation Error", errorMessages)
          } else {
            this.showNotification(
              "error",
              t?.notifications?.error || "Error",
              result.error || result.message || t?.notifications?.genericError || "Failed to submit inquiry",
            )
          }
        }
      } catch (error) {
        console.error("WhatsApp booking error:", error)

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
            t?.notifications?.genericError || "Booking failed. Please try again.",
          )
        }
      } finally {
        submitBtn.textContent = originalText
        submitBtn.disabled = false
      }
    })
  }

  setupNewsletterForm() {
    const newsletterForm = document.getElementById("newsletter-form")
    if (!newsletterForm) return

    newsletterForm.addEventListener("submit", async (e) => {
      e.preventDefault()

      const email = document.getElementById("newsletter-email").value.trim()
      const submitBtn = document.getElementById("newsletter-submit")
      const btnText = document.getElementById("newsletter-btn-text")

      const currentLang = window.languageManager?.getCurrentLanguage() || "en"
      const t = window.translations[currentLang]

      if (!email) {
        this.showNotification(
          "error",
          t?.notifications?.error || "Error",
          t?.notifications?.emailRequired || "Please enter your email address",
        )
        return
      }

      if (!this.validateEmail(email)) {
        this.showNotification(
          "error",
          t?.notifications?.invalidEmail || "Invalid Email",
          t?.notifications?.validEmailRequired || "Please enter a valid email address",
        )
        return
      }

      // Show loading state
      const originalText = btnText.textContent
      btnText.textContent = t?.notifications?.subscribing || "Subscribing..."
      submitBtn.disabled = true

      try {
        // Call Newsletter API endpoint
        const response = await fetch(`${this.apiBaseUrl}/api/newsletter`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
          }),
        })

        const result = await response.json()

        if (result.success) {
          this.showNotification(
            "success",
            t?.notifications?.success || "Success!",
            t?.notifications?.subscribeSuccess || "Successfully subscribed to newsletter! Welcome aboard.",
          )
          newsletterForm.reset()
        } else {
          // Handle specific error cases
          if (result.error === "Email already subscribed to newsletter") {
            this.showNotification(
              "error",
              t?.notifications?.alreadySubscribed || "Already Subscribed",
              t?.notifications?.emailAlreadySubscribed || "This email is already subscribed to our newsletter.",
            )
          } else if (result.details && Array.isArray(result.details)) {
            const errorMessages = result.details.map((error) => `${error.field}: ${error.message}`).join("\n")
            this.showNotification("error", t?.notifications?.error || "Validation Error", errorMessages)
          } else {
            this.showNotification(
              "error",
              t?.notifications?.subscriptionFailed || "Subscription Failed",
              result.error ||
                result.message ||
                t?.notifications?.subscribeFailed ||
                "Failed to subscribe. Please try again.",
            )
          }
        }
      } catch (error) {
        console.error("Newsletter subscription error:", error)

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
            t?.notifications?.subscriptionFailed || "Subscription Failed",
            t?.notifications?.subscribeFailed || "Failed to subscribe. Please try again.",
          )
        }
      } finally {
        btnText.textContent = originalText
        submitBtn.disabled = false
      }
    })
  }

  setupWhatsAppFloat() {
    const whatsappFloat = document.getElementById("whatsapp-float")
    if (!whatsappFloat) return

    whatsappFloat.addEventListener("click", () => {
      const phoneNumber = "97450532553"
      const message = "Hi Manehej! I'm interested in your photography services."
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, "_blank")
    })
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

  // Rate limiting handler
  handleRateLimitError(error) {
    const currentLang = window.languageManager?.getCurrentLanguage() || "en"
    const t = window.translations[currentLang]

    if (error.retryAfter) {
      this.showNotification(
        "error",
        t?.notifications?.rateLimitExceeded || "Too Many Requests",
        t?.notifications?.tooManyAttempts ||
          `You've sent too many requests. Please wait ${error.retryAfter} before trying again.`,
      )
    } else {
      this.showNotification(
        "error",
        t?.notifications?.rateLimitExceeded || "Rate Limited",
        t?.notifications?.tooManyAttempts || "Too many requests. Please wait a moment and try again.",
      )
    }
  }
}

// Initialize form manager
document.addEventListener("DOMContentLoaded", () => {
  window.formManager = new FormManager()

  // Optional: Check API health on load
  window.formManager.checkApiHealth()
})
