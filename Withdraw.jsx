import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';


function Withdraw() {
  const [amount, setAmount] = useState('');
  const [balance, setBalance] = useState(1000); 
  const [showOverdraftAlert, setShowOverdraftAlert] = useState(false);
  const [showNaNAlert, setShowNaNAlert] = useState(false);

  const handleWithdraw = () => {
    const withdrawAmount = parseFloat(amount);

    if (isNaN(withdrawAmount)) {
      setShowNaNAlert(true);
    } else if (withdrawAmount < 0) {
      setShowOverdraftAlert(true);
    } else if (withdrawAmount > balance) {
      setShowOverdraftAlert(true);
    } else {
      setBalance(balance - withdrawAmount);
      setAmount('');
    }
  };

  return (
    <Card>
      <Card.Header>Withdraw</Card.Header>
      <Card.Body>
        <h5>Balance: ${balance.toFixed(2)}</h5>
        {showOverdraftAlert && (
          <Alert variant="danger" onClose={() => setShowOverdraftAlert(false)} dismissible>
            Withdrawal amount exceeds the account balance.
          </Alert>
        )}
        {showNaNAlert && (
          <Alert variant="danger" onClose={() => setShowNaNAlert(false)} dismissible>
            Please enter a valid number.
          </Alert>
        )}
        <div className="form-group">
          <label htmlFor="withdrawAmount">Withdraw Amount</label>
          <input
            type="number"
            className="form-control"
            id="withdrawAmount"
            placeholder="Enter withdrawal amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <Button
          variant="primary"
          onClick={handleWithdraw}
          disabled={!amount || isNaN(parseFloat(amount)) || parseFloat(amount) < 0}
        >
          Withdraw
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Withdraw;
