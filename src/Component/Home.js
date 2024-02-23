import React from "react";


const Home = () => {
    return (
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
        </div>
    )
}

export default Home