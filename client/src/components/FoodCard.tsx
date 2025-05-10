import { useCart } from '../context/CartContext';
import { formatCurrency } from '../lib/utils';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface FoodCardProps {
  item: MenuItem;
}

const FoodCard: React.FC<FoodCardProps> = ({ item }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-[1.02]">
      <img 
        src={item.image} 
        alt={item.name} 
        className="w-full h-48 object-cover" 
      />
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{item.name}</h3>
        <p className="text-gray-400 mb-4">{item.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-primary font-bold text-lg">{formatCurrency(item.price)}</span>
          <button 
            onClick={handleAddToCart}
            className="bg-primary hover:bg-accent text-white py-2 px-4 rounded transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
