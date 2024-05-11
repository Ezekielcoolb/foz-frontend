import React from "react";
import styled from "styled-components";


const FooterRap = styled.div` 
background-color: black;

margin-top: 70px;
color: white;
padding: 40px;


a {
    text-decoration: none;
    color: #f1e1e4;
    margin: 10px;
}
.footer1 {
    max-width: 300px;
    margin-bottom: 50px;
}
`
const Footer = () => {

    return (
        <FooterRap>

            <div className="container d-flex flex-column g-2">
                <div className="footer1">
                    <h2 style={{color: "#f1e1e4"}}>Schedule a Consultation with us</h2>
                    <p>Let's work Together</p>
                </div>
                <div className="d-flex justify-content-around">
                    <div className="d-flex flex-column">
                        <h4>Contact us</h4>
                        <a href="#">folatz@gmail.com</a>
                        <a href=""></a>
                        <a href=""></a>
                    </div>
                    <div className="d-flex flex-column">
                        <h4>Follow Us</h4>
                        <a href="">Twitter</a>
                        <a href="">Facebook</a>
                        <a href="">Instagram</a>
                        <a href="">Linkedln</a>
                    </div>
                    <div className="d-flex flex-column"> 
                        <div>
                            <h4>Location</h4>
                        </div>
                        <div>
                            <h4>Opens</h4>
                        </div>
                    </div>
                    <div className="d-flex flex-column">
                        <h4>Navigation</h4>
                        <a href="">About Us</a>
                        <a href="">Services</a>
                    </div>
                </div>
            </div>
        </FooterRap>
    )
}

export default Footer