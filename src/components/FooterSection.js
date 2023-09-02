import React from "react";

function FooterSection() {
    return(
        <div className=" bg-[#15003b] text-white">
        
   <section class="px-16">
    <div class="flex lg:justify-between flex-col lg:flex-row">
      <h5 class="mb-3">© 2023 Julieth AI</h5>
      <ul class="flex xl:justify-between gap-4 flex-col lg:flex-row">
        <li><a href="" class="hover:text-[#FC00B5]">Home</a></li>
        <li><a href="" class="hover:text-[#FC00B5]">Login</a></li>
        <li><a href="" class="hover:text-[#FC00B5]">Signup</a></li>
        <li><a href="" class="hover:text-[#FC00B5]"> Become a Member</a></li>
      </ul>
      <div>
        <div class="rounded-full bg-blue-400 p-[12px] w-12  h-12 flex  justify-center items-center lg:ml-[40%] mb-8 mt-6"> 
              
          <h6 class="text-[16px] ">in</h6>
          
        </div>
      </div>
    </div>

   </section>
        </div>
        
    );
}
export default FooterSection;