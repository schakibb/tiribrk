// Notification system
class NotificationManager {
  constructor() {
    this.container = document.getElementById('notification-container');
    this.notifications = [];
  }

  show(type, title, message, autoHideDelay = 5000) {
    const id = Date.now().toString();
    const notification = this.createNotification(id, type, title, message);
    
    if (this.container) {
      this.container.appendChild(notification);
      
      // Trigger entrance animation
      setTimeout(() => {
        notification.classList.add('notification-enter');
      }, 10);

      // Auto-hide after delay
      if (autoHideDelay > 0) {
        setTimeout(() => {
          this.hide(id);
        }, autoHideDelay);
      }
    }

    this.notifications.push({ id, element: notification });
  }

  createNotification(id, type, title, message) {
    const notification = document.createElement('div');
    notification.id = `notification-${id}`;
    notification.className = 'transition-all duration-300 transform translate-x-0 opacity-100 mb-4';

    const bgColor = type === 'success' ? 'bg-green-600 border-green-700 text-white' :
                   type === 'error' ? 'bg-red-600 border-red-700 text-white' :
                   'bg-yellow-500 border-yellow-600 text-black';

    const icon = type === 'success' ? 
      '<svg class="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>' :
      '<svg class="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>';

    notification.innerHTML = `
      <div class="rounded-lg shadow-lg border p-3 sm:p-4 ${bgColor}">
        <div class="flex items-start gap-2 sm:gap-3">
          <div class="flex-shrink-0 mt-0.5">
            ${icon}
          </div>
          <div class="flex-1 min-w-0">
            <h3 class="text-xs sm:text-sm font-medium truncate pr-1">${title}</h3>
            <p class="mt-1 text-xs sm:text-sm opacity-90 leading-relaxed break-words">${message}</p>
          </div>
          <button class="notification-close flex-shrink-0 rounded-md p-1 hover:bg-black/10 dark:hover:bg-white/10 transition-colors focus:outline-none" data-id="${id}">
            <svg class="h-3 w-3 sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    `;

    // Add close functionality
    const closeBtn = notification.querySelector('.notification-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        this.hide(id);
      });
    }

    return notification;
  }

  hide(id) {
    const notification = document.getElementById(`notification-${id}`);
    if (!notification) return;

    notification.classList.add('notification-exit');
    
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
      this.notifications = this.notifications.filter(n => n.id !== id);
    }, 300);
  }

  clear() {
    this.notifications.forEach(({ id }) => this.hide(id));
  }
}

// Initialize notification manager
window.notificationManager = new NotificationManager();