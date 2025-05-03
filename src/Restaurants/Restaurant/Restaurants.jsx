import RestaurantCard from '@/Restaurants/Restaurant/RestaurantCard'
import React from 'react'
import { restaurantData } from '@/assets/assets'

const Restaurants = () => {
    return (
        <>
            <div className='w-full min-h-screen bg-mint mt-[100px] px-6 sm:px-10 md:px-20 py-10'>
                <div>
                    <h1 className='font-bold font-OpenSans text-3xl sm:text-4xl md:text-5xl text-center text-deep-teal mb-10'>
                        OUR RESTAURANT's
                    </h1>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                    {
                        restaurantData.map((restaurant) => (
                            <RestaurantCard 
                            key={restaurant.id} 
                            restaurant={restaurant} 
                            dishes = {restaurant.dishes}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Restaurants
