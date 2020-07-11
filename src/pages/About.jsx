import React from 'react';
import { Container, Tab, Col, Nav, Row } from 'react-bootstrap';

const About = () => {
    const navItem = {
        "first": "Design", "second": "Team", "third": "Programming",
        "fourth": "Frameworks", "fifth": "Libreries"
    };
    let navItemArray = [];
    for (let key in navItem) {
        navItemArray.push(
            <Nav.Item>
                <Nav.Link eventKey={key}>{navItem[key]}</Nav.Link>
            </Nav.Item>
        )
    }
    const imgAddress = "https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/89d45527-c11f-425e-96f3-c917f27e5ca9/figma-covers-in-action.gif"
    const imgAddress2 = "https://image.shutterstock.com/image-vector/team-business-focus-on-executive-260nw-304960145.jpg"
    const imgAddress3 = "https://miro.medium.com/max/1920/1*uzN1l0eG7VaPBLAuDrTW-Q.png"
    const imgAddress4 = "https://data-flair.training/blogs/wp-content/uploads/sites/2/2019/07/JavaScript-Framework-2.jpg"
    const imgAddress5 = "https://i.morioh.com/990d21e6a2.png"
    const imgAddress6 = "https://miro.medium.com/max/1100/1*Q2t-jgIzVx_w1Cyy1YlbNw.png"
    
    const paneText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat."
    const paneText2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."

    const tabPane = {
        "first": [imgAddress, paneText], "second": [imgAddress2, paneText2], "third": [imgAddress3, paneText],
        "fourth": [imgAddress4, paneText], "fifth": [imgAddress5, paneText], "sixth": [imgAddress6, paneText],
        "seventh": [imgAddress, paneText], "eighth": [imgAddress, paneText], "nineth": [imgAddress, paneText]
    }
    let tabPaneArray = [];
  
    for (let key in tabPane) {
        let keyArray = tabPane[key];

        tabPaneArray.push(<Tab.Pane eventKey={key}>
                      <img src={keyArray[0]} alt="" />
            <p>{keyArray[1]}</p>

        </Tab.Pane>)
    }



    return (
        <Container>
            <Tab.Container id="ledt-tabs-example" defaultActiveKey="first" >
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column mt-2">
                            {navItemArray}
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            {tabPaneArray}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
}

export default About;