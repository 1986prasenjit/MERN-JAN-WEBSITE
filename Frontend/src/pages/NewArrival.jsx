import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import Cards from "../components/Cards";
import { useState, useContext } from "react";
import DataContext from "../context/ProductContext/ProductContext";
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

const NewArrival = () => {
    const { product, loading: isLoading, error } = useContext(DataContext);
    const [isOpen,setIsOpen]=useState(false);
    function handleClick(){
      setIsOpen(!isOpen);
      
    }
    
  return (
    <main className="max-w-10xl mx-auto p-4 lg:p-10 ">
    <div className="pb-10  ">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl  font-bold ">New Arrivals</h1>
      <p className="captitalize opacity-70 text-xs sm:text-sm lg:text-base">Discover the latest in minimalist <span className="uppercase">luxury</span></p>
    </div>

      <section className="grid lg:grid-cols-[260px_1fr] gap-8">
        <aside className="hidden md:flex flex-col gap-4">
          <div className="flex items-center justify-between py-3 border-b border-black/30">
            <h1 className="text-lg font-bold">Filters</h1>
            <button className="underline">Clear All</button>
          </div>
          <div className="flex items-center justify-between border-b border-black/20 pb-4  p-4">
            <ul>
              <li className="font-bold">Categories</li>
              <li className="">
                <label className="flex gap-2 items-center ">
                  <input type="checkbox" />
                  Outwears
                </label>
              </li>

              <li className="">
                <label className="flex gap-2 items-center ">
                  <input type="checkbox" />
                  Knitwears
                </label>
              </li>

              <li className="">
                <label className="flex gap-2 items-center ">
                  <input type="checkbox" />
                  Accessories
                </label>
              </li>
            </ul>
            <ul>
              <li className="font-bold">
                <KeyboardArrowUpOutlinedIcon />
              </li>
              <li className="opacity-60">(45)</li>
              <li className="opacity-60">(32)</li>
              <li className="opacity-60">(18)</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 border-b border-black/20 pb-4  p-4">
            <div className="flex items-center justify-between">
              <h1>Price Range</h1>
              <KeyboardArrowUpOutlinedIcon />
            </div>
            <div className="bg-gray-200 w-full h-1 relative">
              <div className="bg-blue-600 w-1/2 h-1 absolute left-1/4 right-1/4">
                <CircleOutlinedIcon
                className=" absolute left-0 -top-2 "
                sx={{
                  color: "blue",
                  fontSize: 20,
                  backgroundColor: "white",
                 
                }}
              />
              <CircleOutlinedIcon
                className="absolute right-0 -top-2 "
                sx={{
                  color: "blue",
                  fontSize: 20,
                  backgroundColor: "white",
                 
                }}
              />
              </div>
            
            </div>

            <div className="flex gap-4 items-center justify-between">
              <div className="border opacity-50 py-2 px-4 w-30">
                <h1> $50</h1>
              </div>
              <h1>-</h1>
              <div className="border opacity-50 py-2 px-4 w-30">
                <h1> $500</h1>
              </div>
            </div>
          </div>
        </aside>

        {/* {mobile} */}
        <div className="md:hidden ">
          <div className="flex gap-3 items-center">
            <div onClick={handleClick} className="bg-gray-200 text-sm sm:text-base px-3 py-2 rounded-full flex gap-2 items-center justify-center border border-black/25">
            <TuneOutlinedIcon sx={{fontSize:{xs:18}}}/>
            <p>Filter & Sort</p>
          </div>
          <div className="bg-gray-200 px-3 py-2 rounded-full border border-black/25">
            <WidgetsOutlinedIcon sx={{fontSize:{xs:18}}}/>
          </div>
          </div>
           {isOpen &&(
        <div className="mt-5 flex flex-col w-70">
          <div className=" flex flex-col gap-4">
          <div className="flex items-center justify-between py-3 border-b border-black/30">
            <h1 className="text-lg font-bold">Filters</h1>
            <button className="underline">Clear All</button>
          </div>
          <div className="flex items-center justify-between border-b border-black/20 pb-4  p-4">
            <ul>
              <li className="font-bold">Categories</li>
              <li className="">
                <label className="flex gap-2 items-center ">
                  <input type="checkbox" />
                  Outwears
                </label>
              </li>

              <li className="">
                <label className="flex gap-2 items-center ">
                  <input type="checkbox" />
                  Knitwears
                </label>
              </li>

              <li className="">
                <label className="flex gap-2 items-center ">
                  <input type="checkbox" />
                  Accessories
                </label>
              </li>
            </ul>
            <ul>
              <li className="font-bold">
                <KeyboardArrowUpOutlinedIcon />
              </li>
              <li className="opacity-60">(45)</li>
              <li className="opacity-60">(32)</li>
              <li className="opacity-60">(18)</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 border-b border-black/20 pb-4  p-4">
            <div className="flex items-center justify-between">
              <h1>Price Range</h1>
              <KeyboardArrowUpOutlinedIcon />
            </div>
            <div className="bg-gray-200 w-full h-1 relative">
              <div className="bg-blue-600 w-1/2 h-1 absolute left-1/4 right-1/4">
                <CircleOutlinedIcon
                className=" absolute left-0 -top-2 "
                sx={{
                  color: "blue",
                  fontSize: 20,
                  backgroundColor: "white",
                 
                }}
              />
              <CircleOutlinedIcon
                className="absolute right-0 -top-2 "
                sx={{
                  color: "blue",
                  fontSize: 20,
                  backgroundColor: "white",
                 
                }}
              />
              </div>
            
            </div>

            <div className="flex gap-4 items-center justify-between">
              <div className="border opacity-50 py-2 px-4 w-30">
                <h1> $50</h1>
              </div>
              <h1>-</h1>
              <div className="border opacity-50 py-2 px-4 w-30">
                <h1> $500</h1>
              </div>
            </div>
          </div>
        </div>

        </div>
      )}

        </div>
  
  

        <div className="grid gap-2">
          <div className="lg:grid grid-cols-2 items-center hidden ">
           
            <p>Showing 1-12 of 120 results</p>
            <div className="text-end"><h3> Sort By:<span className="border px-4 py-1  ">Popular{" "}{' '}<ArrowDropDownOutlinedIcon/></span></h3> </div>
          </div>
          <div className="srink-0 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 ">

        {
          product.map((product, index) => (
            <Cards key={index} product={product}/>
          ))
        }

      </div>
        </div>
      </section>



     
    </main>
  );
};

export default NewArrival;
