import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";


const Wraper = styled.div`
nav {
    position: fixed; /* Fix the navigation bar at the top */
    top: 0; /* Position it at the top of the viewport */
    width: 100%; /* Make it take the full width of the viewport */
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(to right, #212526 50%, #2e3233 50%);
    padding: 10px 80px;
    margin-bottom: 40px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.06);
    z-index: 1000; /* Ensure it appears above other content */
    color: white;
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
        font-weight: 600;
        color: #d3cccc;
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
        color: white;
        align-items: center;
    }

    @media (max-width: 900px)  {
        nav {
            flex-direction: row-reverse;
            padding: 10px 20px !important;
        }
        #navbar {
            display: flex;
            flex-direction: column;
            align-items:flex-start !important;
            justify-content: flex-start !important;
            position: fixed;
            top: 110px;
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
            font-size: 1.3rem;
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
        <div >
            <Wraper>
            <nav>
                <a style={{textDecoration: "none", color: "white"}} href="/">
                <div style={{alignItems: "center"}} className="d-flex justify-content-around">
                <div className="mr-2" style={{ height: "70px", width: "70px" }}>
                    <img style={{
                        height: "100%", width: "100%", objectFit: "cover",
                        display: "block", objectPosition: "top"
                    }} src='./images/foz.png'
                        alt='...'></img>
                </div>
                <div>
                    <h2 style={{fontWeight: "bold", fontSize: "16px", }}>FOZ ENGINEERING <br /> VENTURES </h2>
                    
                </div>
                </div>
                </a>
                <div >
                    <ul id="navbar" className={clicked? "#navbar active" : "#navbar"}>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/Services">Services</a></li>
                        <li><a href="/gallery">Gallery</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="nav-mobile" onClick={handleClick}>
                        {clicked ? <Icon width="50px" height="50px"  icon="prime:times" /> : <Icon width="50px" height="50px" icon="mdi-light:menu" />}
                    </div>
            </nav>
            </Wraper>
            <div style={{marginTop: "90px"}}></div>
        </div>
    )
}

export default Nav