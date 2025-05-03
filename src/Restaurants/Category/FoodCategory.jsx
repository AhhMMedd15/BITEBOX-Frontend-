import React from 'react'
import { menuItems } from '@/assets/assets'
import FoodcategoryCards from './FoodcategoryCards'

const FoodCategory = () => { 
    return (
        <>
            <div className="foodcategory w-full h-[90vh] py-30 ">
                <div>
                    <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl text-center font-OpenSans text-deep-teal mb-10'>Explore Categories</h1>
                </div>

                <div className="scrollbar w-full h-[55vh] px-4 sm:px-8 md:px-20 shadow-2xl bg-mint flex gap-6 sm:gap-10 md:gap-20 overflow-x-auto overflow-y-hidden">
                    {
                        menuItems.map((items, idx) => (
                            <FoodcategoryCards key={idx} items={items} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default FoodCategory
