import FeatureProducts from "../components/FeatureProducts";
import HeadingText from "../components/HeadingText";
import HeroImg from "../components/HeroImg";
import useDataContext from "../customHooks/useDataContext";
const Home = () => {
  const { loading, error } = useDataContext();

  if (loading) {
    return <p className="text-center text-2xl mt-10">Loading products...</p>;
  }

  if (error) {
    return <p className="text-center text-2xl mt-10 text-red-600">{error}</p>;
  }
  //console.log(product)

  return (
    <>
      <HeroImg />
      <HeadingText heading="Featured Category" />
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
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
      </div> */}

      <FeatureProducts />
    </>
  );
};

export default Home;
