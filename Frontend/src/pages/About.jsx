import img from "../images/about/image.jpg";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import SportsMotorsportsOutlinedIcon from "@mui/icons-material/SportsMotorsportsOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import HomeRepairServiceOutlinedIcon from "@mui/icons-material/HomeRepairServiceOutlined";
import imgOne from "../images/about/img-one.jpg"
import imgTwo from "../images/about/img-two.jpg"
import imgThree from "../images/about/img-three.jpg"
import imgFour from "../images/about/img-four.jpg"

const About = () => {
  const box = [
  {
    icon: <GroupOutlinedIcon sx={{ color: "#1A56DB",fontSize: {
                      xs: 20,
                      sm: 25,
                      md: 26,
                      lg: 35,
                    }, }} />,
    value: "10K+",
    title: "HAPPY CUSTOMERS",
  },
  {
    icon: <LanguageOutlinedIcon sx={{ color: "#1A56DB",fontSize: {
                      xs: 20,
                      sm: 25,
                      md: 26,
                      lg: 35,
                    }, }} />,
    value: "50+",
    title: "GLOBAL BRANDS",
  },
  {
    icon: <SupportAgentOutlinedIcon sx={{ color: "#1A56DB",fontSize: {
                      xs: 20,
                      sm: 25,
                      md: 26,
                      lg: 35,
                    }, }} />,
    value: "24/7",
    title: "SUPPORT",
  },
  {
    icon: <HomeRepairServiceOutlinedIcon sx={{ color: "#1A56DB",fontSize: {
                      xs: 20,
                      sm: 25,
                      md: 26,
                      lg: 35,
                    } }} />,
    value: "100%",
    title: "ECO-FRIENDLY PACKAGING",
  },
]


const values = [
  {
    icon: <WorkspacePremiumOutlinedIcon
                  sx={{
                    fontSize: {
                      xs: 18,
                      sm: 22,
                      md: 26,
                      lg: 30,
                    },
                  }}
                />,
    title: "Uncompromising Quality",
    description:
      "We source only the finest materials, ensuring every product is built to last. Our rigorous testing process guarantees that functionality matches our minimalist aesthetic.",
  },
  {
    icon: <SportsMotorsportsOutlinedIcon  sx={{
                    fontSize: {
                      xs: 18,
                      sm: 22,
                      md: 26,
                      lg: 30,
                    },
                  }}
                />,
    title: "Sustainable Practices",
    description:
      "Environmental responsibility is woven into our DNA. From ethically sourced materials to fully recyclable packaging, we strive to leave a positive footprint.",
  },
]

const cards=[
  {
    img:imgFour,
    title: "Alex Rivera",
    desc:"Founder & CEO"
  },
  {
    img:imgOne,
    title: "Jordan Lee",
    desc:"Head of Design"
  },
  {
    img:imgTwo,
    title: "Sam Taylor",
    desc:"Operations Lead"
  },
  {
    img:imgThree,
    title: "Casey Chen",
    desc:"Sustainability Director"
  }
]
  return (
    <main className="max-w-10xl mx-auto" >
      <section className="w-full flex flex-col items-center justify-center  gap-5 p-8 lg:py-20">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Our Journey
        </h1>
        <p className=" w-full sm:w-2/3 opacity-70   lg:w-2/5 text-xs sm:text-sm lg:text-base text-center">
          Redefining the intersection of minimalist design and premium utility.
          We believe that everyday essentials should be crafted with
          uncompromising quality and quiet elegance.
        </p>
      </section>

      <section className="w-full flex flex-col lg:flex-row items-center justify-center p-8 lg:px-10 lg:py-20 gap-10">
        <div className="">
          <img
            className="w-100 lg:h-150 sm:w-120 lg:w-210 rounded-xl"
            src={img}
            alt="Hero section img where discount are shown"
          />
        </div>
        <div className=" flex flex-col items-center lg:items-start  justify-center gap-4">
          <h1 className=" font-bold text-3xl sm:text-4xl lg:text-5xl">
            Our Values
          </h1>
          {values.map((item) => (
     <div key={item.id} className="border border-black/15 p-6 shadow-lg flex flex-col gap-3 ">
            <h2 className="text-sm sm:text-base font-bold  text-[#1A56DB]  lg:text-lg flex items-center sm:justify-center lg:justify-start  gap-2 ">
              <span>
                {item.icon}
              </span>
              {item.title}
            </h2>
            <p className="opacity-70  sm:text-center text-xs sm:text-sm lg:text-base lg:text-start">
              {item.description}
            </p>
          </div>
          ))}
          
        </div>
      </section>

      <section className="w-full bg-gray-200 py-20 grid grid-cols-2 lg:grid-cols-4 gap-4   p-8">
        {
          box.map((item) => (
            <div key={item.id} className="flex flex-col gap-1 lg:gap-3 items-center justify-center">
         {item.icon}
          <h1 className="text-2xl lg:text-3xl">{item.value}</h1>
          <p className=" uppercase text-xs lg:text-sm opacity-50 font-bold text-nowrap">
           {item.title}
          </p>
        </div>
          ))
        }
        
      </section>


      <section className="w-full py-20 flex flex-col items-center justify-center gap-4 px-8 lg:px-10">
        <h1 className="text-3xl sm:text-4xl  lg:text-5xl font-bold">Meet The Team</h1>
        <p className="text-xs sm:text-sm lg:text-base  opacity-70">The Visionari Behind LUXES </p>
        <div  className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-10 mt-5  ">
     {
      cards.map((item) => (
        
       <div key={item.id} className="w-full   bg-gray-100 flex flex-col items-center justify-center border border-black/15 shadow-lg  rounded-lg px-15 py-6 gap-3">
     <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden">
            <img
              src={item.img}
              className="w-full h-full object-cover object-center"
              alt="Team member"
            />
          </div>
     <p className="font-bold text-nowrap">{item.title}</p>
     <p className="text-xs text-[#1A56DB] opacity-70 text-nowrap">{item.desc}</p>
    
      </div>


     
    
      ))
     }
     </div>
      </section>
    </main>
  );
};

export default About;
