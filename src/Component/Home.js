import React, { useEffect, useState } from "react";

import styled from "styled-components";
import Marquee from "react-fast-marquee";

const HomeRap = styled.div`
    .landing {

        background: linear-gradient(to right, #212526 50%, #2e3233 50%);
        color: white;
        height: 90vh;
        overflow:hidden !important;
    }
.image{
    width:100%;
    height:90vh;
    display: block;
    overflow:hidden;
    position:absolute;
    img{
        width:100%;
        height:100%;  
    }
}

   .test-div{
    z-index:2 !important;
    max-width: 550px;
    margin-top: 20px;
   }
     .test-div p {
        max-width: 300px !important;
     }

     .button {
        border-radius: 30px;
        background-color: #212526;
        border: 1px solid #a18e2a;
        color: white;
        padding: 5px 20px;
        margin-top: 70px;
     }
     .design-cont h2{
        max-width: 200px;
        line-height: 1.4;
     } 
     .design-cont {
        max-width: 350px;
       
     } 
     .consult {

        background-image: url(../images/consult.jpg);
        background-size: cover;
        background-position: center;
        color: white;
        padding: 30px;
       
      }
      .parent{
        position:relative;
        width:auto;
        height: 400px;
        overflow:hidden !important;
      }
      .dark-bg{
        position:absolute;
        background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)); /* Adjust opacity and colors as needed */
        height:400px;
        width: 100%;
        color:white;
        padding: 30px;
      }
      
      .dark-bg p {
        max-width: 400px;
        font-size: 18px;
      }
      .dark-bg h3 {
        max-width: 400px;
        color: white;
      }
      .letter {
        background-image: url(../images/letter.jpg);
        margin-top: 40px;
        height:400px;
      }
      .design {
        background-image: url(../images/design.jpg);
        margin-top: 40px;
      }
      .construct {
        background-image: url(../images/const.jpg);
        margin-top: 40px;
      }
`


