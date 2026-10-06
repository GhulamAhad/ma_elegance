import { FaHeart, FaShoppingBag, FaStar } from "react-icons/fa";

function ProductCard({ product }) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition duration-500">

      {/* Image */}
      <div className="relative overflow-hidden">

        <img
          src={product.image}
          alt={product.title}
          className="h-[340px] w-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Badge */}
        <span className="absolute top-5 left-5 bg-[#C9A227] text-white px-3 py-1 rounded-full text-xs uppercase tracking-wider">
          {product.badge}
        </span>

        {/* Wishlist */}
        <button className="absolute top-5 right-5 h-11 w-11 rounded-full bg-white shadow flex items-center justify-center hover:bg-[#C9A227] hover:text-white transition">
          <FaHeart />
        </button>

      </div>

      {/* Content */}
      <div className="p-6">

        <p className="text-sm text-[#C9A227] uppercase tracking-wider">
          {product.category}
        </p>

        <h3 className="mt-2 text-xl font-semibold">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="flex gap-1 text-yellow-400 mt-3">
          {[...Array(product.rating)].map((_, index) => (
            <FaStar key={index} />
          ))}
        </div>

        <div className="flex items-center justify-between mt-5">

          <h4 className="text-2xl font-bold">
            Rs {product.price}
          </h4>

          <button className="h-11 w-11 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#C9A227] transition">
            <FaShoppingBag />
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;