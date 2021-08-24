import { useState } from 'react';
import { Form, FormGroup, Row, Label, Input, Container, Button, Col, Table } from 'reactstrap';
import './App.css';
import AuthService from "./services/auth.service";
import Header from './components/header';

function App() {
  const headers = ['#', 'Email', 'Username'];
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userDetails, setUserDetails] = useState([]);

  const signUpForm = () => {
    const userData = {
      email, userName
    }
    AuthService.signUp(userData)
      .then((user) => {
        setUserDetails(prevArray => [...prevArray, user.data]);
        console.log(userDetails);
      });
  }

  return (
    <>
      <Header></Header>
      <div className="App">
        <Container>
          <Row>
            <Col>
              <Form>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="txtEmail" placeholder="please enter email" />
                </FormGroup>
                <FormGroup>
                  <Label for="userName">User Name</Label>
                  <Input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" name="userName" id="txtUserName" placeholder="please enter userName" />
                </FormGroup>
                <Row>
                  <Button style={{ marginTop: 10 }} color="primary" onClick={signUpForm}>Submit</Button>{' '}
                </Row>
              </Form>
            </Col>
          </Row>
          <Row style={{ marginTop: 50 }}>
            <Col>
              <h4>User Details </h4>
              <Table>
                <thead>
                  <tr>
                    {headers.map((header, index) => {
                      return (
                        <th key={index}>{header}</th>
                      )
                    })}

                  </tr>
                </thead>
                <tbody>
                  {userDetails.map((u, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{u.email}</td>
                        <td>{u.userName}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
