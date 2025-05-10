import { MenuItem } from '../components/FoodCard';
import { images } from './assets';

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'HOT MacnCheese',
    description: 'MacnCheese with ghost pepper flakes',
    price: 30.99,
    image: images.mac
  },
  {
    id: '2',
    name: 'HOT Burger',
    description: 'American beef burger with Carolina Reaper slices',
    price: 50.99,
    image: images.burger
  },
  {
    id: '3',
    name: 'HOT Meatballs',
    description: 'Classic meatballs with a HOT jalapeño twist',
    price: 10.99,
    image: images.meatball
  },
  {
    id: '4',
    name: 'HOT Steak',
    description: 'Thick sirloin with Trinidad Moruga Scorpion heat',
    price: 60.99,
    image: images.steak
  },
  {
    id: '5',
    name: 'HOT Corndogs',
    description: 'Classic corndogs that spice things up',
    price: 10.99,
    image: images.corndog
  },
  {
    id: '6',
    name: 'HOT Chocolate Pie',
    description: 'Sweet, savory, and spicy in one dessert',
    price: 15.99,
    image: images.pie
  }
];

export const carouselImages = [
  {
    src: images.steak,
    alt: 'Juicy grilled steak',
    title: 'HOT Steak',
    description: 'Thick sirloin with Trinidad Moruga Scorpion heat'
  },
  {
    src: images.burger,
    alt: 'Double cheeseburger',
    title: 'HOT Burger',
    description: 'American beef burger with Carolina Reaper slices'
  },
  {
    src: images.pie,
    alt: 'Chocolate pie',
    title: 'HOT Chocolate Pie',
    description: 'Sweet, savory, and spicy in one dessert'
  }
];
