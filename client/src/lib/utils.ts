import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', { 
    style: 'currency', 
    currency: 'USD' 
  }).format(amount);
}

// Used to initialize Google Maps
export function initMap(elementId: string, lat: number = 61.1903, lng: number = -149.8976) {
  if (window.google && window.google.maps) {
    const restaurantLocation = { lat, lng };
    const map = new google.maps.Map(document.getElementById(elementId) as HTMLElement, {
      zoom: 14,
      center: restaurantLocation,
      mapTypeId: "roadmap"
    });
    
    new google.maps.Marker({
      position: restaurantLocation,
      map: map,
      title: "4333 Spenard Rd, Anchorage, AK 99517"
    });
  }
}
