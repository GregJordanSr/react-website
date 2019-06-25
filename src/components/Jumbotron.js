import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import tech from '../assets/tech.jpg'
import styled from 'styled-components';


const Styles = styled.div`
    .jumbo {
        background: url(${tech}) no-repeat fixed bottom;
        background-size: cover;
        color: #ccc;
        height: 200px;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: #000;
        opacity: 0.8;
        position: absolute 0;
        z-index: -1;
    }
`;
const Jumbotron = () => (
        <Styles>
            <Jumbo fluid className="jumbo">
                <div className="overlay">
                    <Container>
                        <h1>Welcome to Niche Programming</h1>
                        <p>We specialize in multiple areas of Technology</p>
                    </Container>
                </div>
            </Jumbo>
        </Styles>
    )

    
    export default Jumbotron;