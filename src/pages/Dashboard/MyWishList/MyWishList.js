import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Wish from './Wish';

const MyWishList = () => {
    const { data: wishlists = [] } = useQuery({
        queryKey: ["allwishlist"],
        queryFn: async () => {
          const res = await fetch('http://localhost:4000/allwishlist');
          const data = await res.json();
          return data;
        },
      });
      console.log(wishlists)
     
    return (
        <div>
            <h2 className='text-3xl font-semibold text-center my-6'>My WishList</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
                {wishlists.map(wish=> <Wish wish={wish} key={wish._id}></Wish>)}
            </div>
        </div>
    );
};

export default MyWishList;