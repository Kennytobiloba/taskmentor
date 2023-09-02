import React from "react";

function EndSection(){
    return(
        <section class="py-[50px] flex   justify-center px-[20px] flex-col bg-[#15003b] text-white overflow-hidden">
        <div class="flex justify-around md:flex-row flex-col">
          <div class=" md:w-[35%] w-full lg:ml-10 font-semibold text-[17px] mb-8">
            <h5>Julieth empowers you to embark on your tech career journey by offering personalized mentorship with a dedicated tech mentor. With Julieth's guidance and support, you can gain valuable insights and have all your tech-related questions answered, helping you build a strong foundation for success in the tech industry.</h5>
            <div class="mt-16 ml-6">
              <div><img src="./image/julieth2.jpg" alt="" width={70} /></div>
            </div>
          </div>
          <div class="lg:ml-6 ">
            <h3 class="font-semibold text-[18px]">Our Offices</h3>
            <div><img src="./image/map.png" alt="" /></div>
          </div>
        
        </div>
        <div class="border-b-2 border-white w-[90%] inline-block ml-12"></div>
       </section>
    );
}

export default EndSection;