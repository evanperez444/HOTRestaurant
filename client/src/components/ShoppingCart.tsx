import { useCart } from '../context/CartContext';
import { formatCurrency } from '../lib/utils';

const ShoppingCart = () => {
  const { cartItems, removeFromCart, clearCart, calculateTotal } = useCart();

  return (
    <div className="mt-12 max-w-md mx-auto bg-card rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-primary">Your Cart</h2>
      
      <ul className="mb-4 divide-y divide-gray-700">
        {cartItems.length === 0 ? (
          <li className="py-4 text-center text-gray-400">
            Your cart is empty
          </li>
        ) : (
          cartItems.map(item => (
            <li key={item.id} className="py-4 flex justify-between">
              <div>
                <span className="font-medium">{item.name}</span>
                <span className="text-gray-400 ml-2">(x{item.quantity})</span>
              </div>
              <div className="flex items-center">
                <span className="text-primary font-medium">
                  {formatCurrency(item.price * item.quantity)}
                </span>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 text-red-500 hover:text-red-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
      
      <div className="flex justify-between items-center py-4 border-t border-gray-700">
        <span className="text-lg font-bold">Total:</span>
        <span className="text-lg font-bold text-primary">{formatCurrency(calculateTotal())}</span>
      </div>
      
      <button 
        onClick={clearCart}
        className="w-full bg-primary hover:bg-accent text-white font-bold py-2 px-4 rounded transition duration-300 mt-4"
        disabled={cartItems.length === 0}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default ShoppingCart;
