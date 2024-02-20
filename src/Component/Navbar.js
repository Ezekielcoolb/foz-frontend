import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";


const Wraper = styled.div`
    nav {
        display: flex;
        align-items:center;
        justify-content: space-between;
        background: white;
        padding: 20px 80px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.06);
    }

    #navbar {
        display: flex;
        align-items:center;
        justify-content: center;

    }

    #navbar li {
        list-style: none;
        padding: 0 20px;
        position: relative;
       
    }
    }
    #navbar li a {
        text-decoration: none;
        font-size: 1.1rem;
        // font-weight: 600;
        color: black;
        transition: 0.3s ease-in-out
       
    }
    
    #navbar li a::after{
        content: "";
        width: 70%;
        height: 1px;
        background: black;
        position: absolute;
        bottom: -4px;
        left: 20px;
    }

    #navbar li a:hover{
        color: blue;
    }
    #navbar li a:hover::after{
        content: "";
        width: 70%;
        height: 1px;
        background: blue;
        position: absolute;
        bottom: -4px;
        left: 20px;
    }
    .nav-mobile{
        display: none;
    }
    .nav-mobile {
        color: black;
        align-items: center;
    }

    @media (max-width: 900px)  {
        nav {
            flex-direction: row-reverse;
        }
        #navbar {
            display: flex;
            flex-direction: column;
            align-items:flex-start !important;
            justify-content: flex-start !important;
            position: fixed;
            top: 90px;
            left: -300px;
            width: 300px;
            height: 100vh;
            background: #2a3239;
            color: white;
            box-shadow: 0 40px 60px rgba(0,0,0,0.1);
            padding: 40px 0 0 10px;
            transition: 0.3s ease-in-out;
        }

        #navbar.active {
            left: 0px;
        }

        #navbar li a {
            text-decoration: none;
            font-size: 1.1rem;
            font-weight: 600;
            color: white;
            transition: 0.3s ease-in-out
           
        }
        .nav-mobile{
            display: block;
        }

        #navbar li {
            margin-bottom: 25px;
        }
        .nav-mobile {
            cursor: pointer;
        }
    
    }
`

const Nav = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked); // Toggle the clicked state
    };
    return (
        <div>
            <Wraper>
            <nav>
                <h1 style={{fontWeight: 'bold'}}>FOZ</h1>
                <div >
                    <ul id="navbar" className={clicked? "#navbar active" : "#navbar"}>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="nav-mobile" onClick={handleClick}>
                        {clicked ? <Icon width="50px" height="50px"  icon="prime:times" /> : <Icon width="50px" height="50px" icon="mdi-light:menu" />}
                    </div>
            </nav>
            </Wraper>
        </div>
    )
}

export default Nav