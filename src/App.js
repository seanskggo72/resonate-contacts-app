import { useState } from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contacts = () => {
  const [contacts, set_contacts] = useState({});
  console.log(contacts);
  return (
    <div className='Contact_layout'>
      <div className='Sep'>
        <Card border="info" className='Each'>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Info Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
          </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className='Sep'>
        <Card border="info" className='Each'>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Info Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
          </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className='Sep'>
        <Card border="info" className='Each'>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Info Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
          </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <div className="App">
      <Jumbotron fluid className='Banner'>
        <Container>
          <h1>Contacts</h1>
        </Container>
      </Jumbotron>
      <Contacts />
    </div>
  );
}

export default App;
