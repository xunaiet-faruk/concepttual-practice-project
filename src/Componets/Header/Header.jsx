import { NavLink } from "react-router-dom";


const Header = () => {
    return (

        <div className="flex shadow-xl p-5 justify-between">

     
<h1 className="text-2xl font-bold"> Navbar </h1>


            <ul className="flex gap-5 font-bold">
                <li>


                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                        }
                    >
                        Home
                    </NavLink>


                </li>
                <li>


                    <NavLink
                        to="/favorite"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                        }
                    >
                        Favorite
                    </NavLink>



                </li>
                <li>


                    <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                        }
                    >
                        Login
                    </NavLink>



                </li>
            </ul>
         
     
            </div>
     
    );
};

export default Header;