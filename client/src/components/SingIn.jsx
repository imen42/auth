import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../redux/actions'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const SingIn = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {loading,users}= useSelector (state=>state.reducer)

    const dispatch = useDispatch()
    const handleSubmit = (e)=>{
        e.preventDefault();
        const user= {
         fullName,
         email,
         password
        }
        dispatch(loginUser(user))
    }


  return (
    <div>
   <Form>
   {
    loading ? <h1>loading... </h1>
    //  : localStorage.getItem('token')? <Redirect to= "/profile"></Redirect>
     :
    <>
      <Form.Group className="singin" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="singin" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password}  onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group>
      <Form.Group className="singin" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button onClick={handleSubmit} variant="primary" type="submit">
        LOGIN
      </Button>
      </>
   }
    </Form>
    </div>
  )
}

export default SingIn