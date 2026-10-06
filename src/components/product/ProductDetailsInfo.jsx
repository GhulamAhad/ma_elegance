import ProductRating from "./ProductRating";
import ProductPrice from "./ProductPrice";

function ProductDetailsInfo({ product }) {

  return (
    <div>

      <p className="uppercase tracking-[5px] text-[#C9A227] font-semibold">

        {product.brand}

      </p>

      <h1 className="text-5xl font-bold mt-5">

        {product.name}

      </h1>

      <ProductRating
        rating={product.rating}
        reviews={product.reviews}
      />

      <ProductPrice
        price={product.price}
        oldPrice={product.oldPrice}
      />

      <p className="mt-8 text-gray-600 leading-8">

        {product.description}

      </p>

      <div className="mt-10">

        <h3 className="font-semibold mb-4">

          Quantity

        </h3>

        <div className="flex items-center gap-4">

          <button className="w-12 h-12 border rounded-xl">
            -
          </button>

          <span className="text-xl font-semibold">
            1
          </span>

          <button className="w-12 h-12 border rounded-xl">
            +
          </button>

        </div>

      </div>

      <div className="flex gap-5 mt-12">

        <button className="flex-1 bg-black text-white py-4 rounded-xl hover:bg-[#C9A227] transition">

          Add To Cart

        </button>

        <button className="flex-1 border-2 border-black py-4 rounded-xl hover:bg-black hover:text-white transition">

          Buy Now

        </button>

      </div>

    </div>
  );
}

export default ProductDetailsInfo;