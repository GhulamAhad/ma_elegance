import { FaShoppingBag } from "react-icons/fa";

function ProductActions() {
  return (
    <button className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-[#111] py-3 text-white transition hover:bg-[#C9A227]">
      <FaShoppingBag />
      Add to Cart
    </button>
  );
}

export default ProductActions;