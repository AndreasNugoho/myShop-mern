import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <Container>
                <Row>
                    {/* <Col>Copyright &copy; {currentYear} Suppee</Col> */}
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;