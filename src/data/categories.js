import perfume from "../assets/images/categories/perfume.jpg";
import handbag from "../assets/images/categories/handbag.jpg";
import jewelry from "../assets/images/categories/jewelry.jpg";
import watch from "../assets/images/categories/watch.jpg";

const categories = [
  {
    id: 1,
    title: "Perfumes",
    image: perfume,
    link: "/shop?category=perfumes",
  },
  {
    id: 2,
    title: "Handbags",
    image: handbag,
    link: "/shop?category=handbags",
  },
  {
    id: 3,
    title: "Jewelry",
    image: jewelry,
    link: "/shop?category=jewelry",
  },
  {
    id: 4,
    title: "Watches",
    image: watch,
    link: "/shop?category=watches",
  },
];

export default categories;