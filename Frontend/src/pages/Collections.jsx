import Cards from "../components/Cards";
import useDataContext from "../customHooks/useDataContext";
const Collections = () => {
  const {loading, error, product} = useDataContext();

  if (loading) {
    return <p className="text-center text-2xl mt-10">Loading products...</p>;
  }

  if (error) {
    return <p className="text-center text-2xl mt-10 text-red-600">{error}</p>;
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {
        product.map((product) => (
          <Cards key={product.id} product={product} />
        ))
      }
      </div>
    </>
  );
};

export default Collections;
