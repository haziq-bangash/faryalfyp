import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function userform() {
  return (
    <Container>
        <Form className="text-start">
        <h1>Account Settings</h1>
        <Row className="mb-3">
            <Form.Group as={Col} className="col-12 col-md-6" controlId="formGridEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="FirstName...." />
            </Form.Group>

            <Form.Group as={Col} className="col-12 col-md-6" controlId="formGridPassword">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" className="col-12 col-md-6" placeholder="Last Name...." />
            </Form.Group>
        </Row>

        <Row className="mb-3">
            <Form.Group as={Col} className="col-12 col-md-6" controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="xyz@example.com" />
            </Form.Group>

            <Form.Group as={Col} className="col-12 col-md-6" controlId="formGridPassword">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="number" placeholder="+00 000 0000000" />
            </Form.Group>
        </Row>

        <Row className="mb-3">
            <Form.Group as={Col} className="col-12 col-md-6" controlId="formGridEmail">
            <Form.Label>Company</Form.Label>
            <Form.Control type="text" placeholder="My Workspace" />
            </Form.Group>

            <Form.Group as={Col} className="col-12 col-md-6" controlId="formGridPassword">
            <Form.Label>Designation</Form.Label>
            <Form.Control type="text" placeholder="Developer" />
            </Form.Group>
        </Row>

        <Row className="mb-3">
            <Form.Label>Bio</Form.Label>
            <Form.Control
            as="textarea"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            style={{ height: '100px' }}
            />
            
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="check me out." />
        </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </Container>
  );
}

export default userform;