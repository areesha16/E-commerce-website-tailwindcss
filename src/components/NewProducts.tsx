
import React from 'react'
import ProductCard from './ProductCard';

     const productsData =  [
{   img:"/suga.jpg",
    title:" Classy Suit",
    desc:"Soft and Comfortale Suit With Animal Print Shirt ",
    rating:4,
    price:"199",
},
{
    img:"/jimin.jpg",
    title:"coat",
    desc:"Fancy Coat For Party",
    rating:4.5,
    price:"259",
},

{
    img:"/jungkook.jpg",
    title:"Jacket",
    desc:"Fancy Jacket For Boys",
    rating:4.5,
    price:"199",
},
{
    img:"/taehyung3.jpg",
    title:"Furcoat",
    desc:"Fur Coat For Winters",
    rating:4.5,
    price:"259",
},
{
    img:"/jin.jpg",
    title:"Denim  set",
    desc:"Soft and Elegant ",
    rating:4.5,
    price:"100",
},
{ img:"/jimin2.jpg",
    title:"Stylish shirt",
    desc:"Fancy and Stylish Shirt ",
    rating:4.5,
    price:"100",

},
{
    img:"/jhope.jpg",
    title:"Leather Jacket",
    desc:"Pure Leather ",
    rating:4.5,
    price:"259",
},
{img:"/taehyung.jpg",
    title:"Turtle Neck",
    desc:"Soft And Stlish Turtle Neck",
    rating:4.5,
    price:"120",
},

{
    img:"/rm.jpg",
    title:"co-ard Set ",
    desc:"White C0-ard set ",
    rating:4.5,
    price:"130",
},
{
    img:"/jungkook1.jpg",
    title:"Green Jacket",
    desc:"Sporty And Stylish Jacket",
    rating:4.5,
    price:"259",
},
];
const NewProducts = () => {
  return (
    <div>
        <div className="container pt-16">
            <h2 className="font-medium text-2xl pb-4">
              New Products
            </h2>
            
 <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 
 lg:grid-col-3 xl:grid-col-4 gap-10 xl:gap-x-20 xl:gap-y-10">


{productsData.map((item ) => ( 
    <ProductCard 
    key={item.title} 
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
              />
))}


 </div>
</div>
</div>

    
  )
}

export default NewProducts;
