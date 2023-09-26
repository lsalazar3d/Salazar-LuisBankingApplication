import React, { createContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
const UserContext = createContext();


function Createaccount(){
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [name, setName]         = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(UserContext);  
  
    function validate(field, label){
        if (!field) {
          setStatus('Error: ' + label);
          setTimeout(() => setStatus(''),3000);
          return false;
        }
        return true;
    }
  
    function handleCreate(){
      console.log(name,email,password);
      if (!validate(name,     'name'))     return;
      if (!validate(email,    'email'))    return;
      if (!validate(password, 'password')) return;
      ctx.users.push({name,email,password,balance:100});
      setShow(false);
    }    
  
    function clearForm(){
      setName('');
      setEmail('');
      setPassword('');
      setShow(true);
    }
  
    return (
            <form className="card-form">
            <h2>Create Account</h2>
            {status && <div className={`alert ${status === 'Success' ? 'alert-success' : 'alert-danger'}`}>{status}</div>}
            {show ? (
                <>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                    required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                    required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                    required
                    />
                </div>
                <button type="submit" className="btn btn-light" onClick={handleCreate}>
                    Create Account
                </button>
                </>
            ) : (
                <>
                <h5>Success</h5>
                <button type="button" className="btn btn-light" onClick={clearForm}>
                    Add another account
                </button>
                </>
            )}
            </form>

    )
  }

  export default Createaccount