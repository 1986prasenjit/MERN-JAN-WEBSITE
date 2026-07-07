const Cards = ({ product }) => {
  return (
    <article className="h-full w-full p-4">
      <div className="flex h-full flex-col gap-3 rounded-2xl bg-white/80 p-3 shadow-xl">
        <img
          src={product.thumbnail}
          className="h-48 w-full rounded-xl object-cover"
          alt={product.title}
        />

        <h2 className="line-clamp-2 text-lg font-semibold uppercase text-black">
          {product.title}
        </h2>

        <p className="text-lg font-semibold uppercase text-black">
          ${product.price}
        </p>

        <p className="line-clamp-3 text-sm font-semibold uppercase text-black">
          {product.description.slice(0, 70)}...
        </p>

        <div className="mt-auto flex w-full flex-wrap justify-end gap-3">
          <button className="rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white cursor-pointer">
            Buy Now
          </button>
          <button className="rounded-md bg-blue-700 px-3 py-2 text-sm font-semibold text-white cursor-pointer">
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
};

export default Cards;
