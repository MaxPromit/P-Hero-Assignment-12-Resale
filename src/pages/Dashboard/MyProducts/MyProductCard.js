import React from "react";
import toast from "react-hot-toast";
import { FaRegCheckCircle } from "react-icons/fa";

const MyProductCard = ({ myproduct , refetch}) => {
    const {picture,productName,location,resalePrice,originalPrice,sellerName,conditionType,description,sellerStatus,status,_id,mobileNumber,yearsOfUse} = myproduct;

    const handlerAdvirtised = (id) =>{
        fetch(`https://reseal-bike-server.vercel.app/advirtised/${id}`, {
        method: "PUT",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
        })
        .catch(err => console.error(err))
    }
    const handlerDelete = (id) =>{
        fetch(`https://reseal-bike-server.vercel.app/myproducts/${id}`, {
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
      <div className="card card-compact w-96 bg-white text-black shadow-xl">
      <figure className="">
          <img className="object-cover w-96 h-64" src={picture} alt="Shoes" />
        </figure>
        <div className="card-body">
        <div className="flex justify-around">
            <h2 className="card-title">{productName}</h2>
            <p className='flex justify-end font-bold items-center'>{status}</p>
          </div>
          {sellerStatus === 'Verified' ? <p className="text-base font-medium relative">Seller Name: {sellerName}<FaRegCheckCircle className="inline absolute bottom-3 text-blue-800"/> </p> : <p className="font-medium text-base">Seller Name: {sellerName}</p>}
          
          <div className="text-lg ">
            <p>
              <span className="font-bold text-base">Product Original Price</span>: $ <span className="font-bold">{originalPrice}</span>
            </p>
            <p>
            <span className="font-bold text-base">Product Resale Price</span>: $ <span className="font-bold">{resalePrice}</span>
            </p>
          </div>
          <div className="flex justify-around font-medium text-base ">
            <p>Location: {location}</p>
            <p>Condition: {conditionType}</p>
          </div>
       

          <div className="card-actions justify-end ">
          <p className="text-base font-medium">Mobile: {mobileNumber}</p> 
          <p className="text-base font-medium">Year Of Use: {yearsOfUse}</p> 
          </div>
          <p>Status: {status}</p>
         

          <div className="card-actions justify-between">
          {status === 'Available' && <label onClick={()=> handlerAdvirtised(_id)} className="btn btn-primary btn-sm">
            Advirtised
          </label>}
          <label onClick={()=> handlerDelete(_id)} className="btn btn-primary btn-sm">
            Delete
          </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProductCard;