// import React from 'react'
// import Image from 'next/image'
// import { AiFillStar, AiOutlineStar } from 'react-icons/ai';


// interface propsType{
//     img:string;
//     title:string;
//     desc:string;
//     rating:number;
//     price:string;
// }

// const ProductCard: React.FC<propsType> = ({
//     img,
//    title,
//     desc,
//     rating,
//       price,
//        }) => {

// const generateRating =(rating:number) =>{
//       switch (rating) {
//         case 1:
//         return (
//           <div className="flex gap-1 text-[20px] text-[#FF9529]">
//             <AiFillStar />
//             <AiOutlineStar>
//             <AiOutlineStar>
//             <AiOutlineStar>
//             <AiOutlineStar>
//                </div>
//         );   
//         case 2:
//         return (
//           <div className="flex gap-1 text-[20px] text-[#FF9529]">
//             <AiFillStar />
//             <AiFillStar>
//             <AiOutlineStar>
//             <AiOutlineStar>
//             <AiOutlineStar>
//                </div>
//         );   
      
//         case 3:
//         return (
//           <div className="flex gap-1 text-[20px] text-[#FF9529]">
//             <AiFillStar />
//             <AiFillStar>
//             <AiFillStar>
//             <AiOutlineStar>
//             <AiOutlineStar>
//                </div>
//         );   
      
//         case 4:
//         return (
//           <div className="flex gap-1 text-[20px] text-[#FF9529]">
//             <AiFillStar />
//             <AiOFillStar>
//             <AiFillStar>
//             <AiFillStar>
//             <AiOutlineStar>
//                </div>
//         );   
      
//         case 5:
//         return (
//           <div className="flex gap-1 text-[20px] text-[#FF9529]">
//             <AiFillStar />
//             <AiFillStar>
//             <AiFillStar>
//             <AiFillStar>
//             <AiFillStar>
//                </div>
//         );   
      
  
//         default:
//          return null;
//       }
// };

//              return(
//              <div className="px-4 border border-gray-200 rounded-xl max-w-[400px]">
//                <div>
//                 <Image  className="w-full h-auto"
//           src={img}
//           alt={title}
//           width={400}  // You can adjust these
//           height={300} // dimensions as per your design
//           layout="responsive"/>
//     <div className="space-y-2 py-2">
//       <h2 className="text-accent font-medium uppercase">{title}</h2>
//        <p className="text-gray-500 max-w-[150px]">{desc}</p>

//        <div >{generateRating(rating)}</div>

//     </div>


//               </div>
      
//     </div>
//   )
// }

// export default ProductCard


// import React from 'react';
// import Image from 'next/image';
// import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

// interface PropsType {
//     img: string;
//     title: string;
//     desc: string;
//     rating: number;
//     price: string;
// }

// const ProductCard: React.FC<PropsType> = ({
//     img,
//     title,
//     desc,
//     rating,
//     price,
// }) => {

//     const generateRating = (rating: number) => {
//         const stars = [];
//         for (let i = 1; i <= 5; i++) {
//             stars.push(i <= rating ? <AiFillStar key={i} /> : <AiOutlineStar key={i} />);
//         }
//         return <div className="flex gap-1 text-[20px] text-[#FF9529]">{stars}</div>;
//     };

//     return (
//         <div className="px-4 border border-gray-200 rounded-xl max-w-[400px]">
//             <div>
//                 <Image
//                     className="w-full h-auto"
//                     src={img}
//                     alt={title}
//                     width={400} // Adjust these dimensions as needed
//                     height={300}
//                     layout="responsive"
//                 />
//                 <div className="space-y-2 py-2">
//                     <h2 className="text-accent font-medium uppercase">{title}</h2>
//                     <p className="text-gray-500 max-w-[150px]">{desc}</p>
//                     <div>{generateRating(rating)}</div>

//                     <div className="font-bold flex- gap-4">
//                       ${price}
//                       <del className="text-gray-500 font-normal">{parseInt(price)+50 }</del>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductCard;


import React from 'react';
import Image from 'next/image';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

interface PropsType {
    img: string;
    title: string;
    desc: string;
    rating: number;
    price: string; // Assuming price is a string representing the amount in dollars
}

const ProductCard: React.FC<PropsType> = ({
    img,
    title,
    desc,
    rating,
    price,
}) => {
    // Function to generate star ratings
    const generateRating = (rating: number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(i <= rating ? <AiFillStar key={i} /> : <AiOutlineStar key={i} />);
        }
        return <div className="flex gap-1 text-[20px] text-[#FF9529]">{stars}</div>;
    };

    // Function to format price as currency
    const formatPrice = (price: string) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(parseFloat(price));
    };

    // Calculate the original price for display
    const originalPrice = parseFloat(price) + 50; // Assuming the original price is $50 more than the displayed price

    return (
        <div className="px-4 border border-gray-200 rounded-xl max-w-[400px]">
            <div>
                <Image
                    className="w-full h-auto"
                    src={img}
                    alt={title}
                    width={400} // Adjust these dimensions as needed
                    height={300}
                    layout="responsive"
                />
                <div className="space-y-2 py-2">
                    <h2 className="text-accent font-medium uppercase">{title}</h2>
                    <p className="text-gray-500 max-w-[150px]">{desc}</p>
                    <div>{generateRating(rating)}</div>

                    <div className="font-bold flex gap-2 items-center">
                        <span>{formatPrice(price)}</span>
                        <del className="text-gray-500">{formatPrice(originalPrice.toString())}</del>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
