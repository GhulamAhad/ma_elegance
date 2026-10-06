import perfume1 from "../assets/images/products/perfume1.jpg";
import perfume2 from "../assets/images/products/perfume2.jpg";
import bag1 from "../assets/images/products/handbag1.jpg";
import watch1 from "../assets/images/products/watch1.jpg";

const products = [
  {
    id: 1,
    name: "Royal Oud Perfume",
    slug: "royal-oud-perfume",
    brand: "MA ELEGANCE",
    category: "Perfume",
    description: "Luxury fragrance with a rich oud aroma.",
    price: 4999,
    oldPrice: 5999,
    discount: 17,
    rating: 5,
    reviews: 128,
    stock: 20,
    badge: "New",
    isNew: true,
    image: perfume1,
  },

  {
    id: 2,
    name: "Luxury Leather Bag",
    slug: "luxury-leather-bag",
    brand: "MA ELEGANCE",
    category: "Handbag",
    description: "Premium leather handbag for everyday elegance.",
    price: 6999,
    oldPrice: 8499,
    discount: 18,
    rating: 5,
    reviews: 92,
    stock: 15,
    badge: "Best Seller",
    isNew: false,
    image: bag1,
  },

  {
    id: 3,
    name: "Diamond Watch",
    slug: "diamond-watch",
    brand: "MA ELEGANCE",
    category: "Watch",
    description: "Luxury watch crafted with timeless elegance.",
    price: 8999,
    oldPrice: 10999,
    discount: 18,
    rating: 4,
    reviews: 65,
    stock: 8,
    badge: "Sale",
    isNew: false,
    image: watch1,
  },

  {
    id: 4,
    name: "Signature Perfume",
    slug: "signature-perfume",
    brand: "MA ELEGANCE",
    category: "Perfume",
    description: "Long-lasting premium fragrance for every occasion.",
    price: 3999,
    oldPrice: 4999,
    discount: 20,
    rating: 5,
    reviews: 110,
    stock: 30,
    badge: "New",
    isNew: true,
    image: perfume2,
  },
];

export default products;