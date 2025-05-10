import MenuSection from '@/components/MenuSection';
import ShoppingCart from '@/components/ShoppingCart';
import { menuItems } from '@/data/menuItems';

const Menu = () => {
  return (
    <section className="py-12 px-4 bg-black">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center playfair">Our <span className="text-primary">Menu</span></h1>
        
        <MenuSection title="Main Selections" items={menuItems} />
        
        <ShoppingCart />
      </div>
    </section>
  );
};

export default Menu;
