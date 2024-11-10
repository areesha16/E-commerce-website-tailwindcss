// import React from 'react'
// import Image from 'next/image'
// const Testimonials = () => {
//   return (
//     <div>
//      <div className="container pt-16 bottom-16 grid-cols-2">
//         <h2 className="font-medium text-2xl pb-4">Testimonials</h2>
//         <div className="grid lg:grid-cols-[300,1fr] gap-4"> 
//     <div className="border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0">
//         <Image 
//         className="rounded-full inline-block"
//         src="/banner.jpg"
//         width={80}
//         height={80}
//         alt="dp"
//         />
//         <h2 className="text-gray-500 font-black text-[20px]"> Areesha Shad</h2>
//         <p> CEO & Founder Invision</p>
//         <Image className="inline-block py-2"
//         src="/banner3.jpg"
//         width={30}
//         height={30}
//         alt="quotes"
//         />

//         <p className="max-w-[200px] text-gray-500">
//             I am an Army, I SELL BTS OUTFITS ,BUY FROM HERE AND WEAR LIKE YOUR BIAS
//         </p>

//     </div>

//    <div className="bg-red-600 bg-[url-(/banner3jpg.)] bg-cover h-[500px] rounded-2xl grid place-items-center">
//    <div className="bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2
//    grid place-items-center gap-3 ">
//     <button className="bg-blackish text-white p-2 rounded-md"> 25% Discount</button>
//     <h2 className="font-extrabold text-2xl text-[#272727]"> Summer Collection</h2>

//     <p className="text-gray-500 text-[20px]">
//         Starting @ $20 <b>Shop Now</b>
//     </p>
//    </div>
//    </div>


//     </div>
//      </div>
//     </div>
//   )
// }

// export default Testimonials


import React from 'react';
import Image from 'next/image';

const Testimonials = () => {
    return (
        <div className="container pt-16">
            <h2 className="font-medium text-2xl pb-4">Testimonials</h2>
            <div className="grid lg:grid-cols-[300px,1fr] gap-4">
                <div className="border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0">
                    <Image 
                        className="rounded-full inline-block "
                        src="/avatar.jpg"
                        width={80}
                        height={80}
                        alt="Areesha Shad's profile picture"
                    />
                    <h2 className="text-gray-500 font-black text-[20px]">Areesha Shad</h2>
                    <p>CEO & Founder, Invision</p>
                    <Image
                        className="inline-block py-2"
                        src="/purple.jpg"
                        width={70}
                        height={70}
                        alt="Quote symbol"
                    />
                    <p className="max-w-[200px] text-gray-500 text-center">
                        I am an Army, I SELL BTS OUTFITS, BUY FROM HERE AND WEAR LIKE YOUR BIAS.
                    </p>
                </div>

                <div className="bg-red-600 bg-cover h-[500px] rounded-2xl grid place-items-center" style={{ backgroundImage: "url('/banner3.jpg')" }}>
                    <div className="bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3">
                        <button className="bg-black text-white p-2 rounded-md">25% Discount</button>
                        <h2 className="font-extrabold text-2xl text-[#272727]">Summer Collection</h2>
                        <p className="text-gray-500 text-[20px]">
                            Starting @ $20 <b>Shop Now</b>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
