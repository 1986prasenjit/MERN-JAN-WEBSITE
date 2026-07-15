import { useState, useContext, useMemo } from "react";
import DataContext from "../context/ProductContext/ProductContext";
import Cards from "./Cards";

export default function FeatureProducts() {
  const { product, loading: isLoading, error } = useContext(DataContext);
  const [category, setCategory] = useState("beauty");
  const data = useMemo(() => {
    const allProducts = product?.products || product;

    if (!allProducts || !Array.isArray(allProducts)) {
      return [];
    }
    return allProducts.filter((item) => item.category === category);
  }, [product, category]);

  return (
    <div className="w-full text-center">
      <h2 className=" text-xl font-bold">
        Current Category:{" "}
        <span className="text-2xl font-bold text-red-600">
          {category.toUpperCase()}
        </span>
      </h2>
      <nav className="flex items-center justify-center gap-4 mt-4">
        <button
          className="w-48 rounded-md px-4 py-2 bg-[#1A56DB] text-white text-2xl font-semibold"
          onClick={() => setCategory("beauty")}
        >
          Beauty
        </button>
        <button
          className="w-48 rounded-md px-4 py-2 bg-[#1A56DB] text-white text-2xl font-semibold"
          onClick={() => setCategory("furniture")}
        >
          Furniture
        </button>
        <button
          className="w-48 rounded-md px-4 py-2 bg-[#1A56DB] text-white text-2xl font-semibold"
          onClick={() => setCategory("groceries")}
        >
          Groceries
        </button>
        <button
          className="w-48 rounded-md px-4 py-2 bg-[#1A56DB] text-white text-2xl font-semibold"
          onClick={() => setCategory("fragrances")}
        >
          Fragrances
        </button>
        <button
          className="w-48 rounded-md bg-[#1A56DB] text-white px-4 py-2 text-2xl font-semibold"
          onClick={() => setCategory("kitchen-accessories")}
        >
          Accessories
        </button>
      </nav>

      <main>
        {isLoading && <p>Loading global data...</p>}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        {data.length > 0 && !isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {data.map((item) => (
              <Cards key={item.id} product={item} />
            ))}
          </div>
        )}
        {data.length === 0 && !isLoading && !error && (
          <p>No products found for {category}.</p>
        )}
      </main>
    </div>
  );
}