const Home = () => {



    return (
        <HomeRap>
            <div className="">
                <div className="d-flex flex-column landing">
                    <div className="p-5 test-div">
                        <h1 style={{ color: "white" }}>Building Tomorrow, Shielding Today</h1>
                        <div style={{ marginTop: "30px", color: "#b2b8b9" }}>
                            <p >
                                Your Trusted Source for Roofing, Cladding, Aluminium Windows and Doors and Insulation Solution.
                            </p>
                        </div>
                        <button className="button" type="button"> Get in Touch </button>
                    </div>
                    <div className="image">
                        <img src="./images/fozLand.png" />
                    </div>
                </div>
                <div style={{ padding: "50px", background: "#f5f5f5" }}>

                    <div className="container" >
                        <h2>What We Do</h2>
                        <div style={{ marginTop: '30px' }}>
                            <div className="d-flex justify-content-around">
                                <div style={{
                                    marginRight: "10px",
                                    width: "48%", height: "430px", borderRadius: "10px", background: "white",
                                    // Horizontally center the content
                                    alignItems: "center",
                                    padding: "15px",

                                }}>
                                    <img
                                        style={{ width: "100%", height: "80%", objectFit: "cover", borderRadius: "10px", }}
                                        className="title card-img"
                                        src="./images/image1.jpg"
                                        alt="house"
                                    />
                                    <div style={{ marginTop: "10px" }}>
                                        <h4 className="m-0">External Cladding</h4>
                                        <p className="mt-0">To offer the utmost protection against weather elements</p>
                                    </div>
                                </div>
                                <div style={{
                                    marginRight: "10px",
                                    width: "48%", height: "430px", borderRadius: "10px", background: "white",
                                    // Horizontally center the content
                                    alignItems: "center",
                                    padding: "10px",

                                }}>
                                    <img
                                        style={{ width: "100%", height: "80%", objectFit: "cover", borderRadius: "10px", }}
                                        className="title card-img"
                                        src="./images/image1.jpg"
                                        alt="house"
                                    />
                                    <div style={{ marginTop: "10px" }}>
                                        <h4 className="m-0">Internal Cladding</h4>
                                        <p className="mt-0">Transform your indoor spaces with our exquisite internal cladding selections</p>
                                    </div>
                                </div>
                                <div style={{
                                    marginRight: "10px",
                                    width: "48%", height: "430px", borderRadius: "10px", background: "white",
                                    // Horizontally center the content
                                    alignItems: "center",
                                    padding: "10px",

                                }}>
                                    <img
                                        style={{ width: "100%", height: "80%", objectFit: "cover", borderRadius: "10px", }}
                                        className="title card-img"
                                        src="./images/image1.jpg"
                                        alt="house"
                                    />
                                    <div style={{ marginTop: "10px" }}>
                                        <h4 className="m-0">Thermal Insullation</h4>
                                        <p className="mt-0">We offer a wide range of thermal and acoustic insulation</p>
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginTop: "40px" }} className="d-flex justify-content-between ">
                                <div style={{
                                    marginRight: "10px",
                                    width: "48%", height: "430px", borderRadius: "10px", background: "white",
                                    // Horizontally center the content
                                    alignItems: "center",
                                    padding: "10px",

                                }}>
                                    <img
                                        style={{ width: "100%", height: "80%", objectFit: "cover", borderRadius: "10px", }}
                                        className="title card-img"
                                        src="./images/image1.jpg"
                                        alt="house"
                                    />
                                    <div style={{ marginTop: "10px" }}>
                                        <h4 className="m-0">Roofing</h4>
                                        <p className="mt-0">From roofs to dreams, we've got you covered</p>
                                    </div>
                                </div>
                                <div style={{
                                    marginRight: "10px",
                                    width: "48%", height: "430px", borderRadius: "10px", background: "white",
                                    // Horizontally center the content
                                    alignItems: "center",
                                    padding: "10px",

                                }}>
                                    <img
                                        style={{ width: "100%", height: "80%", objectFit: "cover", borderRadius: "10px", }}
                                        className="title card-img"
                                        src="./images/image1.jpg"
                                        alt="house"
                                    />
                                    <div style={{ marginTop: "10px" }}>
                                        <h4 className="m-0">Aluminum Doors</h4>
                                        <p className="mt-0">Elevate your space with style and security</p>
                                    </div>
                                </div>
                                <div style={{
                                    marginRight: "10px",
                                    width: "48%", height: "430px", borderRadius: "10px", background: "white",
                                    // Horizontally center the content
                                    alignItems: "center",
                                    padding: "10px",

                                }}>
                                    <img
                                        style={{ width: "100%", height: "80%", objectFit: "cover", borderRadius: "10px", }}
                                        className="title card-img"
                                        src="./images/image1.jpg"
                                        alt="house"
                                    />
                                    <div style={{ marginTop: "10px" }}>
                                        <h4 className="m-0">Aluminum Windows</h4>
                                        <p className="mt-0">Elevate your view with precision-crafted aluminum windows</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div style={{ marginTop: "100px" }} className="container  d-flex flex-column justify-content-around">
                    <div className="design-cont">

                        <h2>How We Design</h2>
                        <p style={{ margin: "20px 0px" }}>We follow a trend and tested process to ensure that our clients are completely satisfied.</p>
                    </div>
                    <div  className="d-flex flex-column parent">

                        <div className="consult w-100 h-100">
                        </div>
                        <div className="dark-bg d-flex flex-column justify-content-around"><p>Step 1</p>
                            <h3>Consultation and on-Site Review</h3>
                            <p >We start by conducting consultation with our clients to understand their vission and requirements.
                                We then conduct and on-site review to access the space and identify any challenge that may need to be addressed.
                            </p></div>

                    </div>
                   

                    <div className="d-flex flex-column parent" >

                        <div className="letter consult w-100 h-100"> 
                        </div>
                        <div className="dark-bg d-flex flex-column justify-content-around">
                            <p>Step 2</p>
                            <h3>Letter of Agreement</h3>
                            <p >We start by conducting consultation with our clients to understand their vission atond requirements.
                                We then conduct and on-site review to access the space and identify any challenge that may need to be addressed.
                            </p>
                       
                    </div>
                    </div>
                    <div className="design consult">
                        <p>Step 3</p>
                        <h3>Design and Development</h3>
                        <p style={{ marginTop: '100px' }}>
                            Our team of designers create a design that is tailored to the client's need and preferences. We provide 3D models to help
                            client visualize the end result.
                        </p>
                    </div>
                    <div className="construct consult">
                        <p>Step 4</p>
                        <h3>Construction and Installation</h3>
                        <p style={{ marginTop: '100px' }}>
                            Once the design is approved, we move on to construction and installation. We ensure that the project is completed within the
                            allocated budget and deadline ensuring that our client is completely satisfied with the end result.
                        </p>
                    </div>
                </div>
                <div style={{ marginTop: "100px" }}>
                    <div className="container ">

                        <h3 style={{ maxWidth: "200px" }}>Some Selected project</h3>
                        <p style={{ margin: "20px 0px" }}>Check out some of our works</p>
                    </div>
                    <div>
                        <Marquee pauseOnHover={true} speed={40} direction="left">
                            <div style={{
                                marginRight: "10px",
                                width: "400px", height: "400px", borderRadius: "10px", background: "white",
                                display: "flex",
                                justifyContent: "center", // Horizontally center the content
                                alignItems: "center",
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.9)"
                            }}>
                                <img
                                    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px", }}
                                    className="title card-img"
                                    src="./images/image1.jpg"
                                    alt="house"
                                />
                            </div>
                            <div style={{
                                marginRight: "10px",
                                width: "400px", height: "400px", borderRadius: "10px", background: "white",
                                display: "flex",
                                justifyContent: "center", // Horizontally center the content
                                alignItems: "center",
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.9)"
                            }}>
                                <img
                                    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px", }}
                                    className="title card-img"
                                    src="./images/image1.jpg"
                                    alt="house"
                                />
                            </div>
                            <div style={{
                                marginRight: "10px",
                                width: "400px", height: "400px", borderRadius: "10px", background: "white",
                                display: "flex",
                                justifyContent: "center", // Horizontally center the content
                                alignItems: "center",
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.9)"
                            }}>
                                <img
                                    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px", }}
                                    className="title card-img"
                                    src="./images/image1.jpg"
                                    alt="house"
                                />
                            </div>
                            <div style={{
                                marginRight: "10px",
                                width: "400px", height: "400px", borderRadius: "10px", background: "white",
                                display: "flex",
                                justifyContent: "center", // Horizontally center the content
                                alignItems: "center",
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.9)"
                            }}>
                                <img
                                    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px", }}
                                    className="title card-img"
                                    src="./images/image1.jpg"
                                    alt="house"
                                />
                            </div>
                            <div style={{
                                marginRight: "10px",
                                width: "400px", height: "400px", borderRadius: "10px", background: "white",
                                display: "flex",
                                justifyContent: "center", // Horizontally center the content
                                alignItems: "center",
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.9)"
                            }}>
                                <img
                                    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px", }}
                                    className="title card-img"
                                    src="./images/image1.jpg"
                                    alt="house"
                                />
                            </div>
                            <div style={{
                                marginRight: "10px",
                                width: "400px", height: "400px", borderRadius: "10px", background: "white",
                                display: "flex",
                                justifyContent: "center", // Horizontally center the content
                                alignItems: "center",
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.9)"
                            }}>
                                <img
                                    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px", }}
                                    className="title card-img"
                                    src="./images/image1.jpg"
                                    alt="house"
                                />
                            </div>
                            <div style={{
                                marginRight: "10px",
                                width: "400px", height: "400px", borderRadius: "10px", background: "white",
                                display: "flex",
                                justifyContent: "center", // Horizontally center the content
                                alignItems: "center",
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.9)"
                            }}>
                                <img
                                    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px", }}
                                    className="title card-img"
                                    src="./images/image1.jpg"
                                    alt="house"
                                />
                            </div>
                            <div style={{
                                marginRight: "10px",
                                width: "400px", height: "400px", borderRadius: "10px", background: "white",
                                display: "flex",
                                justifyContent: "center", // Horizontally center the content
                                alignItems: "center",
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.9)"
                            }}>
                                <img
                                    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px", }}
                                    className="title card-img"
                                    src="./images/image1.jpg"
                                    alt="house"
                                />
                            </div>
                        </Marquee>
                    </div>

                </div>
            </div>

        </HomeRap>
    )
}

export default Home