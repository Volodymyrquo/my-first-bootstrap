import React from 'react';
import CarouselBox from '../components/CarouselBox';
import { Container, CardDeck, Card, Button } from 'react-bootstrap';


const Home = () => {
    

    
    const imgAddress1= "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    const imgAddress2= "https://images.pexels.com/photos/1560932/pexels-photo-1560932.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    const imgAddress3= "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    
    const paneText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat."

    const card = {
        "React developers": [imgAddress1, paneText],
        "Angiular developers": [imgAddress2, paneText],
        "Vue developers": [imgAddress3, paneText]
    }
    let cardArray = [];
    
    for (let key in card) {
        let keyArray = card[key];

        cardArray.push(<Card>
            <Card.Img
            variant="top"
            src={keyArray[0]}
            />
            <Card.Body>
            <Card.Title>{key}</Card.Title>
            <Card.Text>
                {keyArray[1]}
            </Card.Text>
            <Button variant="primary">About team</Button>
            </Card.Body>
        </Card>)
    }
   
    return (
        <>
            <CarouselBox />
            <Container>
                <h2 className="text-center m-4">Our team</h2>
                <CardDeck>
                    {cardArray}
                </CardDeck>
            </Container>
        </>
    );
}

export default Home;