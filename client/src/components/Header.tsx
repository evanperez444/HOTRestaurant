import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { getTotalItems } = useCart();
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-secondary sticky top-0 z-50 shadow-md px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <h1 className="text-primary font-serif text-3xl font-bold playfair">HOT</h1>
            <span className="text-white text-xl ml-2">Restaurant</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navLinks.map(link => (
              <li 
                key={link.path} 
                className={`border-b-2 ${location === link.path ? 'border-primary' : 'border-transparent'}`}
              >
                <Link href={link.path} className="text-white hover:text-primary transition duration-200">
                  {link.label}
                </Link>
              </li>
            ))}
            
            {/* Cart indicator with item count */}
            <li className="relative">
              <Link href="/menu" className="text-white hover:text-primary transition duration-200 flex items-center relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {getTotalItems() > 0 && (
                  <span className="bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center absolute -top-2 -right-2">
                    {getTotalItems()}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
        
        {/* Mobile Hamburger Button */}
        <button 
          onClick={toggleMobileMenu} 
          className="md:hidden text-white focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-secondary slide-down">
          <ul className="py-2">
            {navLinks.map(link => (
              <li key={link.path} className="border-b border-gray-700">
                <Link 
                  href={link.path} 
                  className="block px-4 py-2 text-white hover:bg-gray-800 transition duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link 
                href="/menu" 
                className="block px-4 py-2 text-white hover:bg-gray-800 transition duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Cart ({getTotalItems()})
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
