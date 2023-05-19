import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSpace, loginUser } from '../redux/actions';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Navigate } from 'react-router-dom';

const SingIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loading, users } = useSelector((state) => state.reducer);
  const userRole = useSelector((state) => state.userRole);

  const redirectPath = userRole === 'admin' ? '/admindash' : '/studentSpace';

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(loginUser(user));
    dispatch(getSpace());
  };

  return (
    <div>
      <style>
        {`
          .singin {
            padding: 20px 0px;
          }

          .singin__label {
            color: #7875B5;
            font-weight: 700;
          }

          .singin__input {
            border: none;
            border-bottom: 2px solid #D1D1D4;
            background: none;
            padding: 10px;
            padding-left: 24px;
            font-weight: 700;
            width: 100%;
            transition: .2s;
          }

          .singin__input:active,
          .singin__input:focus,
          .singin__input:hover {
            outline: none;
            border-bottom-color: #6A679E;
          }

          .singin__checkbox {
            color: #7875B5;
          }

          .singin__submit {
            background: #fff;
            font-size: 14px;
            margin-top: 30px;
            padding: 16px 20px;
            border-radius: 26px;
            border: 1px solid #D4D3E8;
            text-transform: uppercase;
            font-weight: 700;
            display: flex;
            align-items: center;
            width: 100%;
            color: #4C489D;
            box-shadow: 0px 2px 2px #5C5696;
            cursor: pointer;
            transition: .2s;
          }

          .singin__submit:active,
          .singin__submit:focus,
          .singin__submit:hover {
            border-color: #6A679E;
            outline: none;
          }

          .button__icon {
            font-size: 24px;
            margin-left: auto;
            color: #7875B5;
          }
        `}
      </style>

      <Form>
        {loading ? (
          <h1>loading...</h1>
        ) : users ? (
          <Navigate to="/studentSpace" />
        ) : (
          <>
            <Form.Group className="singin" controlId="formBasicEmail">
              <Form.Label className="singin__label">Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="singin__input"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="singin" controlId="formBasicPassword">
              <Form.Label className="singin__label">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="singin__input"
              />
            </Form.Group>

            <Form.Group className="singin" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Check me out"
                className="singin__checkbox"
              />
            </Form.Group>
          </>
        )}
      </Form>

      <Button
        onClick={handleSubmit}
        variant="primary"
        type="submit"
        className="singin__submit"
      >
        LOGIN
        <i className="button__icon fas fa-arrow-right"></i>
      </Button>
    </div>
  );
};

export default SingIn;
