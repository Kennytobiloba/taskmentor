import React from 'react';

function HomeSection() {
  return (

    <div className="w-full md:h-[700px] flex items-center justify-center bg-[#00113b] text-white">
    <div className="w-[90%] flex-col-reverse flex justify-between gap-y-6 items-center md:w-[87%] md:flex-row overflow-visible">
      <div className="w-[90%] text-center space-y-[24px] md:w-[45%] md:text-left">
        <h1 className="text-[50px] max-[1210px]:text-[36px] font-bold max-md:text-[30px]">
          Never feel alone in your tech journey with Julieth, the future of
          Scalable Learning.
        </h1>
        <p>
          Julieth is an interactive learning tutor specifically crafted to
          guide tech beginners, providing them with the essential mentorship
          needed for a successful journey into the industry.
        </p>

        
          <button className="bg-[#FC00B5] button-class-two font-[500] mt-5 mx-auto py-4 px-8 text-white flex items-center gap-x-2 md:mx-0 ">
            Get Started 
          </button>
        
      </div>
      <div className="w-[100%] md:w-[53%]  flex items-center justify-center overflow-visible">
      <img src="./image/mentorhero.png" alt="" className="w-full " />
        </div>
       
  
      </div>
    </div>

    
        
  );
}

export default HomeSection;

