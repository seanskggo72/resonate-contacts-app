import { useState } from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import sample from './sample'

const Contacts = () => {
  const [contacts, set_contacts] = useState(sample);
  console.log(contacts);
  return (
    <div>
      {contacts.map((x, index) => {
        return (
          <div className='Sep' key={index}>
            <Card border="info" className='Each'>
              <Card.Header>{x.name}</Card.Header>
              <Card.Body>
                <Card.Title>Phone: {x.phone}</Card.Title>
                <Card.Text>
                  Email: {x.email}
                </Card.Text>
                <Card.Text>
                  Company: {x.company.name}
                </Card.Text>
                <Card.Text>
                  Website: {x.website}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        )
      })}
    </div>
  )
}

const App = () => {
  return (
    <div className="App">
      <div className='Contact_layout'>
        <Jumbotron fluid className='Banner'>
          <Container>
            <h1>Contacts</h1>
          </Container>
        </Jumbotron>
        <Contacts />
      </div>
    </div>
  );
}

export default App;
