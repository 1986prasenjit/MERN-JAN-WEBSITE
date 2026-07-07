const HeadingText = ({ heading, para }) => {
  return (
    <>
      <section className="text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
          {heading}
        </h2>
        <p className="text-sm sm:text-base md:text-lg">{para}</p>
      </section>
    </>
  );
};

export default HeadingText;
