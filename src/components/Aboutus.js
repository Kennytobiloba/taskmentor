import React from "react";

function Aboutus(){
    return(
        <div className=" bg-[#15003b]">
            <section class="py-[50px] flex justify-center ">
        <div class="lg:w-[80%] w-full h-[35vh] border-2 mx-auto p-10 rounded-lg border-[#70606c] drop-shadow-2xl bg-[#4c40f7] text-center mt-[10%]">
          <h5 class="text-[16px] mb-2 text-white">Get notified about our latest projects and newsletters</h5>
          <h1 class="mb-4 text-[20px] lg:text-[30px] font-semibold text-white ">Subscribe now</h1>
          <input type="text" placeholder="Email" className=" lg:w-[50%] w-full p-4 border-1 rounded-xl bg-black border-black outline-none" />
        </div>
      </section>
        </div>
    )
}

export default Aboutus;