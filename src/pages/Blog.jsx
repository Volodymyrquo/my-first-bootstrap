import React from 'react';
import { Container, Col, Row, Media, Card, ListGroup } from "react-bootstrap";

const Blog = () => {
    return (
        <Container>
            <Row>
                <Col md="9">
                    <Media className="m-5">
                        <img
                            width="150"
                            height="150"
                            className="mr-3"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png"
                            alt=""
                        />

                        <Media.Body>
                            <h5>Blog post</h5>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin rutrum ligula,
                                 non maximus dolor mollis et. Vestibulum suscipit, tellus at cursus bibendum, velit odio
                                 sagittis felis, sed lobortis purus metus eget arcu. Nullam lacinia, ante a vulputate
                                 venenatis, felis ipsum pellentesque est, vitae cursus ipsum felis ut lectus.
                        </p>
                        </Media.Body>
                    </Media>

                    <Media className="m-5">
                        <img
                            width="150"
                            height="150"
                            className="mr-3"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png"
                            alt=""
                        />

                        <Media.Body>
                            <h5>Blog post</h5>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin rutrum ligula,
                                 non maximus dolor mollis et. Vestibulum suscipit, tellus at cursus bibendum, velit odio
                                 sagittis felis, sed lobortis purus metus eget arcu. Nullam lacinia, ante a vulputate
                                 venenatis, felis ipsum pellentesque est, vitae cursus ipsum felis ut lectus.
                        </p>
                        </Media.Body>
                    </Media>

                    <Media className="m-5">
                        <img
                            width="150"
                            height="150"
                            className="mr-3"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png"
                            alt=""
                        />

                        <Media.Body>
                            <h5>Blog post</h5>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin rutrum ligula,
                                 non maximus dolor mollis et. Vestibulum suscipit, tellus at cursus bibendum, velit odio
                                 sagittis felis, sed lobortis purus metus eget arcu. Nullam lacinia, ante a vulputate
                                 venenatis, felis ipsum pellentesque est, vitae cursus ipsum felis ut lectus.
                        </p>
                        </Media.Body>
                    </Media>

                    <Media className="m-5">
                        <img
                            width="150"
                            height="150"
                            className="mr-3"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png"
                            alt=""
                        />

                        <Media.Body>
                            <h5>Blog post</h5>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin rutrum ligula,
                                 non maximus dolor mollis et. Vestibulum suscipit, tellus at cursus bibendum, velit odio
                                 sagittis felis, sed lobortis purus metus eget arcu. Nullam lacinia, ante a vulputate
                                 venenatis, felis ipsum pellentesque est, vitae cursus ipsum felis ut lectus.
                    </p>
                        </Media.Body>
                    </Media>

                </Col>
                <Col md="3">
                    <h5 className="text-center mt-5">Categtories</h5>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Html/Css</ListGroup.Item>
                            <ListGroup.Item>JavaScript</ListGroup.Item>
                            <ListGroup.Item>Java</ListGroup.Item>
                            <ListGroup.Item>Python</ListGroup.Item>
                            <ListGroup.Item>C++</ListGroup.Item>
                        </ListGroup>
                    </Card>
                    <Card className="mt-3" bg="light">
                        <Card.Body>
                            <Card.Title>Side widget</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin rutrum ligula,
                                 non maximus dolor mollis et. Vestibulum suscipit, tellus at cursus bibendum, velit odio
                                 sagittis felis, sed lobortis purus metus eget arcu. Nullam lacinia, ante a vulputate
                                 venenatis, felis ipsum pellentesque est, vitae cursus ipsum felis ut lectus.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Blog;