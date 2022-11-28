import { useContext } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";


const DisplayError = () => {
    const error = useRouteError()
    const {logOut} = useContext(AuthContext);
    const navigate = useNavigate()

  const handlerLogOut = () =>{
    logOut()
    .then(()=> {
      navigate('/login')
    })
    .catch(err => console.log(err))
  }
    return (
        <div>
            <h3 className="text-3xl text-red-600">Something Went Wrogn!!!</h3>
            <h3 className="text-red-600">{error.statusText || error.message}</h3>
            <p className='text-2xl'>Please <button onClick={handlerLogOut}>SignOut</button> </p>

        </div>
    );
};

export default DisplayError;