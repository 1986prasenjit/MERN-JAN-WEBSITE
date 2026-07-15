import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Cards from "../components/Cards";
import useDataContext from "../customHooks/useDataContext";

const CollectionsDetails = () => {
  const { id } = useParams();
  const { loading, error, product } = useDataContext();
  const selectedProduct = product.find((item) => item.id === Number(id));
  
  const galleryImages = selectedProduct?.images?.length
    ? selectedProduct.images
    : [selectedProduct?.thumbnail].filter(Boolean);

  
  const [selectedImage, setSelectedImage] = useState({
    productId: null,
    image: "",
  });

  const activeImage =
    selectedImage.productId === selectedProduct?.id
      ? selectedImage.image
      : galleryImages[0] || "";

      
  const relatedProducts = selectedProduct
    ? product
        .filter(
          (item) =>
            item.id !== selectedProduct.id &&
            item.category === selectedProduct.category,
        )
        .slice(0, 4)
    : [];

  const discountPercentage = selectedProduct?.discountPercentage || 0;
  const originalPrice = selectedProduct
    ? selectedProduct.price / (1 - discountPercentage / 100)
    : 0;

  if (loading) {
    return <p className="text-center text-2xl mt-10">Loading product...</p>;
  }

  if (error) {
    return <p className="text-center text-2xl mt-10 text-red-600">{error}</p>;
  }

  if (!selectedProduct) {
    return <p className="text-center text-2xl mt-10">Product not found.</p>;
  }

  return (
    <main className="bg-[#f1f3f6] px-3 py-6 sm:px-6">
      <section className="mx-auto grid max-w-7xl gap-4 bg-white p-4 lg:grid-cols-[48%_1fr]">
        <div className="grid gap-4 sm:grid-cols-[84px_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto sm:order-1 sm:flex-col">
            {galleryImages.map((image) => (
              <button
                type="button"
                key={image}
                onClick={() =>
                  setSelectedImage({
                    productId: selectedProduct.id,
                    image,
                  })
                }
                className={`h-20 w-20 shrink-0 border bg-white p-1 ${
                  activeImage === image ? "border-[#2874f0]" : "border-gray-200"
                }`}
              >
                <img
                  src={image}
                  alt={selectedProduct.title}
                  className="h-full w-full object-contain"
                />
              </button>
            ))}
          </div>

          <div className="order-1 flex min-h-80 items-center justify-center border border-gray-200 bg-white p-4 sm:order-2">
            <img
              src={activeImage || selectedProduct.thumbnail}
              alt={selectedProduct.title}
              className="max-h-[520px] w-full object-contain"
            />
          </div>

          <div className="order-3 grid gap-3 sm:col-start-2 sm:grid-cols-2">
            <button className="bg-[#ff9f00] px-4 py-4 text-base font-semibold uppercase text-white">
              Add to Cart
            </button>
            <button className="bg-[#fb641b] px-4 py-4 text-base font-semibold uppercase text-white">
              Buy Now
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4 px-1 py-2 sm:px-4">
          <div>
            <p className="text-sm font-semibold uppercase text-gray-500">
              {selectedProduct.brand || selectedProduct.category}
            </p>
            <h1 className="mt-2 text-2xl font-semibold leading-tight text-[#212121] sm:text-3xl">
              {selectedProduct.title}
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-sm bg-[#388e3c] px-2 py-1 text-sm font-semibold text-white">
              {selectedProduct.rating} ★
            </span>
            <span className="text-sm font-semibold text-gray-500">
              {selectedProduct.stock} items available
            </span>
          </div>

          <div>
            <p className="text-sm font-semibold text-[#388e3c]">
              Special price
            </p>
            <div className="mt-1 flex flex-wrap items-end gap-3">
              <span className="text-3xl font-semibold text-[#212121]">
                ${selectedProduct.price}
              </span>
              {discountPercentage > 0 && (
                <>
                  <span className="text-lg text-gray-500 line-through">
                    ${originalPrice.toFixed(2)}
                  </span>
                  <span className="text-base font-semibold text-[#388e3c]">
                    {Math.round(discountPercentage)}% off
                  </span>
                </>
              )}
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <h2 className="text-lg font-semibold text-[#212121]">Offers</h2>
            <ul className="mt-3 space-y-2 text-sm text-[#212121]">
              <li>
                <span className="font-semibold">Bank Offer:</span> 10% instant
                discount on selected cards
              </li>
              <li>
                <span className="font-semibold">Exchange Offer:</span> Save
                more with eligible product exchange
              </li>
              <li>
                <span className="font-semibold">Delivery:</span>{" "}
                {selectedProduct.shippingInformation || "Fast delivery available"}
              </li>
            </ul>
          </div>

          <div className="grid gap-4 border-t border-gray-200 pt-4 sm:grid-cols-[140px_1fr]">
            <h2 className="text-sm font-semibold uppercase text-gray-500">
              Highlights
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-[#212121]">
              <li>{selectedProduct.description}</li>
              <li>Category: {selectedProduct.category}</li>
              <li>Minimum order quantity: {selectedProduct.minimumOrderQuantity}</li>
              <li>{selectedProduct.warrantyInformation}</li>
            </ul>
          </div>

          <div className="grid gap-4 border-t border-gray-200 pt-4 sm:grid-cols-[140px_1fr]">
            <h2 className="text-sm font-semibold uppercase text-gray-500">
              Seller
            </h2>
            <div className="text-sm leading-6 text-[#212121]">
              <p className="font-semibold text-[#2874f0]">Lexus Retail</p>
              <p>{selectedProduct.returnPolicy}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-6 max-w-7xl bg-white p-4">
        <div className="mb-2 flex items-center justify-between gap-4 border-b border-gray-200 pb-4">
          <h2 className="text-xl font-semibold text-[#212121]">
            Related Products
          </h2>
          <Link
            to="/collections"
            className="bg-[#2874f0] px-4 py-2 text-sm font-semibold uppercase text-white"
          >
            View All
          </Link>
        </div>

        {relatedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((item) => (
              <Cards key={item.id} product={item} />
            ))}
          </div>
        ) : (
          <p className="py-8 text-center text-base font-semibold text-gray-500">
            No related products found.
          </p>
        )}
      </section>
    </main>
  );
};

export default CollectionsDetails;
