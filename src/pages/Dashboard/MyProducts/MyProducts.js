import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import MyProductCard from './MyProductCard';

const MyProducts = () => {
    const {user} = useContext(AuthContext)
    const { data: myproducts = [] } = useQuery({
        queryKey: ["brandCatagories"],
        queryFn: async () => {
          const res = await fetch(`http://localhost:4000/myproducts?email=${user?.email}`);
          const data = await res.json();
          return data;
        },
      });
      console.log('myyyy', myproducts)

    //   Hello 
    return (
        <div>
            <h2 className='text-3xl mb-6'>This is My Products </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                {myproducts.map(myproduct=><MyProductCard myproduct={myproduct} key={myproduct._id}></MyProductCard>)}
            </div>
        </div>
    );
};

export default MyProducts;