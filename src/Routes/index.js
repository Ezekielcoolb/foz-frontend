import { useRoutes } from "react-router-dom";
import General from "../Layouts/General/generalLayout";
import Home from "../Component/Home";
import About from "../Component/About";

export default function Routes(){
    return(
        useRoutes(
            [
                {
                    path: "/",
                    element: <General/>,
                    children: [
                        {path: "/" , element: <Home />},
                        {path: "/about" , element: <About />},

                    ]
                },
                
            ]
        )
    )
}