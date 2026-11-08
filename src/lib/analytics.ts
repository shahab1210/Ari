// Lightweight conversion event tracking utility

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export function trackConversion(eventName: string, params?: Record<string, any>) {
  if (typeof window === "undefined") return;

  // Log in development mode
  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics Event] ${eventName}:`, params);
  }

  // Forward to Google Analytics / GTag if present
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }

  // Dispatch custom browser event for tag managers or custom listeners
  try {
    const customEvent = new CustomEvent("conversion_event", {
      detail: { eventName, ...params, timestamp: new Date().toISOString() },
    });
    window.dispatchEvent(customEvent);
  } catch {
    // Ignore custom event failures in older environments
  }
}
