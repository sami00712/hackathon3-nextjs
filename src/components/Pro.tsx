import { FaTrophy, FaShippingFast, FaHeadset } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

export default function Features() {
  return (
    <div className="px-20 grid lg:grid-cols-4 sm:grid-cols-2 justify-around bg-[#f9f4ef] py-10">
    
      <div className=" flex items-center">
        <FaTrophy className="text-5xl text-black mr-2 mb-3" />
        <div>
        <h3 className="text-lg font-bold">High Quality</h3>
        <p className="text-gray-500">crafted from top materials</p>
        </div>
      </div>
     
      <div className=" flex items-center">
        <MdVerified className="text-5xl text-black mr-2 mb-3" />
        <div>
        <h3 className="text-lg font-bold">Warranty Protection</h3>
        <p className="text-gray-500">Over 2 years</p>
        </div>
      </div>
   
      <div className=" flex items-center">
        <FaShippingFast className="text-5xl text-black mr-2 mb-3" />
        <div>
        <h3 className="text-lg font-bold">Free Shipping</h3>
        <p className="text-gray-500">Order over 150 $</p>
        </div>
      </div>
   
      <div className=" flex items-center">
        <FaHeadset className="text-5xl text-black mr-2 mb-3" />
        <div>
        <h3 className="text-lg font-bold">24 / 7 Support</h3>
        <p className="text-gray-500">Dedicated support</p>
        </div>
      </div>
    </div>
  );
}
