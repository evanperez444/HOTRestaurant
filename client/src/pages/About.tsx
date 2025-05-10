const About = () => {
  return (
    <section className="py-12 px-4 bg-black">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center playfair">About <span className="text-primary">HOT</span> Restaurant</h1>
        
        <img 
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600" 
          alt="HOT Restaurant interior" 
          className="rounded-lg shadow-lg w-full h-auto mb-8" 
        />
        
        <div className="text-gray-300 space-y-6">
          <p className="text-lg">
            Welcome to <strong className="text-white">HOT Restaurant</strong>, where we serve delicious, homemade dishes made with HEAT. 
            Our journey started in 2025 when our founders, Mike and Steve, had a vision of creating a place where friends 
            and families could gather to enjoy HOT and flavorful food.
          </p>
          
          <p className="text-lg">
            We take pride in using high-quality, locally sourced ingredients to craft our signature dishes. 
            From our famous HOT Burger to our handcrafted desserts, every bite is made with passion.
          </p>
          
          <p className="text-lg">
            Whether you're here for a casual lunch, a special dinner, or a weekend brunch, we welcome you to our 
            cozy and inviting space. Our goal is to create unforgettable dining experiences for our guests.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
