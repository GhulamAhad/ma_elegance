import { useMemo, useState } from "react";

import products from "../../data/products";

import ShopHero from "../../components/shop/ShopHero";
import ShopSidebar from "../../components/shop/ShopSidebar";
import ShopToolbar from "../../components/shop/ShopToolbar";
import ProductGrid from "../../components/shop/ProductGrid";
import Container from "../../components/common/Container";

function Shop() {

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [sortBy, setSortBy] = useState("Newest");

  const filteredProducts = useMemo(() => {

    let data = [...products];

    // Search
    if (searchTerm) {
      data = data.filter((product) =>
        product.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    }

    // Category
    if (selectedCategory !== "All") {
      data = data.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Sorting
    switch (sortBy) {

      case "Price Low":
        data.sort((a, b) => a.price - b.price);
        break;

      case "Price High":
        data.sort((a, b) => b.price - a.price);
        break;

      case "Rating":
        data.sort((a, b) => b.rating - a.rating);
        break;

      default:
        break;
    }

    return data;

  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <>
      <ShopHero />

      <section className="bg-[#FAFAFA] py-20">

        <Container>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">

            <ShopSidebar
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />

            <div className="lg:col-span-3">

              <ShopToolbar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                sortBy={sortBy}
                setSortBy={setSortBy}
                productCount={filteredProducts.length}
              />

              <div className="mt-10">

                <ProductGrid
                  products={filteredProducts}
                />

              </div>

            </div>

          </div>

        </Container>

      </section>
    </>
  );
}

export default Shop;