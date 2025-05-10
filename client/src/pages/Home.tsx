import { Link } from 'wouter';
import ImageCarousel from '@/components/ImageCarousel';
import { carouselImages } from '@/data/menuItems';
import { images, restaurantInfo } from '@/data/assets';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div 
          className="w-full h-96 md:h-[500px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${images.HOTBanner})`,
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 playfair">
                Welcome to <span className="text-primary">HOT</span> Restaurant
              </h1>
              <p className="text-xl text-white mb-8">{restaurantInfo.slogan}</p>
              <Link href="/menu" className="bg-primary hover:bg-accent text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-block">
                View Our Menu
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Dishes Carousel */}
      <section className="py-12 px-4 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center playfair">Featured Dishes</h2>
          <ImageCarousel images={carouselImages} />
        </div>
      </section>
      
      {/* About Section Preview */}
      <section className="py-12 px-4 bg-black">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 playfair">Our <span className="text-primary">Story</span></h2>
              <p className="text-gray-300 mb-4">
                Welcome to <strong>HOT Restaurant</strong>, where we serve delicious, homemade dishes made with HEAT. 
                Our journey started in 2025 when our founders, Mike and Steve, had a vision of creating a place where friends 
                and families could gather to enjoy HOT and flavorful food.
              </p>
              <p className="text-gray-300 mb-6">
                We take pride in using high-quality, locally sourced ingredients to craft our signature dishes. 
                From our famous HOT Burger to our handcrafted desserts, every bite is made with passion.
              </p>
              <Link href="/about" className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-2 px-6 rounded-full transition duration-300">
                Read More
              </Link>
            </div>
            
            <div className="md:w-1/2 mt-6 md:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="HOT Restaurant interior" 
                className="rounded-lg shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Business Hours & Info */}
      <section className="py-8 px-4 bg-secondary">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 playfair">Business Hours</h2>
          <p className="text-gray-300 text-lg">Monday - Sunday: 10 AM - 10 PM</p>
          
          <div className="mt-6 flex justify-center space-x-4">
            <a href="#" className="text-white hover:text-primary transition duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-primary transition duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
