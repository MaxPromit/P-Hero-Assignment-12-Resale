import React from "react";
import toast from "react-hot-toast";

const MyProductCard = ({ myproduct , refetch}) => {
    const {picture,productName,location,resalePrice,originalPrice,sellerName,conditionType,description,status,_id} = myproduct;

    const handlerAdvirtised = (id) =>{
        fetch(`http://localhost:4000/advirtised/${id}`, {
        method: "PUT",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
        })
        .catch(err => console.error(err))
    }
    const handlerDelete = (id) =>{
        fetch(`http://localhost:4000/myproducts/${id}`, {
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
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{productName}</h2>
          <p className="text-lg font-medium">{description}</p>
          <div className="flex justify-between text-lg ">
          <p>Original Price: ${originalPrice}</p>
          <p>Reseal Price: ${resalePrice}</p>
          </div>
          <div className="flex justify-between text-lg ">
          <p>Location: {location}</p>
          <p className="text-lg">Condition: {conditionType}</p>
          </div>

          
          <p className="text-lg">Seller Name: {sellerName}</p>
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