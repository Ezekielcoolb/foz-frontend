import { Outlet } from "react-router-dom";
import Nav from "../../Component/Navbar";

export default function General(){
    return(
        <>
        <Nav/>
       
        <Outlet/>
       
        </>
        
    )
}