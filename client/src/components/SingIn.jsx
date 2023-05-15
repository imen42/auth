import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { registerUser } from '../redux/actions'

const SingIn = () => {
    const [fullName, setfullName] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
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
   <Form>
      <Form.Group className="singin" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  value={email} onChange={(e)=>setemail(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="singin" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password}  onChange={(e)=>setpassword(e.target.value)} />
      </Form.Group>
      <Form.Group className="singin" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button onClick={handleSubmit} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default SingIn