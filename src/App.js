import { useState } from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import sample from './sample'

const Contacts = () => {
  const [contacts, set_contacts] = useState(sample);
  const delete_contact = (id) => {
    contacts.splice(id, 1);
    let temp = [...contacts];
    set_contacts(temp);
  }
  return (
    <Accordion defaultActiveKey="">
      {contacts.map((x, index) => {
        return (
          <Card border="info" className='Each' key={index}>
            <Accordion.Toggle as={Card.Header} eventKey={index.toString()}>
              {x.name}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={index.toString()}>
              <Card.Body>
                <Card.Title>Phone: {x.phone}</Card.Title>
                <Card.Text> Email: {x.email} </Card.Text>
                <Card.Text> Company: {x.company.name} </Card.Text>
                <Card.Text> Website: {x.website} </Card.Text>
                <Button variant="outline-danger" onClick={() => { delete_contact(index) }}>
                  Delete
                </Button>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        )
      })}
    </Accordion>
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
        <div className="Ontop Add_outer">
        <Button variant="outline-primary Ontop Add">+ Add</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
