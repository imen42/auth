import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../redux/actions';
import { Navigate } from 'react-router-dom';

const Profil = () => {
    const { users, isAuth}=useSelector( state => state.reducer );
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getProfile())
    }, []);

  return (
    <div>
      {
        !isAuth ? <Navigate to="/profil"/> :
        
        <div>
             <h3> hello {users.fullName}</h3>
        </div>
      }
    </div>
  )
}

export default Profil