import Cards from "../components/Cards";
import HeadingText from "../components/HeadingText";
import HeroImg from "../components/HeroImg";
import useDataContext from "../customHooks/useDataContext";
const Home = () => {
  const { loading, error, product } = useDataContext();

  if (loading) {
    return <p className="text-center text-2xl mt-10">Loading products...</p>;
  }

  if (error) {
    return <p className="text-center text-2xl mt-10 text-red-600">{error}</p>;
  }
  console.log(product)

  return (
    <>
      <HeroImg />
      <HeadingText heading="Mens Clothing" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {product
          .filter((product) => product.category === "mens-shirts")
          .map((product) => (
            <Cards key={product.id} product={product} />
          ))}
      </div>
      <HeadingText heading="Womens Clothing" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {product
          .filter((product) => product.category === "womens-dresses")
          .map((product) => (
            <Cards key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Home;
