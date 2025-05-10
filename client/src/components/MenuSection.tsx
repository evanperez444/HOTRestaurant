import FoodCard, { MenuItem } from './FoodCard';

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, items }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-primary">{title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(item => (
          <FoodCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
