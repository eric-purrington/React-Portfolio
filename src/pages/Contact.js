import React from "react";
import Container from "../components/Container";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";

function Contact() {
    return (
        <div>
            <Container>
                <ContactInfo />
            </Container>
            <Footer />
        </div>
    )
}

export default Contact;