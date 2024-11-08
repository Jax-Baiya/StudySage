
// ...existing code...

// Suppress ResizeObserver loop error
const resizeObserverErrHandler = (e) => {
  if (e.message === 'ResizeObserver loop completed with undelivered notifications.') {
    e.stopImmediatePropagation();
  }
};

window.addEventListener('error', resizeObserverErrHandler);
window.addEventListener('unhandledrejection', resizeObserverErrHandler);

// ...existing code...