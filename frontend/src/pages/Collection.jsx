import { useEffect, useState } from 'react';
import React from 'react'
import { ShopContext } from '../context/ShopContext';
import { useContext } from 'react';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';



// for all collection
const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const toggleCategory = (e) => {
    // This first condistion if we target the caregory that time it will filter out rest of value
    // If we target the Men catagory then it will filter out women and kids and show Men
    // The else case is if catagory not exits that time add this value to the category
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    } else{
      setCategory(prev => [...prev, e.target.value])
    }
  };
  
  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  useEffect(() => {
    console.log(category);
    
  }, [category]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t' >
      {/* Filter Options */}
      <div className='min-w-60'>
        {/* For small screen only because we set it like when its small then and only then it will show */}
        {/* if filter is clicked then show filter options */}
        {/* if its true it gonna make it false when we click */}
        {/* if its false it gonna make it true when we click */}
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex item-center cursor-pointer gap-2'>FILTERS</p>
        {/* Show for only smaller screen sizes */}
        <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Men'}  onChange={toggleCategory} /> Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Women'}  onChange={toggleCategory}/> Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory} /> Kids
            </p>
          </div>
        </div>
        {/* subCategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Topwear'} /> Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Bottomwear'} /> Bottomwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Winterwear'} /> Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* right side of collection */}
      <div className='flex-1'>
          <div className='flex justify-between text-base sm:text-2xl mb-4'>
            <Title text1={'ALL'} text2={'COLLECTIONS'}/>
            {/* Product Sort */}
            <select className='border-2 border-gray-300 text-sm px-2'>
              <option value="relavent">Sort by: Relavent</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>
          {/* Map Products */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {
              filterProducts.map((item, index) => 
                (
                 <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                )
              )
            }
          </div>
      </div> 
    </div>
  )
}

export default Collection