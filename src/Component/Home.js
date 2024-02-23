import React, { useEffect, useState } from "react";
import styled from "styled-components";

const AllRap = styled.div`
.downBarWrapper {
    overflow-x: auto; /* Enable horizontal scrolling */
    padding-bottom: 10px; /* Add some bottom padding to accommodate scrollbar */
    width: 100%; /* Take up full width */
    position: sticky;
  top: 16%;
  background-color: white; /* Background color of the sticky div */
  z-index: 1000;

  }
  .downBar li a {
  color: #b28e31;
  }
.downBar {
   
    position: relative; /* Make the <ul> a positioning context for absolutely positioned elements */
    font-size: 20px;
    font-weight: bold;
    padding: 18px;
    white-space: nowrap;
    padding-inline-start: 0;
  }
  .downBar li.active a {
    border-bottom: 6px solid #a67c00;
    // text-decoration: underline  5px;
    color: black;
    padding-bottom: 16px;
    transition: width 0.3s ease;
  }
  .downBar:after {
    content: "";
    display: block;
    height: 2px; /* Underline height */
    background-color: transparent; /* Initial background color */
    transition: width 0.3s ease; /* Smooth width transition */
  }
  .downBar li a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px; /* Adjust the distance between the underline and the <li> */
    width: 100%; /* Make the underline span the entire width of the <li> */
    height: 1px; /* Adjust the thickness of the underline */
    background-color: gray; /* Set the color of the underline */
  }
  
`
const Home = () => {

    const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  

    return (
        <AllRap>
            <div>
                <div style={{
                    height: "80vh", width: "100wh",
                    position: "relative",
                }}>
                    {/* Background image with blur filter */}
                    <div style={{
                        height: "100%", width: "100%",
                        backgroundImage: `url('./images/image42.jpg')`,
                        backgroundSize: "cover",
                        backgroundPosition: "top",
                        filter: "blur(3.5px)",
                        WebkitFilter: 'blur(3px)', /* Adjust the blur intensity as needed */
                        // position: "absolute",
                        // top: 0,
                        // left: 0,
                        // zIndex: 0,
                    }}></div>

                    {/* Overlay div for text */}
                    <div style={{
                        position: "absolute",
                        top: "40%",
                        left: "0%",
                        // transform: "translate(-130%, -130%)",

                        color: "black",
                        zIndex: 1,
                        backgroundColor: "rgba(0, 0, 0, 0.0)", /* Semi-transparent background */
                        padding: "30px",
                    }}>
                        <h3 style={{ color: "black", fontSize: "35px", fontWeight: "bold" }}>We Specialized In:</h3>
                        <p style={{
                            fontSize: "18px", fontWeight: "bold", opacity: "0.7"
                        }}>
                            External and internal cladding, Thermal Insulation,  Curtain wall, <br /> Aluminium Windows and Doors & Roofing</p>
                    </div>
                </div>


                <div className="flex flex-row ify-between my-2">
                    <div className="mr-2" style={{ height: "20vh", width: "30%" }}>
                        <img style={{
                            height: "100%", width: "100%", objectFit: "cover",
                            display: "block", objectPosition: "top"
                        }} src='./images/image31.jpg'
                            alt='...'></img>
                    </div>
                    <div className="mr-2" style={{ height: "20vh", width: "30%" }}>
                        <img style={{
                            height: "100%", width: "100%", objectFit: "cover",
                            display: "block", objectPosition: "top"
                        }} src='./images/image28.jpg'
                            alt='...'></img>
                    </div>
                    <div className="mr-2" style={{ height: "20vh", width: "30%" }}>
                        <img style={{
                            height: "100%", width: "100%", objectFit: "cover",
                            display: "block", objectPosition: "top"
                        }} src='./images/image52.jpg'
                            alt='...'></img>
                    </div>
                    <div className="" style={{ height: "20vh", width: "30%" }}>
                        <img style={{
                            height: "100%", width: "100%", objectFit: "cover",
                            display: "block", objectPosition: "top"
                        }} src='./images/image39.jpg'
                            alt='...'></img>
                    </div>
                </div>

                <div className="downBarWrapper">
                    <ul className="downBar flex flex-row justify-between">
                        <li style={{width:"25%"}}  className={activeIndex === 0 ? 'active' : ''}>
                            <a onClick={() => handleClick(0)} href="#">Thermal Insulation</a></li>
                        <li style={{width:"25%"}}  className={activeIndex === 1 ? 'active' : ''}>
                            <a onClick={() => handleClick(1)} href="#">Cladding</a></li>
                        <li style={{width:"25%"}}  className={activeIndex === 2 ? 'active' : ''}>
                            <a onClick={() => handleClick(2)} href="#">Roofing</a></li>
                        <li  style={{width:"25%"}} className={activeIndex === 3 ? 'active' : ''}>
                            <a onClick={() => handleClick(3)} href="#">Aluminium Windows & Doors</a></li>
                    </ul>
                </div>
               
            </div>
        </AllRap>
    )
}

export default Home