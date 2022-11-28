import { useContext } from "react";
import { Link, useNavigate, useRouteError } from "react-router-dom";
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

            <img className="w-full" src="https://i.ibb.co/12BdzxL/internet-network-warning-404-error-page-file-found-web-page-1150-48326.jpg" alt="" />
            <h3  className="text-3xl text-center text-red-600">Something Went Wrogn!!!</h3>
            <h3 className="text-red-600 text-center">{error.statusText || error.message}</h3>
            <p className='text-2xl text-center'>Please <button onClick={handlerLogOut}>SignOut</button> </p>
            <p className="text-center text-2xl"> Back To <Link to='/'><span className="text-green-600">Home</span></Link></p>

        </div>
    );
};

export default DisplayError;