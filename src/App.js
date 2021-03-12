import './App.css';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Jumbotron fluid>
        <Container>
          <h1>Contacts</h1>
        </Container>
      </Jumbotron>
      <Card border="info" style={{ width: '18rem' }}>
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
  );
}

export default App;
