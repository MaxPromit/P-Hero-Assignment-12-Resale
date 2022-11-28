import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";


const AllSellers = () => {
  const { data: allsellers = [],refetch } = useQuery({
    queryKey: ["allsellers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:4000/allsellers");
      const data = await res.json();
      return data;
    },
  });
  console.log(allsellers);

  const handlerSellerDelete = (id) =>{
    fetch(`http://localhost:4000/sellerdelete/${id}`, {
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
      <h2 className="text-3xl text-center my-6">All Seller</h2>
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
              {allsellers.map((seller, i) => (<tr key={seller._id}>
                <td>{1 + i}</td>
                <td>{seller.name}</td>
                <td>{seller.email}</td>
                <td><button onClick={()=>handlerSellerDelete(seller._id)} className="btn btn-primary btn-sm">Delete</button></td>
              </tr>))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllSellers;
