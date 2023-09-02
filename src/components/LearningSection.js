import React from "react";
function LearningSection(){
 
    return(
      <div className="w-full mt-[5rem] lg:mt-[5%] flex items-center justify-center  bg-[#00113b] text-white">
      <div className="w-[90%] flex-col-reverse flex justify-between items-center md:w-[87%] md:flex-row">
        <div className="w-[90%] text-center space-y-[24px] md:w-[45%] md:text-left">
          <h1>
            Creating the perfect learning model for all beginners to have real
            time mentorship will create the future of tech innovation.
          </h1>
          <p>Contribute to tomorrow, by sharing knowledge today.</p>
          
            <button className="bg-[#4C40F7] font-[500] mx-auto py-4 px-8 text-white rounded-[12px] flex items-center gap-x-2 md:mx-0 hover:bg-white hover:text-[#4C40F7]">
              Become a mentor 
            </button>
          
        </div>
        <div className="w-[90%] md:w-[50%]">
        <img src="./image/learning.png" alt="" />
          
        </div>
      </div>
    </div>

    
  );
       
    
}

export default LearningSection;