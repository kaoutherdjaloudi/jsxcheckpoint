
import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';

function App() {
  const firstName = 'kaouther'; // variable de prenom 

  return (
    <Container className="mt-5">
      <Card style={{ width: '18rem' }}>
        <Image />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      <div className="mt-4">
        {firstName ? (
          <div>
            <p>Hello, {firstName}!</p>
            <img style={{ width: '200px', height: '200px' }} src="https://i.pinimg.com/originals/5e/4a/1c/5e4a1cf31e47d84947c6176e13096d89.jpg" alt="User Avatar" />
          </div>
        ) : (
          <p>Hello, there!</p>
        )}
      </div>
    </Container>
  );
}

export default App;
