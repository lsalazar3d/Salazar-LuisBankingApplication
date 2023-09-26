import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import UserContext  from '../usercontext/UserContext'; 



function Alldata() {
  const { user } = useContext(UserContext);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Your Balance</Card.Title>
        <Card.Text>
          <strong>Name:</strong> {user.name}<br />
          <strong>Email:</strong> {user.email}<br />
          <strong>Password:</strong> {user.password}<br />
          <strong>Balance:</strong> ${user.balance.toFixed(2)}<br />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Alldata;