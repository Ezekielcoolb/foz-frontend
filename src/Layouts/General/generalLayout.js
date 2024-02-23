import { Outlet } from "react-router-dom";
import Nav from "../../Component/Navbar";
import Home from "../../Component/Home";
export default function General(){
    return(
        <>
        <Nav/>
        <Home />
        <Outlet/>
       
        </>
        
    )
}