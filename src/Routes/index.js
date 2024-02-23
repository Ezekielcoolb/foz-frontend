import { useRoutes } from "react-router-dom";
import General from "../Layouts/General/generalLayout";
import Home from "../Component/Home";

export default function Routes(){
    return(
        useRoutes(
            [
                {
                    path: "/",
                    element: <General/>,
                    children: [
                        {path: "/" , element: ''},

                    ]
                },
                
            ]
        )
    )
}