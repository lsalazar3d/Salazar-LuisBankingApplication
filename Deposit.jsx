import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function Deposit() {
  const [amount, setAmount] = useState('');
  const [balance, setBalance] = useState(1000); 
  const [showNaNAlert, setShowNaNAlert] = useState(false);
  const [showNegativeAlert, setShowNegativeAlert] = useState(false);

  const handleDeposit = () => {
    const depositAmount = parseFloat(amount);

    if (isNaN(depositAmount)) {
      setShowNaNAlert(true);
    } else if (depositAmount < 0) {
      setShowNegativeAlert(true);
    } else {
      setBalance(balance + depositAmount);
      setAmount('');
    }
  };

  return (
    <Card>
      <Card.Header>Deposit</Card.Header>
      <Card.Body>
        <h5>Balance: ${balance.toFixed(2)}</h5>
        {showNaNAlert && (
          <Alert variant="danger" onClose={() => setShowNaNAlert(false)} dismissible>
            Please enter a valid number.
          </Alert>
        )}
        {showNegativeAlert && (
          <Alert variant="danger" onClose={() => setShowNegativeAlert(false)} dismissible>
            Please enter a positive number for deposit.
          </Alert>
        )}
        <div className="form-group">
          <label htmlFor="depositAmount">Deposit Amount</label>
          <input
            type="number"
            className="form-control"
            id="depositAmount"
            placeholder="Enter deposit amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <Button
          variant="primary"
          onClick={handleDeposit}
          disabled={!amount || isNaN(parseFloat(amount)) || parseFloat(amount) < 0}
        >
          Deposit
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Deposit;
