import heroImg from "../assets/heroImg.webp"
const HeroImg = () => {
  return (
    <>
        <section className="w-full h-[calc(100%-100px)] px-10 py-6 rounded-2xl ">
            <img src={heroImg} alt="Hero section img where discount are shown" className="w-full h-full object-cover overflow-hidden rounded-2xl" />
        </section>
    </>
  )
}

export default HeroImg