import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {
    const { data: allbuyers = [],refetch } = useQuery({
        queryKey: ["allsellers"],
        queryFn: async () => {
          const res = await fetch("http://localhost:4000/allbuyers");
          const data = await res.json();
          return data;
        },
      });
      console.log(allbuyers);
      const handlerBuyerDelete = (id) =>{
        fetch(`http://localhost:4000/buyerdelete/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount > 0){
                toast.success('Deleted Successfully')
                refetch()
            }
            
        })
      }
    return (
        <div>
        <h2 className="text-3xl text-center my-6">All Buyers</h2>
        <div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {allbuyers.map((buyer, i) => (<tr key={buyer._id}>
                  <td>{1 + i}</td>
                  <td>{buyer.name}</td>
                  <td>{buyer.email}</td>
                  <td><button onClick={()=>handlerBuyerDelete(buyer._id)} className="btn btn-primary btn-sm">Delete</button></td>
                </tr>))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default AllBuyers;