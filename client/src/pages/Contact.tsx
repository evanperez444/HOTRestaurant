import { useEffect } from 'react';
import ContactForm from '@/components/ContactForm';
import { initMap } from '@/lib/utils';

const Contact = () => {
  useEffect(() => {
    // Load Google Maps script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY || "AIzaSyAJsEc78RCDesFFpiAvSsiUaC8muH7y0rM"}&callback=initMapCallback`;
    script.async = true;
    script.defer = true;
    
    // Define callback in window object
    window.initMapCallback = () => {
      initMap('map');
    };
    
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
      delete window.initMapCallback;
    };
  }, []);

  return (
    <section className="py-12 px-4 bg-black">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold mb-8 text-center playfair">Contact <span className="text-primary">Us</span></h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Map Container */}
          <div className="bg-card rounded-lg overflow-hidden shadow-lg h-96">
            <div id="map" className="w-full h-full"></div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-card rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            
            <ContactForm />
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Business Information</h3>
              <p className="text-gray-300 mb-2">
                <strong>Address:</strong> 4333 Spenard Rd, Anchorage, AK 99517
              </p>
              <p className="text-gray-300 mb-2">
                <strong>Phone:</strong> (907) 555-1234
              </p>
              <p className="text-gray-300">
                <strong>Hours:</strong> Monday - Sunday, 10 AM - 10 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add type definition for window
declare global {
  interface Window {
    initMapCallback: () => void;
    google: any;
  }
}

export default Contact;
