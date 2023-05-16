import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../redux/actions';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, Navigate } from 'react-router-dom';
const SingUp = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {loading,users}= useSelector (state=>state)
  
  const dispatch = useDispatch()
  const handleSubmit = (e)=>{
      e.preventDefault();
      const newUser= {
       fullName,
       email,
       password
      }
      dispatch(registerUser(newUser))
  }

  return (
    <div>
      
      {users?<Navigate to="/SingIn"/>:
<Form>
  
   
    
    <>
 
<Form.Group controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <Button onClick={handleSubmit} variant="primary" type="submit">
        Sign Up
      </Button>
      <Link to="/login"></Link> 
      </>
       
    </Form>
  }
    </div>
  )
}

export default SingUp
